import { useEffect, useState } from "react";
import Navbar from "../elements/navbar/Navbar";
import CONSTS from "../../CONSTS";
import "./Favorite.css";
import LayoutsCard from "../elements/cardLayout/LayoutsCard";

function Favorite(){
    const [layouts, setLayouts] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(CONSTS.URL + `/favorite/getAll/${localStorage.getItem("token")}`, {
            method: "get"
        }).then(res => {
            return res.json();
        }).then(({data}) => {
            setLayouts(data);
            setIsLoading(true);
        })
    }, [])
    return(
        <div className="favorite-container">
            <Navbar/>
            {layouts.length == 0 && (
                <h1 className="favorite-container-nothing">Пока нет любимых макетов</h1>
            )}
            <div className="favorite-container-content">
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

export default Favorite;