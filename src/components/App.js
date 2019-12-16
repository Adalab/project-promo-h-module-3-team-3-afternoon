import React from 'react';
import '../styles/App.scss';

import Landing from './Landing';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Footer />
      </div>
    );
  }
}
export default App;
