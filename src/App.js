import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Static/scss/app.scss'

import AppShell from './Components/AppShell'

import Home from './Routes/Home'
import Article from './Routes/Article'

function App() {
  return (
    <Router>
      <AppShell>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" render={(props) => <Article {...props} />} />
        </Switch>
      </AppShell>
    </Router>
  );
}

export default App;
