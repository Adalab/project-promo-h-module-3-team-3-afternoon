import React from 'react';

class Collapsibles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            toggleClass: 'hidden'
        }
        this.collapseSection = this.collapseSection.bind(this);
    }

    collapseSection(){
        if(this.state.open===false){
            this.setState({
                open: true,
                toggleClass: ''
            })
        } else {
            this.setState({
                open: false,
                toggleClass: 'hidden'
            })
        }
    }

    render(){
        return(
            <fieldset className="form__header">
            <div className="form__title" onClick={this.collapseSection}>
                <div className="form__contain--title">
                    <i className={`form__img ${this.props.icon}`}></i>
                    <h3 className="form__title">{this.props.sectionTitle}</h3>
                </div>
                <i className="fas fa-chevron-down design__img-arrow click-arrow"></i>
            </div>
            <div className={`${this.props.lowerSection} ${this.state.toggleClass}`}>
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


