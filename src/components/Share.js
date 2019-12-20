import React from 'react';
import Collapsibles from './Collapsibles';

const Share = () => {
    return (
        <Collapsibles
            category="share"
            sectionTitle="comparte"
            icon="fas fa-share-alt"
            lowerSection="share__create"
        >
            <button className="share__create--btn" type="button" id="share_btn">
                <i className="far fa-address-card"></i>
                <p className="share__create--tittle btn">crear tarjeta</p>
            </button>
            <div className="errorMessage"></div>
            <div className="form__create-link " id="share-div">
                <div className="share__create-card">
                    <p className="share__create-card--text">La tarjeta ha sido creada:</p>
                </div>
                <a href="" target="_blank" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
            </div>
        </Collapsibles>
    )
}

export default Share;