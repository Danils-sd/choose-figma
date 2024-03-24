import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { validateEmail, validPassword } from "../../helper";
import CONSTS from "../../CONSTS";
function Auth(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handlEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlPassword = (e) => {
        setPassword(e.target.value);
    }
    const handlReg = () => {
        navigate("/regist");
    }
    const handlReset = () => {
        navigate("/reset");
    }
    const handlBtn = () => {
        if(!validateEmail(email)){
            alert("Неверный формат почты");
        } else if (!validPassword(password)){
            alert("Пароль должен быть отр 5 и до 12 символов");
        } else {
            try {
                fetch(CONSTS.URL + "/auth/singIn", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(res => {
                    return res.json();
                }).then(({data}) => {
                    console.log(data);
                    if(data.uId != -1){
                        localStorage.setItem("token", data.uId);
                        navigate("/");
                    } else {
                        alert("Ошибка Авторизации");
                    }
                })
            } catch (error) {
                console.log(error);
                return -1;
            }
        }
    }
    return(
        <div className="auth-container">
            <span className="auth-container--sercl-blue"/>
            <span className="auth-container--sercl-perpl"/>
            <div className="auth-container--card">
                <h1 className="auth-container--card-ab">Sing in ChooseFigma</h1>
                <input value={email} onChange={(e) => handlEmail(e)} className="auth-container--card-inp-email" placeholder="Почта"/>
                <input value={password} onChange={(e) => handlPassword(e)} className="auth-container--card-inp-password" placeholder="Пароль"/>
                <button onClick={handlBtn} className="auth-container--card-btn">Продолжить</button>
                <span className="auth-container--card-to--reg">Нет аккаунта?<span onClick={handlReg} className="auth-container--card-to--reg-src">Регистрация</span></span>
                <span onClick={handlReset} className="auth-container--card-reset">Забыли пароль?</span>
            </div>
        </div>
    )
}

export default Auth;