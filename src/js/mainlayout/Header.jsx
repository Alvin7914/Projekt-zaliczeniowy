import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = ({ isLoggedIn, name}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            document.querySelector('.name').classList.remove('hidden');
            document.querySelectorAll('.nav__element a').forEach(link => link.classList.remove('disabled-link'))
        }
    }, [isLoggedIn])

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className='header'>
            <div className="header__container container">
                <a href="/" className="name hidden">{name}</a>
                <button className="hamburger" onClick={toggleNav}>
                    &#9776;
                </button>
                <nav className={isNavOpen ? 'open' : ''}>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to='/schedule' className='disabled-link'>Plan zajęć</Link>
                        </li>
                        <li className="nav__element"><Link to='/students' className='disabled-link'>Lista uczniów</Link>
                        </li>
                        <li className="nav__element"><Link to='/materials' className='disabled-link'>Materiały
                            edukacyjne</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;