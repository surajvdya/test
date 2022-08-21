import React, { Component } from "react";

import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

function StepFive() {
    return (
        <div className="step-five">
            <div className="success">
                <img className="icon" src="images/success.svg" />
                <span className="success-title">Your submission was received!</span>
                <span className="success-subtitle">Thank you, we will be in touch shortly</span>
            </div>
        </div>
    );
}
export default StepFive;
