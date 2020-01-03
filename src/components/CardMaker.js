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
            isFormValid:'',
            userInfo: {
                "palette": '',
                "name": '',
                "job": '',
                "phone": '',
                "email": '',
                "linkedin": '',
                "github": '',
                "photo": ''
            },
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
                paletteValue: newPaletteValue,
                userInfo: { ...newUserInfo, "palette": newPaletteValue}
            }

        })
    }

    handleNameChange(target) {

        this.setState({
            [target.name]: target.value,
        });

        if(target.name === 'userName' && target.value !== ''){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    validUserName: true,
                    userInfo: {...newUserInfo, "name": target.value}
                })
            })
        }

        if(target.name === 'position' && target.value !== ''){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    validPosition: true,
                    userInfo: {...newUserInfo, "job": target.value}
                })
            })
        }
    }

    handleLinksChange(target) {
        this.setState({
            [target.name]: target.value
        });


        if(target.name === 'email' && target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    validEmail: true,
                    userInfo: {...newUserInfo, "email": target.value}
                })
            })
        }

        if(target.name === 'phone' && target.value !== ''){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    userInfo: {...newUserInfo, "phone": target.value}
                })
            })
        }

        if(target.name === 'linkedin' && target.value !== ''){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    validLinkedin: true,
                    userInfo: {...newUserInfo, "linkedin": target.value}
                })
            })
        }

        if(target.name === 'github' && target.value !== ''){
            this.setState((prevState, props) => {
                let newUserInfo = prevState.userInfo

                return({
                    validGithub: true,
                    userInfo: {...newUserInfo, "github": target.value}
                })
            })
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
        if(this.state.userName === ''){
            this.setState({
                validUserName: false
            })
        }
        if(this.state.position === ''){
            this.setState({
                validPosition: false
            })
        }
        if(this.state.isAvatarDefault === true){
            this.setState({
                validAvatar: false
            })
        }
        if(this.state.email === '' || !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({
                validEmail: false
            })
        }
        if(this.state.linkedin === ''){
            this.setState({
                validLinkedin: false
            })
        }
        if(this.state.github === ''){
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
            }
    }

    resetForm(){
        this.setState({
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
            isFormValid:'',
            userInfo: {
                "palette": '1',
                "name": '',
                "job": '',
                "phone": '',
                "email": '',
                "linkedin": '',
                "github": '',
                "photo": ''
            }
        })
    }
    
    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('data'));

        if(data !== null){
            this.setState({
                userName: data.name,
                position: data.job,
                paletteValue: data.palette,
                email: data.email,
                phone: data.phone,
                linkedin: data.linkedin,
                github: data.github,
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
                    resetForm={this.resetForm}
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
                        avatar={this.state.profile.avatar} 
                        isAvatarDefault={this.isAvatarDefault} 
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
                        cardURL={this.state.cardURL}
                        fetchCardData={this.fetchCardData}
                        cardSuccess={this.state.cardSuccess}
                        isLoading={this.state.isLoading}
                    />
                </form>
            </main>
        );
    }
}

export default CardMaker;