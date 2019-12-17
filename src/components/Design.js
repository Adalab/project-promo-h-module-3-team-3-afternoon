import React from 'react';

const Design = () => {
    return (
        <fieldset id="form_desing" className="form__design collapsible">
        <div className="form__desing--title collapsible-header">
            <div className="form__contain--title">
                <i className="form__img far fa-object-ungroup"></i>
                <h3 className="form__title">diseña</h3>
            </div>
            <i className="fas fa-chevron-down design__img-arrow click-arrow" id="arrow-design"></i>
        </div>
        <div className="palette__container collapsible-container" id="first-form">
            <p>colores</p>
            <div className="color_selected">

                <div className="palette">
                    <label htmlFor="colorpalette1"></label>
                    <input className="form-item" id="colorpalette1" type="radio" value="1" name="palette" />
                    <div className="palette__color--general">
                        <div className="palette__color blue1"></div>
                        <div className="palette__color blue2"></div>
                        <div className="palette__color blue3"></div>
                    </div>
                </div>

                <div className="palette">
                    <label htmlFor="colorpalette2"></label>
                    <input className="form-item" id="colorpalette2" type="radio" value="2" name="palette" />
                    <div className="palette__color--general">
                        <div className="palette__color red1"></div>
                        <div className="palette__color red2"></div>
                        <div className="palette__color red3"></div>
                    </div>
                </div>

                <div className="palette">
                    <label htmlFor="colorpalette3"></label>
                    <input className="form-item" id="colorpalette3" type="radio" value="3" name="palette" />
                    <div className="palette__color--general">
                        <div className="palette__color yellow1"></div>
                        <div className="palette__color yellow2"></div>
                        <div className="palette__color yellow3"></div>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
    );
}
export default Design;