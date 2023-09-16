import React from "react";
import GalaryList from "../components/GalaryList";
import VideoList from "../components/VideoList";
import {useLocation, Link} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import {BiPhotoAlbum} from "react-icons/bi";
import {BsCameraVideo} from "react-icons/bs";

export default function Galary() {
  const [loadImage, setLoadImage] = React.useState(true);
  React.useEffect(() => {setTimeout(() => {
      setLoadImage(false)
  }, 1000)}, []);
  const {pathname} = useLocation();

  return (
    <>
      <div className="galary-nav">
        <Link to="/galary"><BiPhotoAlbum className="icons"/></Link>
        <Link to="/galary/video"><BsCameraVideo className="icons"/></Link>
      </div>
      {
        loadImage ?
          <Spinner animation="border" role="status" style={{left:(window.innerWidth/2)-15, position:'relative'}}/>
          :
          pathname==='/galary'?
          <GalaryList/>
          :
          <VideoList/>
      }
    </>
  );
}