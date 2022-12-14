import React, { useState } from "react";
import axios from "axios";
import { setNewQueriedUser } from "../redux/querySlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import { outlinedInputClasses, selectClasses } from "@mui/material";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";

const Landing = () => {
    const [userInput, setUserInput] = useState("");
    const [dataPointType, setDataPointType] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setDataPointType(event.target.value);
    };

    let handleClick = (type, info) => {
        let userInfo =
            type === "email"
                ? {
                      email: info,
                  }
                : {
                      phone: info,
                  };

        axios
            .post("http://localhost:5000/api/user_data", userInfo)
            .then((res) => {
                console.log(res.data);
                dispatch(setNewQueriedUser(res.data));
                navigate("/teaser");
            })
            .catch((err) => alert("Could not find any associated data"));
    };
    return (
        <div className="Landing">
            <div>
                <h1 className="catchphrase">
                    {" "}
                    Your information is out there...
                </h1>
                <h1> We can tell you how much</h1>
            </div>
            <div className="info-input">
                <div className="first-line-info-input">
                    <h3> Find data related to the</h3>
                    {/* <select onChange={(e)=>setDataPointType(e.target.value)}style={{marginLeft:'10px'}}id="data-type">
          <option value="email"> email </option>
          <option value="phone"> phone number</option>
        </select> */}

                    <FormControl
                        sx={{
                            width: "100px",
                            background: "rgba(200,200,200,.8)",
                            border: "1px solid red",
                        }}
                    >
                        <Select
                            size={"large"}
                            onChange={handleChange}
                            defaultValue={30}
                        >
                            <MenuItem value={"email"}>
                                <h3>email</h3>
                            </MenuItem>
                            <MenuItem value={"phone"}>phone</MenuItem>
                        </Select>
                    </FormControl>

                    <h3 style={{ margin: "0px 10px" }}>:</h3>
                    <TextField
                        id="standard-basic"
                        label="email or phone"
                        variant="standard"
                        onChange={(e) => {
                            setUserInput(e.target.value);
                        }}
                    />
                    {/* <input  placeholder='insert email or phone here'/> */}
                </div>
                <Button
                    size="large"
                    variant="contained"
                    onClick={() => {
                        if (dataPointType) {
                            if (!userInput) {
                                alert(
                                    `please provide ${
                                        dataPointType === "phone"
                                            ? "a phone number"
                                            : `an ${dataPointType}`
                                    }`
                                );
                            } else {
                                handleClick(dataPointType, userInput);
                            }
                        } else {
                            alert("please provide data type");
                        }
                    }}
                >
                    SEARCH {dataPointType.toUpperCase()}
                </Button>
            </div>
        </div>
    );
};

export default Landing;
