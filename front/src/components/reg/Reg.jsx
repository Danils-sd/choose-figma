import { useState } from "react";
import "./Reg.css";
import { useNavigate } from "react-router-dom";
import CONSTS from "../../CONSTS";
import { validLogin, validateEmail, validPassword} from "../../helper"
function Reg(){
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlPassword = (e) => {
        setPassword(e.target.value);
    }

    const handlLogin = (e) => {
        setLogin(e.target.value);
    }

    const handlAuth = () => {
        navigate("/auth");
    }

    const btnHandler = () => {
        if(!validLogin(login)){
            alert("Логин должен быть длиннее 5 и короче 12 символов");
        } else if (!validateEmail(email)){
            alert("Неверный формат почты");
        } else if (!validPassword(password)){
            alert("Пароль должен быть отр 5 и до 12 символов");
        } else {
            try {
                fetch(CONSTS.URL + "/auth/regist", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login: login,
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
                        alert("Ошибка Регистрации");
                    }
                })
            } catch (error) {
                console.log(error);
                return -1;
            }
        }
    }
    return(
        <div className="reg-container">
            <span className="reg-container--sercl-blue"/>
            <span className="reg-container--sercl-perpl"/>
            <div className="reg-container--card">
                <h1 className="reg-container--card-ab">Regist in ChooseFigma</h1>
                <input value={login} onChange={(e) => handlLogin(e)} className="reg-container--card-inp-email" placeholder="Логин"/>
                <input value={email} onChange={(e) => handlEmail(e)} className="reg-container--card-inp-password" placeholder="Почта"/>
                <input value={password} onChange={(e) => handlPassword(e)} className="reg-container--card-inp-password" placeholder="Пароль"/>
                <button onClick={btnHandler} className="reg-container--card-btn">Продолжить</button>
                <span className="reg-container--card-to--reg">Есть аккаунт?<span onClick={handlAuth} className="reg-container--card-to--reg-src">Авторнизация</span></span>
            </div>
        </div>
    )
}

export default Reg;