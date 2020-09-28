// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>

    {/* Route vers l'accueil */}
      <Route exact path="/">
        <Header />
        <div className="scrollzone">
          <Home />
          <Footer />
        </div>
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
