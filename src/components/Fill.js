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
    }

    handleLinksChange(event){
        const target = event.target;
        this.props.handleLinksChange(target);
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
                    <input className="input able name" type="text" id="name" placeholder="Ej: Sally Jill" name="userName" onChange={this.handleNameChange}/>

                    <label className="label position" htmlFor="position">Puesto <span className="asterisk">*</span></label>
                    <input className="input able position" type="text" id="position" placeholder="Ej: Front-end" name="position" onChange={this.handleNameChange}/>

                    <div className="button-image">
                        <label className="label img" htmlFor="image">Imagen de perfil <span className="asterisk">*</span></label>
                        <GetAvatar
                            avatar={this.props.avatar} 
                            isAvatarDefault={this.props.isAvatarDefault} 
                            updateAvatar={this.props.updateAvatar}
                        />
                        {/* <button className="btn js__profile-trigger" type="button" id="upload-image">Añadir imagen</button>
                        <input type="file" name="photo" id="img-selector"
                            className="btn action__hiddenField js__profile-upload-btn" />
                        <div className="square js__profile-preview"></div> */}
                    </div>

                    <label className="label email" htmlFor="email">Email <span className="asterisk">*</span></label>
                    <input className="input able email" type="email" id="email" placeholder="Ej:sally-hill@gmail.com" name="email" onChange={this.handleLinksChange}/>

                    <label className="label phone" htmlFor="phone">Teléfono</label>
                    <input className="input able phone" type="tel" id="phone" placeholder="Ej:555-55-55-55" name="phone" onChange={this.handleLinksChange}/>


                    <label className="label linkedin" htmlFor="linkedin">Linkedin <span className="asterisk">*</span></label>
                    <input className="input able linkedin" type="url" id="linkedin" placeholder="Ej: sally.hill" name="linkedin"
                        required onChange={this.handleLinksChange}/>

                    <label className="label github" htmlFor="git">Github <span className="asterisk">*</span></label>
                    <input className="input able github" type="text" id="git" placeholder="Ej:sally-hill" name="github" onChange={this.handleLinksChange}/>
                </div>
            </Collapsibles>
        );
    }
}

export default Fill;