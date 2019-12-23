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
            email: '',
            phone: '',
            linkedin: '',
            github: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
    }

    handlePaletteChange(checkedPaletteValue) {

        this.setState((prevState, props) => {
            let newPaletteValue = prevState.paletteValue;
            if (checkedPaletteValue === '1') {
                newPaletteValue = '1'
            }
            if (checkedPaletteValue === '2') {
                newPaletteValue = '2'
            }
            if (checkedPaletteValue === '3') {
                newPaletteValue = '3'
            }

            return {
                paletteValue: newPaletteValue
            }
        })
    }

    handleNameChange(target) {
        this.setState({
            [target.name]: target.value
        });
    }

    handleLinksChange(target) {
        this.setState({
            [target.name]: target.value
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