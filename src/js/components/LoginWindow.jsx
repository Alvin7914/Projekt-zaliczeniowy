import React, {useState} from "react";

const LoginWindow = ({ onLoginSuccess }) => {
    const [name, setName] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        if (name.length < 4) {
            alert('Imię musi się składać z co najmniej 4 znaków.')
        } else {
            onLoginSuccess(name);
        }
    }

    return (
        <div className='login__box'>
            <h1 className='login__info'><strong>Witaj!</strong><br/> Aby kontynuować, wpisz swoje imię poniżej.</h1>
            <form className='login__form' onSubmit={submitForm}>
                <input type="text"
                       className='login__input'
                       placeholder='Wpisz imię'
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <button type='submit' className='login__submit-btn'>Zapisz</button>
            </form>
        </div>
    );
};
export default LoginWindow;