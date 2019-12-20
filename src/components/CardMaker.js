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
            position: '',
            paletteValue: '1'
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
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

    handlePaletteChange(checkedPaletteValue){

        this.setState((prevState,props) => {
            let newPaletteValue = prevState.paletteValue;
            if(checkedPaletteValue === '1'){
                newPaletteValue = '1'
            }
            if(checkedPaletteValue === '2'){
                newPaletteValue = '2'
            }
            if(checkedPaletteValue === '3'){
                newPaletteValue = '3'
            }

            return {
                paletteValue: newPaletteValue
            }
        })
    }

    render() {
        return (
            <main className="main">
                <Preview 
                    userName={this.state.userName}
                    position={this.state.position}
                    paletteValue={this.state.paletteValue}
                />
                <form className="form" action="" method="POST">
                    <Design 
                        handlePaletteChange={this.handlePaletteChange}
                    />
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