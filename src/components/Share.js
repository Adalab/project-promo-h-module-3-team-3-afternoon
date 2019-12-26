import React from 'react';
import Collapsibles from './Collapsibles';

class Share extends React.Component {
    constructor(props) {
        super(props);
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
            >
                <button className="share__create--btn" type="button" id="share_btn">
                    <i className="far fa-address-card"></i>
                    <p className="share__create--tittle btn">crear tarjeta</p>
                </button>
                <div className="errorMessage"></div>
                <div className="form__create-link  hidden" id="share-div">
                    <div className="share__create-card">
                        <p className="share__create-card--text">La tarjeta ha sido creada:</p>
                    </div>
                    <a href="" target="_blank" className="share__create-card--twitter"><i className="fab fa-twitter"></i>Compartir en twitter</a>
                </div>
            </Collapsibles>
        )
    }
}

export default Share;