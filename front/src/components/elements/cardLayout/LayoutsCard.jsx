import "./LayoutsCard.css";
import CONSTS from "../../../CONSTS"
import { useState } from "react";
function LayoutsCard({
    id,
    userId,
    url,
    name,
    discription,
    hard,
    pages,
    lang
}){
    const [imgSrc, setImgSrc] = useState("./imgs/fav-dell.png");
    const [isAdding, setIsAdding] = useState(0);
    const handlAddFavorite = () => {
        if(isAdding == 0){
            fetch(CONSTS.URL + "/favorite/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    layoutId: id
                })
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                console.log(data)
                if(data == 1){
                    setImgSrc("./imgs/fav-add.png")
                    setIsAdding(1);
                }
            })
        }
        
    }
    return(
        <div className="layoutCard-container">
            <img onClick={handlAddFavorite} src={imgSrc} className="layoutCard-container-addFavorite"/>
            <div className="layoutCard-container-params">
                <span className="layoutCard-container-param">{hard}</span>
                <span className="layoutCard-container-param">{pages}</span>
                <span className="layoutCard-container-param">{lang}</span>
            </div>
            <div className="layoutCard-container-content">
                <h1 className="layoutCard-container-content-name">{name}</h1>
                <p className="layoutCard-container-content-disc">{discription}</p>
                <p className="layoutCard-container-content-autor">userId</p>
            </div>
            <a className="layoutCard-container-url" href={url}>Ссылка на макет</a>
        </div>
    )
}

export default LayoutsCard