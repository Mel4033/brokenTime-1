// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Menu from '../Header/Menu'
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Menu />
    <div className="scrollzone">
      <Home />
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
