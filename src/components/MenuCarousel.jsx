import React from "react";
import '../style/components/carousel.css';
import {Carousel} from 'react-bootstrap';
import pyanaya_koza from '../access/photoAccess/catalog/pyanaya_coza.jpg';
import feta from '../access/photoAccess/catalog/feta.jpg';
import shevr from '../access/photoAccess/catalog/shevr.jpg';
import milk from '../access/photoAccess/catalog/milk.JPG';
import smetana from '../access/photoAccess/catalog/smetana.jpg';
import yogurt from '../access/photoAccess/catalog/yogurt.jpg';
import tvorog from '../access/photoAccess/catalog/tvorog.jpg';

const Catalog = [
  {
    "id": 1,
    "name": "Пьяная коза",
    "photo": pyanaya_koza,
    "price": "300 ₽",
    "description": ""
  },
  {
    "id": 2,
    "name": "Шевр",
    "photo": shevr,
    "price": "500 ₽",
    "description": ""
  },
  {
    "id": 3,
    "name": "Фета",
    "photo": feta,
    "price": "350 ₽",
    "description": ""
  },
  {
    "id": 4,
    "name": "Молоко",
    "photo": milk,
    "price": "150 ₽",
    "description": "Из цельного молока, пастеризованное - 1 Л."
  },
  {
    "id": 5,
    "name": "Сметана 30%",
    "photo": smetana,
    "price": "225 ₽",
    "description": "250 МЛ."
  },
  {
    "id": 6,
    "name": "Творог 5%",
    "photo": tvorog,
    "price": "800 ₽",
    "description": "1 КГ."
  },
  {
    "id": 7,
    "name": "Йогурт",
    "photo": yogurt,
    "price": "150 ₽",
    "description": "Черника, Персик, Манго, Вишня, Смородина, Малина, Лесная ягода, Абрикос, Клубника"
  }
]

export default function MenuCarousel() {
  return (
  <>
    <h1 className="label">АССОРТИМЕНТ</h1>
    <Carousel interval='200000'>
        {
          Catalog.map((cheese) => {
            return (
              <Carousel.Item key={cheese.id}>
                <div className="cheese-carousel">
                  <img alt={cheese.name} src={cheese.photo}/>
                  <div className="box">
                    <h1>{cheese.name}</h1>
                    <hr/>
                    <p>Тут будет описание товара</p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })
        }
    </Carousel>
  </>
  );
}