import React from "react";
import '../style/components/ymap.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Col, Row } from "react-bootstrap";

export default function YMap() {
  return (
    <YMaps>
        <Row className="ymap-box">
            <Col>
                <h1 className="label">Мы на карте</h1>
                <Map className="map" defaultState={{ center: [44.780563, 33.997389], zoom: 15 }}>
                    <Placemark geometry={ [44.780548, 33.997504] }
                    options=
                    {
                        {
                        iconColor: 'red',
                        } 
                    }/>
                </Map>
            </Col>
            <Col>
                <h1 className="label">О нас</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt laboriosam neque commodi distinctio doloribus placeat voluptatum earum ex dignissimos a illum blanditiis nulla, iusto tempora sit minus, voluptatem laborum!</p>
            </Col>
        </Row>
    </YMaps>
  );
}