// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../containers/Home';
import Profil from '../../containers/Profil';
import Fiction from '../../containers/Fiction';
import Library from '../../containers/Library';
import './style.scss';
import Contact from '../Contact';
import ContactForm from '../Contact/ContactForm';
import TeamPage from '../TeamPage';
import NotFound from '../../containers/NotFound';

// Identifiants : Bobby.night@gmail.com
// Pswd : bobby

// == Composant
const App = ({ checkAuth, isLogged }) => {
  useEffect(() => {
    checkAuth();
    document.title = 'Broken Time';
  }, []);

  return (
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

          {/* Route vers la page de profil */}
          <Route exact path="/profil">
            {!isLogged && <Redirect to="/" />}
            <Profil />
            <Footer />
          </Route>

          {/* Route vers la page de fiction */}
          <Route exact path="/fiction">
            {!isLogged && <Redirect to="/" />}
            <Fiction />
          </Route>

          {/* Route vers la page de contact */}
          <Route exact path="/contact">
            <Contact />
            <Footer />
          </Route>

          <Route exact path="/ContactForm">
            <ContactForm />
          </Route>

          <Route exact path="/TeamPage">
            <TeamPage />
          </Route>

          <Route>
            <NotFound />
            <Footer />
          </Route>

        </Switch>
      </div>
    </div>
  );
};

// == Export
export default App;
