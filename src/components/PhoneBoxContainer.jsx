import React from "react";
import '../style/components/phonebox.css';
import InputMask from 'react-input-mask';
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";

const options = 
    <>
        <option value="Адыгейский">Адыгейский</option>;
        <option value="Пьяная коза">Пьяная коза</option>;
        <option value="Качотта">Качотта</option>;
        <option value="Шевр">Шевр</option>;
        <option value="Фета">Фета</option>;
        <option value="">- - -</option>
        <option value="Молоко">Молоко</option>;
        <option value="Кефир">Кефир</option>;
        <option value="Сметана">Сметана</option>;
        <option value="Творог">Творог</option>;
        <option value="Йогурт">Йогурт</option>;
    </>

export default function PhoneBoxContainer() {
    const[name,setName] = React.useState("");
    const[phone,setPhone] = React.useState("");
    const[type,setType] = React.useState("");

    async function sendMessage (){
        if(name!==""&&phone!==""&&type!=="")
        {
            await fetch("");
            setName("")
            setPhone("")
            setType("")
            alert("Мы вам перезвоним!")
        }
        else
        {
            alert("Вы не внесли данные!")
        }
    }

    return (
        <Container>
            <div className="phone">
                <div className="phonebox">
                    <h1>ОСТАВИТЬ ЗАЯВКУ</h1>
                    <input className="input" placeholder="Имя:" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <InputMask className="input" placeholder="+7 (999)-999-99-99" mask="+7 (999)-999-99-99" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                    <select className="input" onChange={(e)=>{setType(e.target.value)}}>
                        {
                            options
                        }
                    </select>
                    <Link className="linkText" to="/magazine" onClick={()=>{sendMessage()}}>ОТПРАВИТЬ</Link>
                </div>
            </div>
        </Container>
    );
}