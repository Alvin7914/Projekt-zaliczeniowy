import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LoginWindow from "../components/LoginWindow.jsx";
import MainPage from "../components/MainPage.jsx";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <main className='background'>
                {localStorage.getItem('name') === null ? <LoginWindow /> : <Outlet />}
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;