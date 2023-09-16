import React from "react";
import '../style/components/videoList.css';
import {Container, Row} from 'react-bootstrap';
import video1 from "../access/video/video1.mp4";
import video2 from "../access/video/video2.mp4";
import video3 from "../access/video/video3.mp4";
import video4 from "../access/video/video4.mp4";
import video5 from "../access/video/video5.mp4";
import video6 from "../access/video/video6.mp4";

const video = [
    video1, video2,
    video3, video4,
    video5, video6
]

export default function VideoList() {
  return (
    <Container style={{textAlign:'center'}}>
        <div className="video">
            <Row>
            {
                video.map((v) => {return (<video key={v} src={v} preload="metadata" type="video/mp4" controls="controls" muted/>);})
            }
            </Row>
        </div>
    </Container>
  );
}