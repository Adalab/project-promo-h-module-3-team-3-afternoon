import React from 'react';
import Logo from '../images/awesome-cards.svg';

class Landing extends React.Component {
    render() {
      return (
        <main class="page__main">
            <div class="head__awesome-logo">
                <a href="https://github.com/Adalab/project-promo-h-module-2-team-4-afternoon">
                    <img class="head__awesome-img" src={Logo} alt="Logo Awesome Cards"></img>
                </a>
            </div>
            <div class="main__title">
                <h1 class="title__text">crea tu tarjeta de visita</h1>
                <p class="title_paragraph">crea mejores contactos profesionales de forma fácil y cómoda</p>
            </div>

            <ul class="main__icons">
                <li class="main__icons-item">
                <i class="main__img far fa-object-ungroup"></i>
                <p class="main_text-item">diseña</p>
                </li>
                <li class="main__icons-item">
                <i class="main__img far fa-keyboard"></i>
                <p class="main_text-item">rellena</p>
                </li>
                <li class="main__icons-item">
                <i class="main__img fas fa-share-alt"></i>
                <p class="main_text-item">comparte</p>
                </li>
            </ul>

            <a class="main__link" href="./cardpage.html">comenzar</a>
        </main>
      );
    }
}

export default Landing;