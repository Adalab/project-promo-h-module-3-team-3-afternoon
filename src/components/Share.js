import React from 'react';
import Collapsibles from './Collapsibles';
import Loader from '../images/loader-card.svg';
class Share extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCardData = this.fetchCardData.bind(this);
    }
    fetchCardData(event){
        if(this.props.isFormValid === true){
            this.props.fetchCardData()
        } else {
            event.preventDefault();
        }
    }
    render() {
        return (
            <Collapsibles
                collapseSection={this.props.collapseSection}
                open={this.props.open}
                category="share"
                sectionTitle="comparte"
                icon="fas fa-share-alt"
                lowerSection="share__create"
                validateForm={this.props.validateForm}
            >
                <button onClick={this.fetchCardData} className={`share__create--btn ${this.props.isFormValid === true ? '' : ' btn-disabled'}`} type="button" id="share_btn">
                    <i className="far fa-address-card"></i>
                    <p className="share__create--title btn">crear tarjeta</p>
                </button>
                <p className={`error-message ${this.props.isFormValid === true ? ' hidden' : ''}`}>Por favor, revisa que has rellenado el formulario correctamente.</p>
                <div className={`card-loader ${this.props.isLoading === true ? '' : ' hidden'}`}><img className="card-loader__image" src={Loader}></img></div>
                <div className={`form__create-link ${this.props.cardSuccess === true ? '' : ' hidden'}`} id="share-div">
                    <div className="share__create-card">
                        <p>La tarjeta ha sido creada:</p>
                        <a href={this.props.cardURL} target="_blank"><p className="share__create-card--text">{this.props.cardURL}</p></a>
                    </div>
                    <a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${this.props.cardURL}`} target="_blank" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
                </div>
            </Collapsibles>
        )
    }
}
export default Share;