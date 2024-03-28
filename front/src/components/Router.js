import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Reg from "./reg/Reg";
import Reset from "./reset/Reset";
import Main from "./main/Main";
import Favorite from "./favorite/Favorite";
import Profile from "./profile/Profile";

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Auth/>} path="/auth"/>
        <Route element={<Reg/>} path="/regist"/>
        <Route element={<Reset/>} path="/reset"/>
        <Route element={<Main/>} path="/"/>
        <Route element={<Favorite/>} path="/favorite"/>
        <Route element={<Profile/>} path="/profile"/>
    </Routes>
    </BrowserRouter>
}

export default Router;