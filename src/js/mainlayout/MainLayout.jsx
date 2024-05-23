import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LoginWindow from "../components/LoginWindow.jsx";


const MainLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('name') !== null)
    const [name, setName] = useState(localStorage.getItem('name'));

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('name') !== null)
    }, []);

    const handleLoginSuccess = (name) => {
        localStorage.setItem('name', name)
        setName(name);
        setIsLoggedIn(true)
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn} name={name} />
            <main className='background'>
                {!isLoggedIn ? <LoginWindow onLoginSuccess={handleLoginSuccess} /> : <Outlet />}
            {/*  wyswietlenie okna logowania przy pierwszej wizycie na stronie, a później odpowiedniego komponentu  */}
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;