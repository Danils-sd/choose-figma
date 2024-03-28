import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();

    const handlMain = () => {
        navigate("/");
    }

    const handlFav = () => {
        if(localStorage.getItem("token") == null){ 
            navigate("/auth");
        } else {
            navigate("/favorite")
        }
    }
    
    const handlProfile = () => {
        if(localStorage.getItem("token") == null){ 
            navigate("/auth");
        } else {
            navigate("/")
        }
    }
    return(
        <div className="nav-container">
            <h1 onClick={handlMain} className="nav-container--logo">Choose<span className="nav-container--logo-sec">Figma</span></h1>
            <div className="nav-container--routes">
                <span onClick={handlMain} className="nav-container--routes-route">Главная</span>
                <span onClick={handlFav} className="nav-container--routes-route">Избранное</span>
            </div>
            <span onClick={handlProfile} className="nav-container-lk"><img alt="👤" src="./imgs/profile.png"/></span>
        </div>
    )
}

export default Navbar;