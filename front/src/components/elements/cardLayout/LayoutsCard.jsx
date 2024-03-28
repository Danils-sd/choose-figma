import "./LayoutsCard.css";
import CONSTS from "../../../CONSTS"
import { useEffect, useState } from "react";
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
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetch(CONSTS.URL + "/favorite/chek", {
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
            if(data == 1){
                setIsAdding(true);
                setImgSrc("./imgs/fav-add.png");
            }
        })
    }, [])

    const handlAddFavorite = () => {
        if(!isAdding){
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
                    setIsAdding(true);
                }
            })
        } else {
            fetch(CONSTS.URL + "/favorite/delete", {
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
                    setImgSrc("./imgs/fav-dell.png")
                    setIsAdding(false);
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