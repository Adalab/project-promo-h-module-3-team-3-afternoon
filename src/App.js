import React from 'react';
import './styles/App.scss';

import Landing from './components/Landing';
import Footer from './components/Footer';

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
