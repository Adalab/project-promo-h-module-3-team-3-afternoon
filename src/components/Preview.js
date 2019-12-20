import React from 'react';

const Preview = props =>{

    let paletteValue = props.paletteValue;
    const selectTheme = props => {
        if(paletteValue === '1'){
            return ' theme-colors1'
        }
        if(paletteValue === '2'){
            return ' theme-colors2'
        }
        if(paletteValue === '3'){
            return ' theme-colors3'
        }
    } 

    return(
        <section className="page__cardpreview">
            <div className="card__preview">
                <div className={`card__box ${selectTheme()}`}>
                    <button className="card__reset"><i className="far fa-trash-alt"></i>Reset</button>
                    <div className="card__box--header">
                        <div className="card__box--text">
                            <h3 className="card__name">{props.userName === '' ? 'Nombre Apellido' : props.userName}</h3>
                            <p className="card__job-title">{props.position === '' ? 'Front-end developer' : props.position}</p>
                        </div>
                    </div>
                    <div className="card__photo js__profile-image"></div>
                    <ul className="card__list">
                        <li className="card__list--email item hidden">
                            <a className="card__list--icon-mail">
                                <i className="far fa-envelope image"></i>
                            </a>
                        </li>
                        <li className="card__list--phone item hidden">
                            <a href="" className="card__list--icon-phone">
                                <i className="fas fa-mobile-alt image"></i>
                            </a>
                        </li>
                        <li className="card__list--linkedin item hidden">
                            <a href="" target="__blank" className="card__list--icon-linkedin">
                                <i className="fab fa-linkedin-in image"></i>
                            </a>
                        </li>
                        <li className="card__list--github item hidden">
                            <a href="" target="__blank" className="card__list--icon-github">
                                <i className="fab fa-github-alt image"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Preview