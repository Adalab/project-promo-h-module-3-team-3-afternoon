import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import defaultImage from './defaultImage';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
        const localStorageData = this.getData()
        this.state = localStorageData === null ? this.getInitialState() : localStorageData;
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
            },
            validUserName: '',
            validPosition: '',
            validAvatar: '',
            validEmail: '',
            validLinkedin: '',
            validGithub: '',
            isFormValid: ''
        };
        this.saveData = this.saveData.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.resetData = this.resetData.bind(this);
        this.collapseSection = this.collapseSection.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }
    collapseSection(target) {

        if (this.state.open !== target.id) {
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

        if (target.name === 'userName' && target.value !== '') {
            this.setState({
                validUserName: true
            })
        }

        if (target.name === 'position' && target.value !== '') {
            this.setState({
                validPosition: true
            })
        }
    }

    handleLinksChange(target) {
        this.setState({
            [target.name]: target.value
        })

        if (target.name === 'email' && target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                validEmail: true
            })
        }

        if (target.name === 'linkedin' && target.value !== '') {
            this.setState({
                validLinkedin: true
            })
        }

        if (target.name === 'github' && target.value !== '') {
            this.setState({
                validGithub: true
            })
        }
    }

    updateAvatar(img) {
        const { profile } = this.state;
        this.setState(prevState => {
            const newProfile = { ...profile, avatar: img };
            return {
                profile: newProfile,
                isAvatarDefault: false,
                validAvatar: true
            }
        });
        this.saveData();
    };
    clearForm() {
        this.forceUpdate();
        this.setState({
            name: "",
            job: "",
            phone: "",
            email: "",
            linkedin: "",
            github: "",
            palette: "1",
            isAvatarDefault: true,
            profile: {
                photo: defaultImage
            }
        });
        this.resetData();
    }

    resetData() {
        localStorage.clear();
    }
    updateEventInfo = event => {
        let key = event.target.id;
        let userInfo = event.target.value;
        this.setState(
            {
                [key]: `${userInfo}`
            },
            this.saveData
        );
    };
    componentDidMount() {
        this.saveData();
        this.getData();
    }
    saveData() {
        localStorage.setItem("info", JSON.stringify(this.state));
    }

    getData() {
        return JSON.parse(localStorage.getItem("info"));
    }

    validateForm() {
        if (this.state.userName === '') {
            this.setState({
                validUserName: false
            })
        }
        if (this.state.position === '') {
            this.setState({
                validPosition: false
            })
        }
        if (this.state.isAvatarDefault === true) {
            this.setState({
                validAvatar: false
            })
        }
        if (this.state.email === '' || !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                validEmail: false
            })
        }
        if (this.state.linkedin === '') {
            this.setState({
                validLinkedin: false
            })
        }
        if (this.state.github === '') {
            this.setState({
                validGithub: false
            })
        }

        this.isFormValid()
    }

    isFormValid() {
        if (
            this.state.validUserName === true &&
            this.state.validPosition === true &&
            this.state.validAvatar === true &&
            this.state.validEmail === true &&
            this.state.validLinkedin === true &&
            this.state.validGithub === true
        ) {
            this.setState({
                isFormValid: true
            })
        }
    }

    render() {
        const { profile, isAvatarDefault } = this.state;
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
                        validUserName={this.state.validUserName}
                        validPosition={this.state.validPosition}
                        validAvatar={this.state.validAvatar}
                        validEmail={this.state.validEmail}
                        validLinkedin={this.state.validLinkedin}
                        validGithub={this.state.validGithub}
                    />
                    <Share
                        collapseSection={this.collapseSection}
                        open={this.state.open}
                        validateForm={this.validateForm}
                        isFormValid={this.state.isFormValid}
                    />
                </form>
            </main>
        );
    }
}

export default CardMaker;