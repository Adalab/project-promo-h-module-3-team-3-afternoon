import React from 'react';
import Logo from '../images/awesome-cards.svg';

const Header = () => {
    return (
    <header class="header">
        <div className="header__wrapper">
            <a href="./index.html">
                <img src={Logo} alt="Inicio" className="header__image" />
            </a>
        </div>
    </header>)
};

export default Header;