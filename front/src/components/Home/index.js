import React from 'react';
import './style.scss';
import logoBrokentime from '../../assets/images/brokentime-logo.png';

const Home = () => (
  <div className="home">
    {/* Encapsulation des éléments de première vue avec la div suivante */}
    <div className="home__firstlook">
      <div className="home__group">
        <img src={logoBrokentime} alt="Logo du site" className="home__item home__logo" />
        <h1 className="home__item home__title">Broken Time</h1>
        <h2 className="home__item home__subtitle">Le site de fictions interactives.</h2>
      </div>
      <a className="home__item home__nav-arrow" href="#" alt="Autoscroll">
        {/* Le logo se situera ici à la place de l'icone */}
        <i className="fas fa-angle-double-down fa-4x" />
      </a>
    </div>
  </div>
);

export default Home;
