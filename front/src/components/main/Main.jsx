
import Navbar from "../elements/navbar/Navbar";
import "./Main.css";
function Main(){
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
        </div>
    )
}

export default Main;