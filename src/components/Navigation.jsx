import React from "react";
import '../style/components/navigation.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-black" style={{borderBottomStyle:'solid', borderWidth:'1px'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'#FD8B05', position:'relative', left:'80%'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/magazine">Магазин</Nav.Link>
            <Nav.Link href="/galary">Галерея</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}