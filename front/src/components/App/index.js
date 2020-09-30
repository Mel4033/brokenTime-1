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
    <div className="scrollzone">
      <Header />
      <Switch>

        {/* Route vers l'accueil */}
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>

        {/* Route vers la bibliothèque */}
        <Route exact path="/library">
          <Library />
          <Footer />
        </Route>

        <Route exact path="/profile">
          <Footer />
        </Route>
      </Switch>
    </div>
  </div>
);

// == Export
export default App;
