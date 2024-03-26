import { useEffect, useState } from "react";
import LayoutsCard from "../elements/cardLayout/LayoutsCard";
import Navbar from "../elements/navbar/Navbar";
import CONSTS from "../../CONSTS";
import "./Main.css";
function Main(){
    const [layouts, setLayouts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch(CONSTS.URL + "/filter/all", {
            method: "get"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setLayouts(data);
            setIsLoading(true);
            console.log(data);
        })
    }, [])
    return(
        <div className="main-container">
            <Navbar/>
            <div className="main-container-filters">
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Сложность</span>
                    <select className="main-container-filter">
                        <option className="main-container-filter-option">Не выбранно</option>
                        <option className="main-container-filter-option">Легкий</option>
                        <option className="main-container-filter-option">Сложный</option>
                    </select>
                </div>
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Язык</span>
                    <select className="main-container-filter">
                        <option className="main-container-filter-option">Не выбранно</option>
                        <option className="main-container-filter-option">ru</option>
                        <option className="main-container-filter-option">en</option>
                    </select>
                </div>
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Страницы</span>
                    <select className="main-container-filter">
                        <option className="main-container-filter-option">Не выбранно</option>
                        <option className="main-container-filter-option">Одностраничный</option>
                        <option className="main-container-filter-option">Многостраничный</option>
                    </select>
                </div>
            </div>
            <div className="main-container--layouts">
                {isLoading && (
                    layouts.map(e => {
                        return(
                            <LayoutsCard id={e.id} userId={e.userId} url={e.url} name={e.name} discription={e.discription} hard={e.hard} pages={e.pages} lang={e.lang}/>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Main;