import React from 'react';
import Logo from '../images/awesome-cards.svg';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="header">
                <Link to="/"><img src={Logo} alt="logo" className="header__image" /></Link>
            </div>
        </header>
    );
};

export default Header;