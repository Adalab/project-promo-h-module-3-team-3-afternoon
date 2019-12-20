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
            paletteValue: '1',
            email: false,
            phone: false,
            linkedin: false,
            github: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
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

    handleLinksChange(target){
        this.setState((prevState,props) => {
            let newEmail = prevState.email;
            let newPhone = prevState.phone;
            let newLinkedin = prevState.linkedin;
            let newGithub = prevState.github;

            if(target.name === 'email' && target.value !== ''){
                newEmail = true;
                return {email: newEmail}
            }
            if(target.name === 'phone' && target.value !== ''){
                newPhone = true;
                return {phone: newPhone}
            }
            if(target.name === 'linkedin' && target.value !== ''){
                newLinkedin = true;
                return {linkedin: newLinkedin}
            }
            if(target.name === 'github' && target.value !== ''){
                newGithub = true;
                return {github: newGithub}
            }

            // return {
            //     email: newEmail,
            //     phone: newPhone,
            //     linkedin: newLinkedin,
            //     github: newGithub
            // }
        })  
    }

    render() {
        return (
            <main className="main">
                <Preview 
                    userName={this.state.userName}
                    position={this.state.position}
                    paletteValue={this.state.paletteValue}
                    email={this.state.email}
                    phone={this.state.phone}
                    linkedin={this.state.linkedin}
                    github={this.state.github}
                />
                <form className="form" action="" method="POST">
                    <Design 
                        handlePaletteChange={this.handlePaletteChange}
                    />
                    <Fill 
                        handleNameChange={this.handleNameChange}
                        handleLinksChange={this.handleLinksChange}
                    />
                    <Share 
                    />
                </form>
            </main>
        );
    }
}

export default CardMaker;