import { useEffect, useState } from "react";
import LayoutsCard from "../elements/cardLayout/LayoutsCard";
import Navbar from "../elements/navbar/Navbar";
import CONSTS from "../../CONSTS";
import "./Main.css";
function Main(){
    const [layouts, setLayouts] = useState([])
    const [isLoading, setIsLoading] = useState(false); 
    const [hard, setHard] = useState("un");
    const [pages, setPages] = useState("un");
    const [lang, setLang] = useState("un");
    useEffect(() => {
        fetch(CONSTS.URL + "/filter/all", {
            method: "get"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setLayouts(data);
            setIsLoading(true);
        })
    }, [])

    const handlHard = (val) => {
        console.log(val)
        setHard(val);
    }

    const handlPages = (val) => {
        console.log(val)
        setPages(val);
    }

    const handlLang = (val) => {
        console.log(val)
        setLang(val);
    }

    const handlFilter = () => {
        fetch(CONSTS.URL + `/filter/${hard}/${pages}/${lang}`, {
            method: "GET"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setIsLoading(false);
            setLayouts(data);
            setIsLoading(true);
        })
    }
    return(
        <div className="main-container">
            <Navbar/>
            <div className="main-container-filters">
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Сложность</span>
                    <select onChange={(e) => handlHard(e.target.value)} className="main-container-filter">
                        <option value="un" className="main-container-filter-option">Не выбранно</option>
                        <option value="Легкий" className="main-container-filter-option">Легкий</option>
                        <option value="Сложный" className="main-container-filter-option">Сложный</option>
                    </select>
                </div>
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Язык</span>
                    <select onChange={(e) => handlLang(e.target.value)} className="main-container-filter">
                        <option value="un" className="main-container-filter-option">Не выбранно</option>
                        <option value="ru" className="main-container-filter-option">ru</option>
                        <option value="en" className="main-container-filter-option">en</option>
                    </select>
                </div>
                <div className="main-container-filter-cont">
                    <span className="main-container-filter-disc">Страницы</span>
                    <select onChange={(e) => handlPages(e.target.value)} className="main-container-filter">
                        <option value="un" className="main-container-filter-option">Не выбранно</option>
                        <option value="Одностраничный" className="main-container-filter-option">Одностраничный</option>
                        <option value="Многостраничный" className="main-container-filter-option">Многостраничный</option>
                    </select>
                </div>
                <button onClick={handlFilter} className="main-container-filter-button">Подобрать</button>
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