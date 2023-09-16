import React from "react";
import MagazineList from "../components/MagazineList";
import MilkList from "../components/MilkList";
import {useLocation, Link} from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import {BiCheese} from "react-icons/bi";
import {LuMilk} from "react-icons/lu";

export default function Magazine() {
  const [loadImage, setLoadImage] = React.useState(true);
  React.useEffect(() => {setTimeout(() => {
      setLoadImage(false)
  }, 1000)}, []);
  const {pathname} = useLocation();

  return (
    <>
      <div className="magazine-nav">
        <Link to="/magazine"><BiCheese className="icons"/></Link>
        <Link to="/magazine/milk"><LuMilk className="icons"/></Link>
      </div>
      {
        loadImage ?
          <Spinner animation="border" role="status" style={{left:(window.innerWidth/2)-15, position:'relative'}}/>
          :
          pathname==='/magazine'?
          <MagazineList/>
          :
          <MilkList/>
      }
    </>
  );
}