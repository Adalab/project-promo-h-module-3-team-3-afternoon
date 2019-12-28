import React from 'react';
import Collapsibles from './Collapsibles';
import GetAvatar from './GetAvatar';

class Fill extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
    }

    handleNameChange(event){
        const target = event.target;
        this.props.handleNameChange(target);
        this.props.setData();
    }

    handleLinksChange(event){
        const target = event.target;
        this.props.handleLinksChange(target);
        this.props.setData();
    }

    render() {
        return(
            <Collapsibles
                collapseSection={this.props.collapseSection}
                open={this.props.open}
                category="fill"
                sectionTitle="rellena"
                icon="far fa-keyboard"
            >
                <div className="fill--inputs">
                    <label className="label name" htmlFor="name">Nombre completo <span className="asterisk">*</span></label>
                    <input className="input able name" type="text" id="name" placeholder="Ej: Sally Jill" name="userName" value={this.props.userName} onChange={this.handleNameChange}/>
                    <p className={`error-message ${this.props.validUserName === false ? '' : ' hidden'}`}>Este campo no puede estar vacío.</p>

                    <label className="label position" htmlFor="position">Puesto <span className="asterisk">*</span></label>
                    <input className="input able position" type="text" id="position" placeholder="Ej: Front-end" name="position" value={this.props.position} onChange={this.handleNameChange}/>
                    <p className={`error-message ${this.props.validPosition === false ? '' : ' hidden'}`}>Este campo no puede estar vacío.</p>

                    <div className="button-image">
                        <label className="label img" htmlFor="image">Imagen de perfil <span className="asterisk">*</span></label>
                        <GetAvatar
                            avatar={this.props.avatar} 
                            isAvatarDefault={this.props.isAvatarDefault} 
                            updateAvatar={this.props.updateAvatar}
                        />
                        <p className={`error-message error-image ${this.props.validAvatar === false ? '' : ' hidden'}`}>Por favor, sube una imagen.</p>
                    </div>

                    <label className="label email" htmlFor="email">Email <span className="asterisk">*</span></label>
                    <input className="input able email" type="email" id="email" placeholder="Ej:sally-hill@gmail.com" name="email" value={this.props.email} onChange={this.handleLinksChange}/>
                    <p className={`error-message ${this.props.validEmail === false ? '' : ' hidden'}`}>Por favor, escribe un e-mail válido.</p>

                    <label className="label phone" htmlFor="phone">Teléfono</label>
                    <input className="input able phone" type="tel" id="phone" placeholder="Ej:555-55-55-55" name="phone" value={this.props.phone} onChange={this.handleLinksChange}/>


                    <label className="label linkedin" htmlFor="linkedin">Linkedin <span className="asterisk">*</span></label>
                    <input className="input able linkedin" type="url" id="linkedin" placeholder="Ej: sally.hill" name="linkedin" value={this.props.linkedin} required onChange={this.handleLinksChange}/>
                    <p className={`error-message ${this.props.validLinkedin === false ? '' : ' hidden'}`}>Escribe tu usuario de linkedin sin @.</p>

                    <label className="label github" htmlFor="git">Github <span className="asterisk">*</span></label>
                    <input className="input able github" type="text" id="git" placeholder="Ej:sally-hill" name="github" value={this.props.github} onChange={this.handleLinksChange}/>
                    <p className={`error-message ${this.props.validGithub === false ? '' : ' hidden'}`}>Escribe tu usuario de github sin @.</p>
                </div>
            </Collapsibles>
        );
    }
}

export default Fill;