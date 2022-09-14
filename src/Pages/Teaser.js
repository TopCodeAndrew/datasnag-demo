import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectQueriedUser } from "../redux/querySlice";
import { countDataPoints } from "../Components/countObj";

const Teaser = () => {
    const [dataCount, setDataCount] = useState(0);
    let currentQueriedUser = useSelector(selectQueriedUser);

    useEffect(() => {
        setDataCount(countDataPoints(currentQueriedUser));
    });

    return (
        <div style={{ width: "90vw" }}>
            <h2>
                We were able to find {dataCount ? dataCount : null} data points
                related to the user
            </h2>
        </div>
    );
};

export default Teaser;
