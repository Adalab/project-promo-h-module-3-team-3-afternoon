import React from 'react';

const Collapsibles = props => {

    const collapseSection = event => {
        const target = event.target;
        props.collapseSection(target)
        validateForm();
    }

    const validateForm = () => {
        if(props.category === 'share'){
            props.validateForm();
        }
    }

    return(
        <fieldset className="form__header">
            <div className="form__title" id={props.category} onClick={collapseSection}>
                <div className="form__contain--title">
                    <i className={`form__img ${props.icon}`}></i>
                    <h3 className="form__title">{props.sectionTitle}</h3>
                </div>
                <i className={`fas fa-chevron-down design__img-arrow click-arrow ${props.open === props.category ? ' animate' : ''}`}></i>
            </div>
            <div className={`form-bottom ${props.lowerSection} ${props.open === props.category ? 'form-bottom-collapse' : ''}`}>
                {props.children}
            </div>
        </fieldset>
    );
}

Collapsibles.defaultProps={
    lowerSection: ''
}

export default Collapsibles;


