// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Library from '../../containers/Card';
import Fiction from '../../containers/Fiction';
import './style.scss';
// TODO : Faire les routes et les redirections

// == Composant
const App = () => (
  <div className="app">
    <Switch>

      {/* Route vers l'accueil */}
      <Route exact path="/">
        <Header />
        <div className="scrollzone">
          <Fiction />
        </div>
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
