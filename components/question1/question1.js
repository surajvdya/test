import React, { useState } from "react";
import { Col, Row, Input } from "reactstrap";

function Question1() {
    // Make a copy with the spread syntax

    const ContentDisplay = () => {
        var num = [1, 2, 5, 6, 7, 3, 4, 8, 9, 10]
        const sorted = [...num].sort((a, b) => b - a);
        console.log(sorted)
        return sorted;
    }
    return (
        <>
            <div className="questions">
                <h2>Print out the numbers 1 to 10 in descending order.</h2>
                <h3><b>Answer: </b><ContentDisplay /></h3>
                <pre> You can see the output in console as well</pre>
            </div>

        </>
    );
}
export default Question1;
