import React from 'react';
import LogoAdalab from '../images/logo-adalab.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copy">Awesome profile-cards @2019</p>
            <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer" className="footer__link">
                <img src={LogoAdalab} alt="Adalab Logo" className="footer__logo" />
            </a>
        </footer>
    );
}

export default Footer;