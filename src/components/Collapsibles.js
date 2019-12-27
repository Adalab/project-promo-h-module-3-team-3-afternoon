import React from 'react';

class Collapsibles extends React.Component{
    constructor(props){
        super(props);
        this.collapseSection = this.collapseSection.bind(this);
        this.validateForm = this.validateForm.bind(this)
    }

    collapseSection(event){
        const target = event.target
        this.props.collapseSection(target)
        this.validateForm();
    }

    validateForm(){
        if(this.props.category === 'share'){
            this.props.validateForm();
        }
    }

    render(){
        return(
            <fieldset className="form__header">
            <div className="form__title" id={this.props.category} onClick={this.collapseSection}>
                <div className="form__contain--title">
                    <i className={`form__img ${this.props.icon}`}></i>
                    <h3 className="form__title">{this.props.sectionTitle}</h3>
                </div>
                <i className={`fas fa-chevron-down design__img-arrow click-arrow ${this.props.open === this.props.category ? ' animate' : ''}`}></i>
            </div>
            <div className={`form-bottom ${this.props.lowerSection} ${this.props.open === this.props.category ? 'form-bottom-collapse' : ''}`}>
                {this.props.children}
            </div>
        </fieldset>
        )
    }
}

Collapsibles.defaultProps={
    lowerSection: ''
}

export default Collapsibles;


