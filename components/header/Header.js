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

function Header() {

    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="header">
            <Container>
                <div className="navigation">
                    <Navbar expand="lg" light>
                        <NavbarBrand href="/"><img className="logo" src="images/logo.png" alt="logi" /></NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="active" href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Web Development</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Consulting</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">UI/UX</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div >
            </Container>
        </div>
    );
}
export default Header;
