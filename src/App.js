import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Homepage from './containers/Homepage/Homepage';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path='/' exact component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
