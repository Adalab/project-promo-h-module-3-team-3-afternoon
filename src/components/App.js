import React from 'react';
import '../styles/App.scss';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom'
import Editor from './Editor';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Editor" component={Editor} />
        </Switch>
      </div >
    )
  }
}
export default App;
