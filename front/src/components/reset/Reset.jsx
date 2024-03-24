import { useState } from "react";
import "./Reset.css";
import { useNavigate } from "react-router-dom";
function Reset(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handlEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlReg = () => {
        navigate("/regist");
    }
    return(
        <div className="reset-container">
            <span className="reset-container--sercl-blue"/>
            <span className="reset-container--sercl-perpl"/>
            <div className="reset-container--card">
                <h1 className="reset-container--card-ab">Reset ChooseFigma</h1>
                <input value={email} onChange={(e) => handlEmail(e)} className="reset-container--card-inp-email" placeholder="Почта"/>
                <button className="reset-container--card-btn">Продолжить</button>
                <span className="reset-container--card-to--reg">Нет аккаунта?<span onClick={handlReg} className="reset-container--card-to--reg-src">Регистрация</span></span>
            </div>
        </div>
    )
}

export default Reset;