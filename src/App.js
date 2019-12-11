import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { MenuContextProvider } from './Providers/menuProvider';

import './Static/scss/app.scss'

import AppShell from './Components/AppShell'

import Home from './Routes/Home'
import RedirectSectionArticle from './Routes/RedirectSectionArticle'

function App() {
  return (
    <MenuContextProvider>
      <Router>
        <AppShell>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" render={(props) => <RedirectSectionArticle {...props} />} />
          </Switch>
        </AppShell>
      </Router>
    </MenuContextProvider>
  );
}

export default App;
