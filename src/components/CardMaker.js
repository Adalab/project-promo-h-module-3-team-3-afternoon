import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            position: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(name, value){
        this.setState((prevState,props) => {
            let newUserName = prevState.userName;
            let newPosition = prevState.position;

            if(name === 'userName'){
                newUserName = value;
            }
            if(name ==='position'){
                newPosition = value;
            }

            return {
                userName: newUserName,
                position: newPosition
            }
        })
    }

    render() {
        return (
            <main className="main">
                <Preview 
                    userName={this.state.userName}
                    position={this.state.position}
                />
                <form className="form" action="" method="POST">
                    <Design />
                    <Fill 
                        handleNameChange={this.handleNameChange}
                    />
                    <Share />
                </form>
            </main>
        );
    }
}

export default CardMaker;