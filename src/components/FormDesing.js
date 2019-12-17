import React from 'react';

const FormDesing = () => {
    return (
        <form class="form" action="" method="POST">
        <fieldset id="form_desing" class="form__design collapsible">
        <div class="form__desing--title collapsible-header">
            <div class="form__contain--title">
                <i class="form__img far fa-object-ungroup"></i>
                <h3 class="form__title">diseña</h3>
            </div>
            <i class="fas fa-chevron-down design__img-arrow click-arrow" id="arrow-design"></i>
        </div>
        <div class="palette__container collapsible-container" id="first-form">
            <p>colores</p>
            <div class="color_selected">

                <div class="palette">
                    <label for="colorpalette1"></label>
                    <input class="form-item" id="colorpalette1" type="radio" value="1" name="palette" />
                    <div class="palette__color--general">
                        <div class="palette__color blue1"></div>
                        <div class="palette__color blue2"></div>
                        <div class="palette__color blue3"></div>
                    </div>
                </div>

                <div class="palette">
                    <label for="colorpalette2"></label>
                    <input class="form-item" id="colorpalette2" type="radio" value="2" name="palette" />
                    <div class="palette__color--general">
                        <div class="palette__color red1"></div>
                        <div class="palette__color red2"></div>
                        <div class="palette__color red3"></div>
                    </div>
                </div>

                <div class="palette">
                    <label for="colorpalette3"></label>
                    <input class="form-item" id="colorpalette3" type="radio" value="3" name="palette" />
                    <div class="palette__color--general">
                        <div class="palette__color yellow1"></div>
                        <div class="palette__color yellow2"></div>
                        <div class="palette__color yellow3"></div>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
    </form>
    
    );
}
export default FormDesing;