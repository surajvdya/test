import React, { useState } from "react";
import { Col, Row, Input } from "reactstrap";

function StepOne({ formData, setFormData, setStep }) {
    const [error, setError] = useState({});
    const age = "";
    const submit = (e) => {
        e.preventDefault();
        if (
            formData.firstName !== "" &&
            formData.lastName !== "" &&
            formData.email !== "" &&
            formData.githubUrl !== "" &&
            formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
            formData.githubUrl.match('((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?')
        ) {
            setStep(1);
        }
    };

    const onInputChange = (e) => {
        if (!e.target.value) {
            setError({ ...error, [e.target.name]: "This field is required" });
        } else {
            if (e.target.name === "email") {
                let err = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? { [e.target.name]: "" }
                    : { [e.target.name]: "Please enter a valid email address" };
                setError({ ...error, ...err });
            } else if (e.target.name === "githubUrl") {
                let err = e.target.value.match('((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?')
                    ? { [e.target.name]: "" }
                    : { [e.target.name]: "Please enter a valid github url" };
                setError({ ...error, ...err });
            } else {
                setError({ ...error, [e.target.name]: "" });
            }
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    return (
        <>
            <div className="register-content step-one">
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="step-title"> Sign up to begin <br />
                            your journey with us</h2>

                        <Row>
                            <div>
                                {/* render contact form input fields here */}
                                <input type="text" name="firstname" placeholder="First Name" />
                                <input type="number" name="firstname" placeholder="First Name" />
                                {(age >= 14)}{
                                    <input type="number" name="firstname" placeholder="First Name" />
                                }
                            </div>
                            <Col xs={12} md={6}>
                                <div className="mb40">
                                    <div className="has-float-label required">
                                        <Input
                                            type="text"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={(e) => onInputChange(e)}
                                            required />
                                        <label>First Name</label>
                                        {error.firstName && <span className="has-error">{error.firstName}</span>}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="mb40">
                                    <div className="has-float-label required">
                                        <Input
                                            type="text"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={(e) => onInputChange(e)}
                                            required />
                                        <label>Last Name</label>
                                        {error.lastName && <span className="has-error">{error.lastName}</span>}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="mb40">
                                    <div className="has-float-label required">
                                        <Input
                                            type="text"
                                            placeholder="Github URL"
                                            name="githubUrl"
                                            value={formData.githubUrl}
                                            onChange={(e) => onInputChange(e)}
                                            required />
                                        <label>Github URL</label>
                                        {error.githubUrl && <span className="has-error">{error.githubUrl}</span>}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="mb40">
                                    <div className="has-float-label required">
                                        <Input
                                            type="email"
                                            placeholder="Email address"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) => onInputChange(e)}
                                            required />
                                        <label>Email address</label>
                                        {error.email && <span className="has-error">{error.email}</span>}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="mb40">
                                    <div className="has-float-label">
                                        <select placeholder="First Name" name="country" onChange={(e) => onInputChange(e)} value={formData.country}>
                                            <option>Select country</option>
                                            <option value="United Kingdom"  >United Kingdom</option>
                                            <option value="Nepal">Nepal</option>
                                        </select>
                                        <label>Select Country</label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className="custom-checkbox_container">
                            <div className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="checkbox form-control"
                                    name="updates"
                                    onChange={(e) => onInputChange(e)}
                                    checked={formData.updates ? "checked" : ""}
                                />
                                <span className="checkbox-border"></span>
                            </div>
                            I would like to receive information regarding this important message: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sem nunc. Ut luctus pretium enim et vulputate. Phasellus consequat lacus placerat, fringilla augue id, tristique sapien. In consectetur est vel malesuada egestas. Maecenas facilisis, sem nec bibendum ornare, orci neque maximus nulla, bibendum fermentum leo nisi ac turpis. Praesent ex eros, auctor hendrerit sodales at, dictum at ligula. Vivamus a lobortis magna.
                        </div>
                        <div className="custom-checkbox_container">
                            <div className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="checkbox form-control"
                                    name="code"
                                    onChange={(e) => onInputChange(e)}
                                    checked={formData.code ? "checked" : ""}
                                />
                                <span className="checkbox-border"></span>
                            </div>
                            Allow us to take a peek at your code and ways of thinking
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="d-none d-md-block">
                        <img className="img-right" src="images/step1.png" alt="Step One" />
                    </Col>
                </Row>
            </div>
            <div className="register-footer">
                <button
                    disabled
                    className="info-btn btn btn-primary-alt">Back
                </button>
                <button
                    onClick={submit}
                    disabled={
                        formData.firstName === "" ||
                        formData.lastName === "" ||
                        formData.email === "" ||
                        formData.githubUrl === ""
                    }
                    className="info-btn btn btn-primary"
                >
                    Next
                </button>
            </div>
        </>
    );
}
export default StepOne;
