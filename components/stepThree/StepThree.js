import React from "react";
import { Col, Row } from "reactstrap";

function StepThree({ formData, setFormData, setStep }) {
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const showSliderValue = (e) => {
        var rangeSlider = document.getElementById("rs-range-line");
        var rangeBullet = document.getElementById("rs-bullet");
        console.log(formData.javascript);
        rangeSlider.addEventListener("input", showSliderValue, false);

        function showSliderValue() {

            var bulletPosition = (rangeSlider.value / rangeSlider.max);
            rangeBullet.style.left = (bulletPosition * 578) + "px";
        }

    }

    return (
        <>
            <div className="register-content step-three">
                <Row>
                    <Col xs={12} md={8}>
                        <h2 className="step-title"> Describe your current <br />
                            programming skill set </h2>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="mb40">
                                    <label>Javascript</label>
                                    <div className="range-slider">
                                        <div className="range-count">
                                            <span className={formData.javascript === 1 ? 'count active' : 'count'}>1</span>
                                            <span className={formData.javascript === 2 ? 'count active' : 'count'}>2</span>
                                            <span className={formData.javascript === 3 ? 'count active' : 'count'}>3</span>
                                            <span className={formData.javascript === 4 ? 'count active' : 'count'}>4</span>
                                            <span className={formData.javascript === 5 ? 'count active' : 'count'}>5</span>
                                        </div>
                                        <input
                                            className="rs-range"
                                            id="rs-range-line"
                                            type="range"
                                            min="1"
                                            max="5"
                                            name="javascript"
                                            value={formData.javascript}
                                            onChange={(e) => { onInputChange(e); showSliderValue(e) }} />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={12}>
                                <div className="mb40">
                                    <label>Cascading Stylesheets (CSS) & Sass/SCSS</label>
                                    <div className="range-slider">
                                        <div className="range-count">
                                            <span className={formData.css === 1 ? 'count active' : 'count'}>1</span>
                                            <span className={formData.css === 2 ? 'count active' : 'count'}>2</span>
                                            <span className={formData.css === 3 ? 'count active' : 'count'}>3</span>
                                            <span className={formData.css === 4 ? 'count active' : 'count'}>4</span>
                                            <span className={formData.css === 5 ? 'count active' : 'count'}>5</span>
                                        </div>
                                        <input
                                            className="rs-range"
                                            id="rs-range-line"
                                            type="range"
                                            min="1"
                                            max="5"
                                            name="css"
                                            value={formData.css}
                                            onChange={(e) => { onInputChange(e); showSliderValue(e) }} />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={12}>
                                <div className="mb40">
                                    <label>jQuery</label>
                                    <div className="range-slider">
                                        <div className="range-count">
                                            <span className={formData.jQuery === 1 ? 'count active' : 'count'}>1</span>
                                            <span className={formData.jQuery === 2 ? 'count active' : 'count'}>2</span>
                                            <span className={formData.jQuery === 3 ? 'count active' : 'count'}>3</span>
                                            <span className={formData.jQuery === 4 ? 'count active' : 'count'}>4</span>
                                            <span className={formData.jQuery === 5 ? 'count active' : 'count'}>5</span>
                                        </div>
                                        <input
                                            className="rs-range"
                                            id="rs-range-line"
                                            type="range"
                                            min="1"
                                            max="5"
                                            name="jQuery"
                                            value={formData.jQuery}
                                            onChange={(e) => { onInputChange(e); showSliderValue(e) }} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4} className="d-none d-md-block">
                        <img className="img-right" src="images/step3.png" alt="Step Three" />
                    </Col>
                </Row>
            </div >
            <div className="register-footer">
                <button
                    onClick={() => { setStep(1); }}
                    className="info-btn btn btn-primary-alt">Back
                </button>
                <button
                    onClick={() => { setStep(3) }}
                    className="info-btn btn btn-primary"
                >
                    Next
                </button>
            </div>
        </>
    );
}
export default StepThree;
