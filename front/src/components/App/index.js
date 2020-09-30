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
          <Home />
          <Footer />
        </div>
      </Route>
    </Switch>
  </div>
);
*/

// == Composant test pour la Library 

const App = () => (
  <div className="app">
    <Header />
    <div className="scrollzone">
      <Library />
      <Footer />
    </div>
  </div>
);







// == Export
export default App;
