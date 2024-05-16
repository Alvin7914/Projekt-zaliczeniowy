import React from "react";

const LoginWindow = () => {

    const submitForm = (e) => {
        e.preventDefault();
        const loginInput = document.querySelector('.login__input');

        if (loginInput.value.length < 4) {
            alert('Imię musi się składać z co najmniej 4 znaków.')
        } else {
            localStorage.setItem('name', loginInput.value)
            location.reload();
        }

    }

    return (
        <div className='login__box'>
            <p className='login__info'><strong>Witaj!</strong><br/> Aby kontynuować, wpisz swoje imię poniżej.</p>
            <form className='login__form' onSubmit={submitForm}>
                <input type="text" className='login__input' placeholder='Wpisz imię'/>
                <button type='submit' className='login__submit-btn'>Zapisz</button>
            </form>
        </div>
    );
};
export default LoginWindow;