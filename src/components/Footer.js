import React from 'react';
import LogoAdalab from '../images/logo-adalab.png';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copy">Awesome profile-cards @2019</p>
            <a href="https://adalab.es/" target="_blank" class="footer__link">
                <img src={LogoAdalab} alt="Adalab Logo" class="footer__logo" /></a>
        </footer>
    );
}

export default Footer;