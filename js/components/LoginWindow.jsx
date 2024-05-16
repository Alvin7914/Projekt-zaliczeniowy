import React from "react";

const LoginWindow = () => {


    return (
        <div className='login__box'>
            <p className='login__info'><strong>Witaj!</strong><br/> Aby kontynuować, wpisz swoje imię poniżej.</p>
            <form className='login__form'>
                <input type="text" className='login__input' placeholder='Wpisz imię'/>
                <button type='submit' className='login__submit-btn'>Zapisz</button>
            </form>
        </div>
    );
};
export default LoginWindow;