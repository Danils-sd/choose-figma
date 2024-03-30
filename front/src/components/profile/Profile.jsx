import { useEffect, useState } from "react";
import Navbar from "../elements/navbar/Navbar";
import CONSTS from "../../CONSTS";
import "./Profile.css";
import LayoutsCard from "../elements/cardLayout/LayoutsCard";

function Profile(){
    const [user, setUser] = useState({
        login: "-",
        email: "-"
    })
    const [choose, setChoose] = useState(true);
    const [layouts, setLayouts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [adding, setAdding] = useState(false);

    const [name, setName] = useState("");
    const [discription, setDiscription] = useState("");
    const [url, setUrl] = useState("");
    const [hard, setHard] = useState("un");
    const [pages, setPages] = useState("un");
    const [lang, setLang] = useState("un");

    const handlName = (e) => {
        setName(e.target.value);
    }

    const handlDisc = (e) => {
        setDiscription(e.target.value);
    }

    const handlUrl = (e) => {
        setUrl(e.target.value);
    }

    const handlHard = (val) => {
        setHard(val);
    }

    const handlPages = (val) => {
        setPages(val);
    }

    const handlLang = (val) => {
        setLang(val);
    }

    function getLayouts(userId){
        fetch(CONSTS.URL + `/user/getLayouts/${userId}`, {
            method: "GET"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setLayouts(data);
            setIsLoading(true);
        })
    }
    useEffect(() => {
        fetch(CONSTS.URL + `/user/get/${localStorage.getItem("token")}`, {
            method: "GET"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setUser({
                login: data.login,
                email: data.email
            })
        })

        getLayouts(localStorage.getItem("token"));

    }, [])
    
    const handlMy = () => {
        setIsLoading(false);
        setChoose(true);
        getLayouts(localStorage.getItem("token"));
    }

    const handlAdding = () => {
        setAdding(true);
    }

    const handlClose = () => {
        setAdding(false);
    }

    const handlFavorite = () => {
        setIsLoading(false);
        setChoose(false);
        fetch(CONSTS.URL + `/favorite/getAll/${localStorage.getItem("token")}`, {
            method: "get"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setLayouts(data);
            setIsLoading(true);
        })
    }

    const handlAdd = () => {
        fetch(CONSTS.URL + "/user/createLayout", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: localStorage.getItem("token"),
                url: url,
                pages: pages,
                name: name,
                lang: lang,
                hard: hard,
                discription: discription
            })
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            console.log(data)
            setAdding(false)
        })
    }
    
    return(
        <div className="profile-container">
            <Navbar/>
            <dic className="profile-container-content">
                <div className="profile-container-left-content">
                    <h1 className="profile-container-left-content-login">{user.login}</h1>
                    <p className="profile-container-left-content-email">{user.email}</p>
                    <span onClick={handlMy} className="profile-container-left-content-layoutes">Мои Макеты</span>
                    <span onClick={handlFavorite} className="profile-container-left-content-favorite">Мои Избранные</span>
                </div>
                <div className="profile-container-right-content">
                    {choose && (
                        <div className="profile-container-right-content-lqyouts">
                            <div className="profile-container-right-content-lqyouts-top">
                                <span className="profile-container-right-content-lqyouts-top-text">Мои макеты</span>
                                <button onClick={handlAdding} className="profile-container-right-content-lqyouts-top-btn"><img src="./imgs/add-layout.png" className="profile-container-right-content-lqyouts-top-btn-img"/>Добавить</button>
                            </div>
                            <div className="profile-container-right-content-lqyouts-bottom">
                                {isLoading && (
                                    layouts.map(e => {
                                        return(
                                            <LayoutsCard id={e.id} userId={e.userId} url={e.url} name={e.name} discription={e.discription} hard={e.hard} pages={e.pages} lang={e.lang}/>
                                        )
                                    })
                                )}
                            </div>
                        </div>
                    )}
                    {!choose && (
                        <div className="profile-container-right-content-lqyouts">
                        <div className="profile-container-right-content-lqyouts-top">
                            <span className="profile-container-right-content-lqyouts-top-text">Мои избранные</span>
                        </div>
                        <div className="profile-container-right-content-lqyouts-bottom">
                            {isLoading && (
                                layouts.map(e => {
                                    return(
                                        <LayoutsCard id={e.id} userId={e.userId} url={e.url} name={e.name} discription={e.discription} hard={e.hard} pages={e.pages} lang={e.lang}/>
                                    )
                                })
                            )}
                        </div>
                    </div>
                    )}
                </div>
            </dic>
            {adding && (
                <div className="profile-container-modal-add">
                    <div className="profile-container-modal-add-container">
                        <div className="profile-container-modal-add-container-data">
                            <textarea value={name} onChange={(e) => handlName(e)} placeholder="Введите название макета" className="profile-container-modal-add-container-data--name"/>
                            <textarea value={discription} onChange={(e) => handlDisc(e)} placeholder="Введите описание макета" className="profile-container-modal-add-container-data--discription"/>
                        </div>
                        <textarea value={url} onChange={(e) => handlUrl(e)} placeholder="Введите ссылку на макет" className="profile-container-modal-add-container--url"/>
                        <div className="profile-container-modal-add-container-filters">
                            <div className="profile-container-modal-add-container-filter-cont">
                                <span className="profile-container-modal-add-container-filter-disc">Сложность</span>
                                <select onChange={(e) => handlHard(e.target.value)} className="profile-container-modal-add-container-filter">
                                    <option value="un" className="profile-container-modal-add-container-filter-option">Не выбранно</option>
                                    <option value="Легкий" className="profile-container-modal-add-containerr-filter-option">Легкий</option>
                                    <option value="Сложный" className="profile-container-modal-add-container-filter-option">Сложный</option>
                                </select>
                            </div>
                            <div className="profile-container-modal-add-container-filter-cont">
                                <span className="profile-container-modal-add-container-filter-disc">Язык</span>
                                <select onChange={(e) => handlLang(e.target.value)} className="profile-container-modal-add-container-filter">
                                    <option value="un" className="profile-container-modal-add-container-filter-option">Не выбранно</option>
                                    <option value="ru" className="profile-container-modal-add-container-filter-option">ru</option>
                                    <option value="en" className="profile-container-modal-add-container-filter-option">en</option>
                                </select>
                            </div>
                            <div className="profile-container-modal-add-container-filter-cont">
                                <span className="profile-container-modal-add-container-filter-disc">Страницы</span>
                                <select onChange={(e) => handlPages(e.target.value)} className="profile-container-modal-add-container-filter">
                                    <option value="un" className="profile-container-modal-add-container-filter-option">Не выбранно</option>
                                    <option value="Одностраничный" className="profile-container-modal-add-container-filter-option">Одностраничный</option>
                                    <option value="Многостраничный" className="profile-container-modal-add-container-filter-option">Многостраничный</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handlAdd} className="profile-container-modal-add-container-filter-add">Добавить</button>
                        <button onClick={handlClose} className="profile-container-modal-add-container-filter-add">Отмена</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile;