import React from "react";
import '../style/components/magazineList.css';
import { Link } from "react-router-dom";
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import pyanaya_koza from '../access/photoAccess/catalog/pyanaya_coza.jpg';
import feta from '../access/photoAccess/catalog/feta.jpg';
import shevr from '../access/photoAccess/catalog/shevr.jpg';
import adigeyskiy from '../access/photoAccess/catalog/adigeyskiy.jpg';
import kachota from '../access/photoAccess/catalog/kachota.jpg';

const listCheese = [
  {
    "id": 1,
    "name": "Пьяная коза",
    "photo": pyanaya_koza,
    "price": "2200 ₽",
    "first_description": "1 КГ.",
    "description": ""
  },
  {
    "id": 2,
    "name": "Шевр",
    "photo": shevr,
    "price": "550 ₽",
    "first_description": "250 МЛ.",
    "description": ""
  },
  {
    "id": 3,
    "name": "Фета",
    "photo": feta,
    "price": "700 ₽",
    "first_description": "500 МЛ.",
    "description": ""
  }
]

const listCheese2 = [
  {
    "id": 1,
    "name": "Адыгейский",
    "photo": adigeyskiy,
    "price": "1300 ₽",
    "first_description": "Из цельного молока 1 КГ.",
    "description": ""
  },
  {
    "id": 2,
    "name": "Качотта",
    "photo": kachota,
    "price": "2000 ₽",
    "first_description": "1 КГ.",
    "description": ""
  }
]

export default function MagazineList() {
  const [show, setShow] = React.useState(false);
  const [props, setProps] = React.useState('');
  const handleClose = () => setShow(false);
  const handleShow = (props) => {
    setShow(true);
    setProps(props);
  }

  return (
    <Container style={{textAlign:'center'}}>
      <div className="magazine">
        <Row>
          {
            listCheese.map((cheese) => 
            { 
              return (
                <Col key={cheese.id} className="magazine-list-box">
                  <img alt={cheese.name} src={cheese.photo}/>
                  <h1>{cheese.name}</h1>
                  <p>{cheese.first_description}</p>
                  <h2>{cheese.price}</h2>
                  <div className="more" onClick={() => handleShow(cheese.name)}>ПОДРОБНЕЕ</div>
                </Col>
              );
            })
          }
        </Row>
        <Row>
          {
            listCheese2.map((cheese) => 
            { 
              return (
                <Col key={cheese.id} className="magazine-list-box">
                  <img alt={cheese.name} src={cheese.photo}/>
                  <h1>{cheese.name}</h1>
                  <p>{cheese.first_description}</p>
                  <h2>{cheese.price}</h2>
                  <div className="more" onClick={() => handleShow(cheese.name)}>ПОДРОБНЕЕ</div>
                </Col>
              );
            })
          }
        </Row>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{backgroundColor:'#3E2E1E', borderColor:'#FD8B05'}}>
            <Modal.Title>{props}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:'#3E2E1E', borderColor:'#FD8B05'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem tenetur asperiores pariatur architecto repellendus nihil eius distinctio, libero consectetur suscipit maiores quo quam ipsam. Minus corrupti cumque similique fugiat!
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'#3E2E1E', borderColor:'#FD8B05'}}>
            <Button className="linkText" variant="none" onClick={handleClose}>Назад</Button>
            <Link className="linkText" to="/phonebox">Заказать</Link>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}