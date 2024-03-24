import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Reg from "./reg/Reg";
import Reset from "./reset/Reset";
import Main from "./main/Main";

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Auth/>} path="/auth"/>
        <Route element={<Reg/>} path="/regist"/>
        <Route element={<Reset/>} path="/reset"/>
        <Route element={<Main/>} path="/"/>
    </Routes>
    </BrowserRouter>
}

export default Router;