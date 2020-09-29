// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Library from '../../containers/Card';
import './style.scss';


/*
// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="scrollzone">
      <Home />
      <Footer />
    </div>
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
