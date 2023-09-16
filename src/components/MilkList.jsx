import React from "react";
import '../style/components/magazineList.css';
import { Link } from "react-router-dom";
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import milk from '../access/photoAccess/catalog/milk.JPG';
import smetana from '../access/photoAccess/catalog/smetana.jpg';
import yogurt from '../access/photoAccess/catalog/yogurt.jpg';
import tvorog from '../access/photoAccess/catalog/tvorog.jpg';
import kefir from '../access/photoAccess/catalog/kefir.jpg';

const listMilk = [
    {
      "id": 1,
      "name": "Молоко",
      "photo": milk,
      "price": "150 ₽",
      "first_description": "Из цельного молока, пастеризованное - 1 Л.",
      "description": ""
    },
    {
      "id": 2,
      "name": "Сметана 30%",
      "photo": smetana,
      "price": "225 ₽",
      "first_description": "250 МЛ.",
      "description": ""
    },
    {
      "id": 3,
      "name": "Творог 5%",
      "photo": tvorog,
      "price": "800 ₽",
      "first_description": "1 КГ.",
      "description": ""
    }
  ]

const listMilk2 = [
  {
    "id": 1,
    "name": "Кефир",
    "photo": kefir,
    "price": "150 ₽",
    "first_description": "0,5 МЛ.",
    "description": ""
  },
  {
    "id": 2,
    "name": "Йогурт",
    "photo": yogurt,
    "price": "150 ₽",
    "first_description": "Черника, Персик-Манго, Вишня, Смородина, Лесная ягода, Абрикос, Клубника - 0,5 МЛ.",
    "description": ""
  }
]

export default function MilkList() {
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
            listMilk.map((cheese) => 
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
            listMilk2.map((cheese) => 
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