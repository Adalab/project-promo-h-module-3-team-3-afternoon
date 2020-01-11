import React from 'react';
import Collapsibles from './Collapsibles';
import GetAvatar from './GetAvatar';
import PropTypes from 'prop-types';

const Fill = props => {

    const handleNameChange = event => {
        const target = event.target;
        props.handleNameChange(target);
    }

    const handleLinksChange = event => {
        const target = event.target;
        props.handleLinksChange(target);
    }
    return(
        <Collapsibles
            collapseSection={props.collapseSection}
            open={props.open}
            category="fill"
            sectionTitle="rellena"
            icon="far fa-keyboard"
        >
            <div className="fill--inputs">
                <label className="label name" htmlFor="name">Nombre completo <span className="asterisk">*</span></label>
                <input className="input able name" type="text" id="name" placeholder="Ej: Sally Jill" name="userName" value={props.userName} onChange={handleNameChange}/>
                <p className={`error-message ${props.validUserName === false ? '' : ' hidden'}`}>Este campo no puede estar vacío.</p>

                <label className="label position" htmlFor="position">Puesto <span className="asterisk">*</span></label>
                <input className="input able position" type="text" id="position" placeholder="Ej: Front-end" name="position" value={props.position} onChange={handleNameChange}/>
                <p className={`error-message ${props.validPosition === false ? '' : ' hidden'}`}>Este campo no puede estar vacío.</p>

                <div className="button-image">
                    <label className="label img" htmlFor="image">Imagen de perfil <span className="asterisk">*</span></label>
                    <GetAvatar
                        avatar={props.avatar} 
                        isAvatarDefault={props.isAvatarDefault} 
                        updateAvatar={props.updateAvatar}
                    />
                    <p className={`error-message error-image ${props.validAvatar === false ? '' : ' hidden'}`}>Por favor, sube una imagen.</p>
                </div>

                <label className="label email" htmlFor="email">Email <span className="asterisk">*</span></label>
                <input className="input able email" type="email" id="email" placeholder="Ej:sally-hill@gmail.com" name="email" value={props.email} onChange={handleLinksChange}/>
                <p className={`error-message ${props.validEmail === false ? '' : ' hidden'}`}>Por favor, escribe un e-mail válido.</p>

                <label className="label phone" htmlFor="phone">Teléfono</label>
                <input className="input able phone" type="tel" id="phone" placeholder="Ej:555-55-55-55" name="phone" value={props.phone} onChange={handleLinksChange}/>


                <label className="label linkedin" htmlFor="linkedin">Linkedin <span className="asterisk">*</span></label>
                <input className="input able linkedin" type="url" id="linkedin" placeholder="Ej: sally.hill" name="linkedin" value={props.linkedin} required onChange={handleLinksChange}/>
                <p className={`error-message ${props.validLinkedin === false ? '' : ' hidden'}`}>Escribe tu usuario de linkedin sin @.</p>

                <label className="label github" htmlFor="git">Github <span className="asterisk">*</span></label>
                <input className="input able github" type="text" id="git" placeholder="Ej:sally-hill" name="github" value={props.github} onChange={handleLinksChange}/>
                <p className={`error-message ${props.validGithub === false ? '' : ' hidden'}`}>Escribe tu usuario de github sin @.</p>
            </div>
        </Collapsibles>
    );
}

Fill.propTypes = {
    userName: PropTypes.string,
    position: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
}

export default Fill;