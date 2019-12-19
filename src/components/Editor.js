import '../styles/App.scss';
import React from 'react';
import Header from './Header';
import CardMaker from './CardMaker';
import Footer from './Footer';

class Editor extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header></Header>
                <form>
                    <CardMaker></CardMaker>
                </form>
                <Footer></Footer>
            </div >
        )
    }
}

export default Editor;