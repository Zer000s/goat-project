import React from "react";
import '../style/components/galaryList.css';
import {Container, Row} from 'react-bootstrap';
import photo1 from "../access/galary/photo1.jpg";
import photo2 from "../access/galary/photo2.jpg";
import photo3 from "../access/galary/photo3.jpg";
import photo4 from "../access/galary/photo4.jpg";
import photo5 from "../access/galary/photo5.jpg";
import photo6 from "../access/galary/photo6.jpg";
import photo7 from "../access/galary/photo7.jpg";
import photo8 from "../access/galary/photo8.jpg";
import photo9 from "../access/galary/photo9.jpg";
import photo10 from "../access/galary/photo10.jpg";
import photo11 from "../access/galary/photo11.jpg";
import photo12 from "../access/galary/photo12.jpg";
import photo13 from "../access/galary/photo13.jpg";
import photo14 from "../access/galary/photo14.jpg";
import photo15 from "../access/galary/photo15.jpg";
import photo16 from "../access/galary/photo16.jpg";
import photo17 from "../access/galary/photo17.jpg";
import photo18 from "../access/galary/photo18.jpg";
import photo20 from "../access/galary/photo20.jpg";
import photo21 from "../access/galary/photo21.jpg";
import photo22 from "../access/galary/photo22.jpg";
import photo23 from "../access/galary/photo23.jpg";
import photo24 from "../access/galary/photo24.jpg";
import photo25 from "../access/galary/photo25.jpg";
import photo26 from "../access/galary/photo26.jpg";

const photo = [
    photo1, photo2,
    photo3, photo4,
    photo5, photo6,
    photo7, photo8,
    photo9, photo10, 
    photo11, photo12, 
    photo13, photo14, 
    photo15, photo16, 
    photo17, photo18, 
    photo20, photo21,
    photo22, photo23,
    photo24, photo25,
    photo26
  ]

export default function GalaryList() {
  return (
    <Container style={{textAlign:'center'}}>
        <div className="photo">
            <Row>
            {
                photo.map((p) => {return (<img key={p} alt="img" src={p} onClick={()=>{window.open(p)}} loading="lazy"/>);})
            }
            </Row>
        </div>
    </Container>
  );
}