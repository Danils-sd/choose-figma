import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Reg from "./reg/Reg";
import Reset from "./reset/Reset";
import Main from "./main/Main";
import Favorite from "./favorite/Favorite";

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Auth/>} path="/auth"/>
        <Route element={<Reg/>} path="/regist"/>
        <Route element={<Reset/>} path="/reset"/>
        <Route element={<Main/>} path="/"/>
        <Route element={<Favorite/>} path="/favorite"/>
    </Routes>
    </BrowserRouter>
}

export default Router;