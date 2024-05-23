import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    useEffect(() => {
        if (localStorage.getItem('name') !== null) {document.querySelector('.name').classList.remove('hidden')}
        if (localStorage.getItem('name') !== null) {document.querySelectorAll('.nav__element a').forEach(link => link.classList.remove('disabled-link'))}
        console.log(document.querySelectorAll('.nav__element a'))
        }, [])

    return (
        <header className='header'>
            <div className="header__container container">
                <a href="/" className="name hidden">{localStorage.getItem('name')}</a>
                <nav>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to='/schedule' className='disabled-link'>Plan zajęć</Link></li>
                        <li className="nav__element"><Link to='/students' className='disabled-link'>Lista uczniów</Link></li>
                        <li className="nav__element"><Link to='/materials' className='disabled-link'>Materiały edukacyjne</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;