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

// Identifiants : Bobby.night@gmail.com
// Pswd : bobby

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="scrollzone">
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

        <Route exact path="/profil">
          <Footer />
        </Route>

        <Route exact path="/fiction">
          <Fiction />
        </Route>
      </Switch>
    </div>
  </div>
);

// == Export
export default App;
