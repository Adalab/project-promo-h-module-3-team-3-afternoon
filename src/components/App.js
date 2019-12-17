import React from 'react';
import '../styles/App.scss';

import Landing from './Landing';
import Footer from './Footer';
import CardMaker from './CardMaker';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <CardMaker/>
        <Footer/>
      </div>
    );
  }
}
export default App;
