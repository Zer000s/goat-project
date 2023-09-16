import {Routes, Route} from "react-router-dom";
import '../style/app.css';
import Main from "./Main";
import Magazine from "./Magazine";
import Galary from "./Galary";
import Contacts from "./Contacts";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PhoneBox from "./PhoneBox";

export default function App() {
  return (
    <>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/magazine" element={<Magazine/>}/>
          <Route path="/magazine/milk" element={<Magazine/>}/>
          <Route path="/galary" element={<Galary/>}/>
          <Route path="/galary/video" element={<Galary/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/phonebox" element={<PhoneBox/>}/>
        </Routes>
      <Footer/>
    </>
  );
}