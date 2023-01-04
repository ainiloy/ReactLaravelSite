import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import  {faEnvelope,faPhone,faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="jumbotron  jumbotron-fluid bg-light mb-0">
                    <Container className="container">
                        <Row>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">Follow Me</h3>
                                <hr/>
                                    <p><a target="_blank" href="" className="footer-link"> Facebook</a></p>
                                    <p><a target="_blank" href="" className="footer-link"> Twitter</a></p>
                                    <p><a target="_blank" href="" className="footer-link"> LinkedIn </a></p>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">My Address</h3>
                                <hr/>
                                    <p className="des-text">  <FontAwesomeIcon icon={faMapMarkedAlt} /> Narayanganj, Bangladesh</p>
                                    <p className="des-text">  <FontAwesomeIcon icon={faPhone} /> +8801401622336</p>
                                    <p className="des-text">  <FontAwesomeIcon icon={faEnvelope} /> arifniloy.cse@gmail.com</p>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">About Us</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="">Welcome, we are AI LMS</a><br/>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">Pages</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="">Refund Policy</a><br/>
                                <a className="footer-link" target="_blank" href="">Terms & Conditions</a><br/>
                                <a className="footer-link" target="_blank" href="">Contact Us</a><br/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid={true} className="text-white m-0 text-center p-3 custom-bg">
                    <p className="credit-text my-2 ">2022 © All Rights Reserved By AI LMS</p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
