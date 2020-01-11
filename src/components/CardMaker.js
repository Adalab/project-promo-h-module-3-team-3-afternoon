import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import defaultImage from './defaultImage';
import {fetchCardData} from '../services/CardService';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'design',
            userInfo: {
                "palette": '',
                "name": '',
                "job": '',
                "phone": '',
                "email": '',
                "linkedin": '',
                "github": '',
                "photo": defaultImage
            },
            profile: {
              avatar: defaultImage
            },
            isAvatarDefault: true,
            validUserName: '',
            validPosition: '',
            validAvatar: '',
            validEmail: '',
            validLinkedin: '',
            validGithub: '',
            isFormValid:'',
            cardURL: '',
            isLoading: false,
            cardSuccess: ''
        };
        this.collapseSection = this.collapseSection.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleLinksChange = this.handleLinksChange.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.fetchCardData = this.fetchCardData.bind(this);
        this.setURL = this.setURL.bind(this);
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
            let newUserInfo = prevState.userInfo;

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
                userInfo: { ...newUserInfo, "palette": newPaletteValue}
            }

        })
    }

    handleNameChange(target) {

        if(target.name === 'userName'){
            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;
                return {userInfo: { ...newUserInfo, "name": target.value}}
            });

            if(target.value !== ''){
                this.setState({
                    validUserName: true,
                })
            } else {
                this.setState({
                validUserName: false,
                })
            }
        } 

        if(target.name === 'position'){
            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;
                return {userInfo: { ...newUserInfo, "job": target.value}}
            });

            if(target.value !== ''){
                this.setState({
                    validPosition: true,
                })
            } else {
                this.setState({
                validPosition: false,
                })
            }
        }
    }

    handleLinksChange(target) {

        if(target.name === 'email'){

            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;
                return {userInfo: { ...newUserInfo, "email": target.value}}
            });

            if(target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                this.setState({
                    validEmail: true,
                })
            }  else {
                this.setState({
                validEmail: false,
                })
            }
        }

        if(target.name === 'phone'){
            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;

                return({
                    userInfo: {...newUserInfo, "phone": target.value}
                })
            })
        }

        if(target.name === 'linkedin'){
            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;
                return {userInfo: { ...newUserInfo, "linkedin": target.value}}
            });

            if(target.value !== ''){
                this.setState({
                    validLinkedin: true,
                })
            }  else {
                this.setState({
                validLinkedin: false,
                })
            }
        }

        if(target.name === 'github'){
            this.setState(prevState => {
                let newUserInfo = prevState.userInfo;
                return {userInfo: { ...newUserInfo, "github": target.value}}
            });

            if(target.value !== ''){
                this.setState({
                    validGithub: true,
                })
            }  else {
                this.setState({
                validGithub: false,
                })
            }
        }
    }

    updateAvatar(img) {
        const {profile} = this.state;
        this.setState(prevState => {
          let newProfile = {...profile, avatar: img};
          let newUserInfo = prevState.userInfo; 
          return {
            profile: newProfile,
            isAvatarDefault: false,
            validAvatar: true,
            userInfo: {...newUserInfo, "photo": img}
          }
        });
    };

    validateForm(){
        if(this.state.userInfo.name === ''){
            this.setState({
                validUserName: false
            })
        }
        if(this.state.userInfo.job === ''){
            this.setState({
                validPosition: false
            })
        }
        if(this.state.isAvatarDefault === true){
            this.setState({
                validAvatar: false
            })
        }
        if(this.state.userInfo.email === '' || !this.state.userInfo.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({
                validEmail: false
            })
        }
        if(this.state.userInfo.linkedin === ''){
            this.setState({
                validLinkedin: false
            })
        }
        if(this.state.userInfo.github === ''){
            this.setState({
                validGithub: false
            })
        }

        this.isFormValid()
    }

    isFormValid(){
        if(
        this.state.validUserName === true &&
        this.state.validPosition === true &&
        this.state.validAvatar === true &&
        this.state.validEmail === true &&
        this.state.validLinkedin === true &&
        this.state.validGithub === true
        ){
            this.setState({
                isFormValid: true
            })
        } else {
            this.setState({
                isFormValid: false
            })
        }
    }

    resetForm(){
        this.setState({
            open: 'design',
            userInfo: {
                "palette": '1',
                "name": '',
                "job": '',
                "phone": '',
                "email": '',
                "linkedin": '',
                "github": '',
                "photo": defaultImage
            },
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
            isFormValid:''
        })
    }
    
    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('data'));

        if(data !== null){
            this.setState({
                userInfo: {
                    "palette": data.palette !=='' ?data.palette : '1',
                    "name": data.name,
                    "job": data.job,
                    "phone": data.phone,
                    "email": data.email,
                    "linkedin": data.linkedin,
                    "github": data.github,
                    "photo": data.photo !== '' ? data.photo : defaultImage
                },
                profile: {
                    avatar: data.photo
                },
                isAvatarDefault: data.photo !== defaultImage ? false : true,
                validAvatar: data.photo !== defaultImage ? true : false,
                validUserName: data.name !== '' ? true : false,
                validPosition: data.job !== '' ? true : false,
                validEmail: data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false,
                validLinkedin: data.linkedin !== '' ? true : false,
                validGithub: data.github !== '' ? true : false,
                cardURL: ''
            })
        }
    }

    componentDidUpdate(){
        localStorage.setItem('data', JSON.stringify(this.state.userInfo));

    }

    fetchCardData(){
        const json = JSON.parse(localStorage.getItem('data'));
        fetchCardData(json)
        .then(result => this.setURL(result))
        .catch(error => console.log(error));

        this.setState({
            isLoading: true
        })
    }

    setURL(result){
        if(result.success){
            this.setState({
                cardURL: result.cardURL,
                isLoading: false,
                cardSuccess: true
            })
        } else {
            this.setState({
                cardURL: 'ERROR:' + result.error,
                isLoading: false
            })
        }
    }

    render() {
        const {userInfo, profile, open, validUserName, validPosition, validAvatar, validEmail, validLinkedin, validGithub, isFormValid, cardURL, cardSuccess, isLoading} = this.state;

        return (
            <main className="main">
                <Preview
                    userName={userInfo.name}
                    position={userInfo.job}
                    paletteValue={userInfo.palette}
                    email={userInfo.email}
                    phone={userInfo.phone}
                    linkedin={userInfo.linkedin}
                    github={userInfo.github}
                    avatar={profile.avatar} 
                    resetForm={this.resetForm}
                />
                <form className="form" action="" method="POST">
                    <Design
                        collapseSection={this.collapseSection}
                        open={open}
                        paletteValue={userInfo.palette}
                        handlePaletteChange={this.handlePaletteChange}
                    />
                    <Fill
                        collapseSection={this.collapseSection}
                        open={open}
                        handleNameChange={this.handleNameChange}
                        handleLinksChange={this.handleLinksChange}
                        avatar={profile.avatar} 
                        isAvatarDefault={this.isAvatarDefault} 
                        updateAvatar={this.updateAvatar} 
                        userName={userInfo.name}
                        position={userInfo.job}
                        email={userInfo.email}
                        phone={userInfo.phone}
                        linkedin={userInfo.linkedin}
                        github={userInfo.github}
                        validUserName={validUserName}
                        validPosition={validPosition}
                        validAvatar={validAvatar}
                        validEmail={validEmail}
                        validLinkedin={validLinkedin}
                        validGithub={validGithub}
                    />
                    <Share
                        collapseSection={this.collapseSection}
                        open={open}
                        validateForm={this.validateForm}
                        isFormValid={isFormValid}
                        cardURL={cardURL}
                        fetchCardData={this.fetchCardData}
                        cardSuccess={cardSuccess}
                        isLoading={isLoading}
                    />
                </form>
            </main>
        );
    }
}

export default CardMaker;