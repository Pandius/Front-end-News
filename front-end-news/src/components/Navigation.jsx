import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import northcoders from '../pictures/northcoders.png'
import "bootstrap/dist/css/bootstrap.min.css";




class Navigation extends Component {
    render() {
        return (
            <Navbar
                className="navbar"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                fixed="top"
            >
                <Navbar.Brand href="/">
                    <img className="brandImg" src={northcoders} alt="northcoders logo." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/articles">Articles</Nav.Link>
                        <NavDropdown title="Topics" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/articles/topic/coding">Coding</NavDropdown.Item>
                            <NavDropdown.Item href="/articles/topic/football">
                                Football
                </NavDropdown.Item>
                            <NavDropdown.Item href="/articles/topic/cooking">Cooking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Show all topics
                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        User Logged in: {this.props.userLoggedIn}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;