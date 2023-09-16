import React from "react";
import '../style/components/footer.css'
import {Container, Row, Col, Image} from 'react-bootstrap';
import {SlSocialVkontakte} from "react-icons/sl";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import logo from '../access/photoPages/logo.png';

export default function Footer() {
  return (
    <Container style={{textAlign:'center'}}>
      <Row>
        <Col className="footer-mob">
          <a href="tel:89787810374" className="link">Менеджер: 89787810374</a>
          <br/>
          <a href="mailto:isaalexan@mail.ru" className="link">E-mail: isaalexan@mail.ru</a>
        </Col>
        <Col className="footer-mob">
          <Image src={logo} roundedCircle style={{width:'40%'}}/>
        </Col>
        <Col>
          <a className="link-social" href="tel:89787810374"><BsTelephone/></a>
          <a className="link-social" target="_blank" rel="noreferrer" href="https://m.vk.com/club211526090"><SlSocialVkontakte/></a>
          <a className="link-social" target="_blank" rel="noreferrer" href="https://instagram.com/koz_carstvo_2017"><AiOutlineInstagram/></a>
        </Col>
      </Row>
    </Container>
  );
}