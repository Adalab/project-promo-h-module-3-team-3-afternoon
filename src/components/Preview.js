import React from 'react';
import { Link } from 'react-router-dom';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { props } = this;

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

        const {avatar} = this.props;
        return(
            <section className="page__cardpreview">
                <div className="card__preview">
                    <div className={`card__box ${selectTheme()}`}>
                        <button className="card__reset" onClick={this.props.resetForm}><i className="far fa-trash-alt"></i>Reset</button>
                        <div className="card__box--header">
                            <div className="card__box--text">
                                <h3 className="card__name">{this.props.userName === '' ? 'Nombre Apellido' : this.props.userName}</h3>
                                <p className="card__job-title">{this.props.position === '' ? 'Front-end developer' : this.props.position}</p>
                            </div>
                        </div>
                        <div className="card__photo" style={{backgroundImage: `url(${avatar})`}}></div>

                        <ul className="card__list">
                            <li className={`card__list--email item ${props.email === '' ? ' hidden' : ''}`}>
                                <a href={`mailto:${props.email}`} className="card__list--icon-mail">
                                    <i className="far fa-envelope image"></i>
                                </a>
                            </li>
                            <li className={`card__list--phone item ${props.phone === '' ? ' hidden' : ''}`}>
                                <a href={`tel:${props.phone}`} className="card__list--icon-phone">
                                    <i className="fas fa-mobile-alt image"></i>
                                </a>
                            </li>
                            <li className={`card__list--linkedin item ${props.linkedin === '' ? ' hidden' : ''}`}>
                                <a href={`http://www.linkedin.com/in/${props.linkedin}`} target="__blank" className="card__list--icon-linkedin">
                                    <i className="fab fa-linkedin-in image"></i>
                                </a>
                            </li>
                            <li className={`card__list--github item ${props.github === '' ? ' hidden' : ''}`}>
                                <a href={`https://www.github.com/${props.github}`} target="__blank" className="card__list--icon-github">
                                    <i className="fab fa-github-alt image"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

Preview.defaultProps = {
    userName: 'Nombre Apellido',
    position: 'Front-End Developer',
    paletteValue: '1'
}

export default Preview;