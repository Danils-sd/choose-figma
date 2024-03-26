import "./LayoutsCard.css";

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
    return(
        <div className="layoutCard-container">
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