import React from 'react';
import Collapsibles from './Collapsibles';
import Loader from '../images/loader-card.svg';

const Share = props => {

    const fetchCardData = event => {
        if(props.isFormValid === true){
            props.fetchCardData()
        } else {
            event.preventDefault();
        };
    };

    return (
        <Collapsibles
            collapseSection={props.collapseSection}
            open={props.open}
            category="share"
            sectionTitle="comparte"
            icon="fas fa-share-alt"
            lowerSection="share__create"
            validateForm={props.validateForm}
        >
            <button onClick={fetchCardData} className={`share__create--btn ${props.isFormValid === true ? '' : ' btn-disabled'}`} type="button" id="share_btn">
                <i className="far fa-address-card"></i>
                <p className="share__create--title btn">crear tarjeta</p>
            </button>
            <p className={`error-message ${props.isFormValid === true ? ' hidden' : ''}`}>Por favor, revisa que has rellenado el formulario correctamente.</p>
            <div className={`card-loader ${props.isLoading === true ? '' : ' hidden'}`}><img className="card-loader__image" alt="card-lo" src={Loader}></img></div>
            <div className={`form__create-link ${props.cardSuccess === true ? '' : ' hidden'}`} id="share-div">
                <div className="share__create-card">
                    <p>La tarjeta ha sido creada:</p>
                    <a href={props.cardURL} target="_blank" rel="noopener noreferrer"><p className="share__create-card--text">{props.cardURL}</p></a>
                </div>
                <a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${props.cardURL}`} target="_blank" rel="noopener noreferrer" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
            </div>
        </Collapsibles>
    );
}

// class Share extends React.Component {
//     constructor(props) {
//         super(props);

//         fetchCardData = fetchCardData.bind(this);
//     }

//     fetchCardData(event){
//         if(props.isFormValid === true){
//             props.fetchCardData()
//         } else {
//             event.preventDefault();
//         }
//     }

//     render() {

//         return (
//             <Collapsibles
//                 collapseSection={props.collapseSection}
//                 open={props.open}
//                 category="share"
//                 sectionTitle="comparte"
//                 icon="fas fa-share-alt"
//                 lowerSection="share__create"
//                 validateForm={props.validateForm}
//             >
//                 <button onClick={fetchCardData} className={`share__create--btn ${props.isFormValid === true ? '' : ' btn-disabled'}`} type="button" id="share_btn">
//                     <i className="far fa-address-card"></i>
//                     <p className="share__create--title btn">crear tarjeta</p>
//                 </button>
//                 <p className={`error-message ${props.isFormValid === true ? ' hidden' : ''}`}>Por favor, revisa que has rellenado el formulario correctamente.</p>
//                 <div className={`card-loader ${props.isLoading === true ? '' : ' hidden'}`}><img className="card-loader__image" alt="card-lo" src={Loader}></img></div>
//                 <div className={`form__create-link ${props.cardSuccess === true ? '' : ' hidden'}`} id="share-div">
//                     <div className="share__create-card">
//                         <p>La tarjeta ha sido creada:</p>
//                         <a href={props.cardURL} target="_blank" rel="noopener noreferrer"><p className="share__create-card--text">{props.cardURL}</p></a>
//                     </div>
//                     <a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoHamilton ${props.cardURL}`} target="_blank" rel="noopener noreferrer" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
//                 </div>
//             </Collapsibles>
//         )
//     }
// }

export default Share;