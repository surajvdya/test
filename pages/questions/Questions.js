import React, { useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import Question1 from "components/question1";
import Question2 from "components/question2";
import Question3 from "components/question3";

function Questions() {

    return (
        <div className="auth-page">
            <Container>
                <Row>
                    <Col>
                       <Question1/>
                    </Col>
                    <Col>
                       <Question2/>
                    </Col>
                    <Col>
                       <Question3/>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};



export default (Questions);
