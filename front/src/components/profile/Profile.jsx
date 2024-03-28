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
                                <button className="profile-container-right-content-lqyouts-top-btn"><img src="./imgs/add-layout.png" className="profile-container-right-content-lqyouts-top-btn-img"/>Добавить</button>
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
        </div>
    )
}

export default Profile;