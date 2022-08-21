import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container
} from 'reactstrap';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <span className="copyright">
                    Copyright @ 2022. Some rights reserved.
                </span>
            </Container>
        </div>
    );
}
export default Footer;
