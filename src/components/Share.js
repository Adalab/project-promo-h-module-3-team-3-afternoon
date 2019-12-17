import React from 'react';

const Share = () => {
    return (
        <fieldset className="form__share collapsible">
            <div className="form__share--container collapsible-header">
                <div className="form__share--tittle">
                    <i className="fas fa-share-alt"></i>
                    <h3 className="form__share--text">comparte</h3>
                </div>
                <i className="fas fa-chevron-down click-arrow" id="arrow-share"></i>
            </div>
            <div className="share__create collapsible-container" id="third-form">
                <button className="share__create--btn" type="button" id="share_btn">
                    <i className="far fa-address-card"></i>
                    <p className="share__create--tittle btn">crear tarjeta</p>
                </button>
            </div>
            <div className="errorMessage"></div>
            <div className="form__create-link " id="share-div">
                <div className="share__create-card">
                    <p className="share__create-card--text">La tarjeta ha sido creada:</p>
                </div>
                <a href="" target="_blank" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
            </div>
        </fieldset>
    )
}

export default Share;