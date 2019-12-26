import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import defaultImage from './defaultImage';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'design',
            userName: '',
            position: '',
            paletteValue: '1',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            isAvatarDefault: true,
            profile: {
              avatar: defaultImage
            }
        };
        this.collapseSection = this.collapseSection.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
    }

    collapseSection(target){

        if(this.state.open !== target.id){
            this.setState({
                open: target.id
            })
        } else {
            this.setState({
                open: ''
            })
        }
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

    updateAvatar(img) {
        const {profile} = this.state;
        this.setState(prevState => {
          const newProfile = {...profile, avatar: img};
          return {
            profile: newProfile,
            isAvatarDefault: false
          }
        });
    };

    render() {
        const {profile, isAvatarDefault} = this.state;
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
                    avatar={profile.avatar} 
                />
                <form className="form" action="" method="POST">
                    <Design
                        collapseSection={this.collapseSection}
                        open={this.state.open}
                        paletteValue={this.state.paletteValue}
                        handlePaletteChange={this.handlePaletteChange}
                    />
                    <Fill
                        collapseSection={this.collapseSection}
                        open={this.state.open}
                        handleNameChange={this.handleNameChange}
                        handleLinksChange={this.handleLinksChange}
                        avatar={profile.avatar} 
                        isAvatarDefault={isAvatarDefault} 
                        updateAvatar={this.updateAvatar} 
                        userName={this.state.userName}
                        position={this.state.position}
                        paletteValue={this.state.paletteValue}
                        email={this.state.email}
                        phone={this.state.phone}
                        linkedin={this.state.linkedin}
                        github={this.state.github}
                    />
                    <Share
                        collapseSection={this.collapseSection}
                        open={this.state.open}
                    />
                </form>
            </main>
        );
    }
}

export default CardMaker;