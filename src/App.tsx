import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Profile from './pages/profile/profile';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/' component={Profile} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
