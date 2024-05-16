import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <div className="header__container container">
                <a href="/" className="name">{localStorage.getItem('name')}</a>
                <nav>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to='/schedule'>Plan zajęć</Link></li>
                        <li className="nav__element"><Link to='/students'>Lista uczniów</Link></li>
                        <li className="nav__element"><Link to='/materials'>Materiały edukacyjne</Link></li>
                        <li className="nav__element"><Link to='/curriculum'>Podstawa programowa</Link></li>
                        <li className="nav__element"><Link to='/notes'>Notatki</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;