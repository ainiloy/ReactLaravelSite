import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

class AppRoute extends Component {
    render() {
        return (
            <div>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">AI LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Nav.Link as={Link} eventKey="/" to="/">HOME</Nav.Link>
          <Nav.Link as={Link} eventKey="/courseplan" to="/courseplan">COURSE PLAN</Nav.Link>
          <Nav.Link as={Link} eventKey="/registration" to="/registration">REGISTRATION</Nav.Link>
          <Nav.Link as={Link} eventKey="/freeclass" to="/freeclass">FREE CLASS</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            </div>
        );
    }
}

export default AppRoute;
