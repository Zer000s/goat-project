import React from "react";
import '../style/components/contacts.css';
import {SiGooglemaps} from "react-icons/si";
import {SlSocialVkontakte} from "react-icons/sl";
import {AiOutlineInstagram} from "react-icons/ai";
import { Container } from "react-bootstrap";

export default function ContactsContainer() {
  let link = "https://yandex.ru/maps/?ll=33.997728%2C44.780638&mode=poi&poi%5Bpoint%5D=33.997410%2C44.780571&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D171934829190&z=18.13";

  return (
    <Container>
      <div className="contacts">
        <div className="contacts-box">
          <h1>КОНТАКТЫ</h1>
          <div className="spisok-contacts">
            <a href={link} target="_blank" rel="noreferrer"><SiGooglemaps/>Республика Крым, 35К-019</a> 
            <br/>
            <a href="tel:89787810374">Менеджер: 89787810374</a>
            <br/>
            <a href="mailto:isaalexan@mail.ru">E-mail: isaalexan@mail.ru</a>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://m.vk.com/club211526090"><SlSocialVkontakte className="icon"/></a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/koz_carstvo_2017"><AiOutlineInstagram className="icon"/></a>
          </div>
        </div>
      </div>
    </Container>
  );
}