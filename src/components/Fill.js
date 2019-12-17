import React from 'react';

const Fill = () => {
    return(
    <fieldset id="form__fill" className="form__fill collapsible">
        <div className="fill--title collapsible-header">
            <div className="contain-title">
                <i className="far fa-keyboard"></i>
                <h3 className="title__h3">rellena</h3>
            </div>
            <i className="fas fa-chevron-down click-arrow" id="arrow-fill"></i>
        </div>
        <div className="collapsible-container" id="second-form">
            <div className="fill--inputs">
                <label className="label name" htmlFor="name">Nombre completo <span className="asterisk">*</span></label>
                <input className="input able name" type="text" id="name" placeholder="Ej: Sally Jill" name="name"/>

                <label className="label position" htmlFor="position">Puesto <span className="asterisk">*</span></label>
                <input className="input able position" type="text" id="position" placeholder="Ej: Front-end" name="job"/>

                <div className="button-image">
                    <label className="label img" htmlFor="image">Imagen de perfil <span className="asterisk">*</span></label>
                    <button className="btn js__profile-trigger" type="button" id="upload-image">Añadir imagen</button>
                    <input type="file" name="photo" id="img-selector"
                        className="btn action__hiddenField js__profile-upload-btn" />
                    <div className="square js__profile-preview"></div>
                </div>

                <label className="label email" htmlFor="email">Email <span className="asterisk">*</span></label>
                <input className="input able email" type="email" id="email" placeholder="Ej:sally-hill@gmail.com" name="email"/>

                <label className="label phone" htmlFor="phone">Teléfono</label>
                <input className="input able phone" type="number" pattern="" id="phone" placeholder="Ej:555-55-55-55"/>


                <label className="label linkedin" htmlFor="linkedin">Linkedin <span className="asterisk">*</span></label>
                <input className="input able linkedin" type="url" id="linkedin" placeholder="Ej: sally.hill" name="linkedin"
                    required/>

                <label className="label github" htmlFor="git">Github <span className="asterisk">*</span></label>
                <input className="input able github" type="text" id="git" placeholder="Ej:sally-hill" name="github"/>
            </div>
        </div>
    </fieldset>
    );
}

export default Fill;