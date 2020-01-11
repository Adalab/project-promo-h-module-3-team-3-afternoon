import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import CardMaker from './CardMaker';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/Editor">
            <Header/>
            <CardMaker/>
          </Route>
        </Switch>
        <Footer/>
      </div >
    )
  }
}
export default App;
