// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import bibliotheque from '../Bibliotheque';
import './style.scss';
import Bibliotheque from '../Bibliotheque';

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

// == Composant test pour la bibliotheque 

const App = () => (
  <div className="app">
    <Header />
    <div className="scrollzone">
      <Bibliotheque />
      <Footer />
    </div>
  </div>
);







// == Export
export default App;
