require("dotenv").config();
const { SERVER_PORT } = process.env;
const express = require("express");
const cors = require("cors");
const dataCntrl = require("./dataController");
const { getUserData } = dataCntrl;
const app = express();
app.use(express.json());
app.use(cors());

const stripe = require("stripe")(
    "sk_test_51IAKa4GUHQ1yJgjQrYW4eJAc0M0vO9ds2RBVRk4JfWrK9XwXq9CijICrzw0TKvuB5H3yTOQL4bDL8dYjv6Sgh4EA006gTJUtmP"
);

app.post("/api/user_data", getUserData);

app.post("/create-checkout-session", async (req, res) => {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: "price_1LiQ3mGUHQ1yJgjQrth4p2bD",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/results?success=true`,
        cancel_url: `http://localhost:3000?canceled=true`,
    });

    res.redirect(303, session.url);
});

app.listen(SERVER_PORT, () =>
    console.log(`Server is live on port ${SERVER_PORT}.`)
);
