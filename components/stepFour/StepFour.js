import React from "react";
import { Col, Row } from "reactstrap";

function StepFour({ formData, setFormData, setStep }) {
    const submit = (e) => {
        e.preventDefault();
        // do all the api things here
        setStep(4);
    };
    return (
        <>
            <div className="register-content step-four">
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="step-title"> Thank you {formData.firstName}! <br />
                            Please review your answers</h2>
                        <ul className="review-container">
                            <li className="review">
                                <span className="title">First Name</span>
                                <span className="field">{formData.firstName}</span>
                            </li>
                            <li className="review">
                                <span className="title">Last Name</span>
                                <span className="field">{formData.lastName}</span>
                            </li>
                            <li className="review">
                                <span className="title">Github URL</span>
                                <span className="field">{formData.githubUrl}</span>
                            </li>
                            <li className="review">
                                <span className="title">Email</span>
                                <span className="field">{formData.email}</span>
                            </li>
                            <li className="review">
                                <span className="title">Country</span>
                                <span className="field">{formData.country}</span>
                            </li>
                            <li className="review">
                                <span className="title">How did you get started with web development?</span>
                                <span className="field">{formData.startWithDevelopment}</span>
                            </li>
                            <li className="review">
                                <span className="title">What do you enjoy about working on a Scrum team?</span>
                                <span className="field">{formData.enjoyScrum}</span>
                            </li>
                            <li className="review">
                                <span className="title">What technical trends are you most interested in?</span>
                                <span className="field">{formData.technicalTerms}</span>
                            </li>
                            <li className="review">
                                <span className="title">Skills in Javascript</span>
                                <span className="field">{formData.javascript}/5</span>
                            </li>
                            <li className="review">
                                <span className="title">Skills in Cascading Stylesheets (CSS) & Sass/SCSS</span>
                                <span className="field">{formData.css}/5</span>
                            </li>
                            <li className="review">
                                <span className="title">Skills in jQuery </span>
                                <span className="field">{formData.jQuery}/5</span>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className="d-none d-md-block">
                        <img className="img-right" src="images/step4.png" alt="Step Four" />
                    </Col>
                </Row>
            </div>
            <div className="register-footer">
                <button
                    onClick={() => { setStep(2); }}
                    className="info-btn btn btn-primary-alt">Back
                </button>
                <button
                    type="submit"
                    onClick={submit}
                    className="info-btn btn btn-submit">
                    Submit
                </button>
            </div>
        </>
    );
}
export default StepFour;
