import React from 'react';
import Logo from '../images/awesome-cards.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <React.Fragment>
            <main className="page__main">
                <div className="head__awesome-logo">
                    <a href="https://github.com/Adalab/project-promo-h-module-2-team-4-afternoon">
                        <img className="head__awesome-img" src={Logo} alt="Logo Awesome Cards"></img>
                    </a>
                </div>
                <div className="main__title">
                    <h1 className="title__text">crea tu tarjeta de visita</h1>
                    <p className="title_paragraph">crea mejores contactos profesionales de forma fácil y cómoda</p>
                </div>

                <ul className="main__icons">
                    <li className="main__icons-item">
                        <i className="main__img far fa-object-ungroup"></i>
                        <p className="main_text-item">diseña</p>
                    </li>
                    <li className="main__icons-item">
                        <i className="main__img far fa-keyboard"></i>
                        <p className="main_text-item">rellena</p>
                    </li>
                    <li className="main__icons-item">
                        <i className="main__img fas fa-share-alt"></i>
                        <p className="main_text-item">comparte</p>
                    </li>
                </ul>
                <Link className="main__link" to="/Editor">comenzar</Link>
            </main>
        </React.Fragment>
    );
}

export default Landing;