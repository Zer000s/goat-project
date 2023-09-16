import React from "react";
import '../style/components/header.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from '../access/photoPages/logo.png';

export default function HeaderMain() {
  return (
    <Container style={{textAlign:'center'}}>
      <Row>
        <Col>
            <Image src={logo} roundedCircle style={{width:'75%'}}/>
        </Col>
        <Col>
            <h1 className="header-text-label">КОЗЬЕ ЦАРСТВО</h1>
        </Col>
        <Col>
            <a href="tel:89787810374" className="link">Менеджер: 89787810374</a>
            <br/>
            <a href="mailto:isaalexan@mail.ru" className="link">E-mail: isaalexan@mail.ru</a>
        </Col>
      </Row>
    </Container>
  );
}