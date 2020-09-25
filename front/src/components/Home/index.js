import React from 'react';
import './style.scss';

const Home = () => (
  <div className="home">
    {/* Encapsulation des éléments de première vue avec la div suivante */}
    <div className="home__firstlook">
      <icon className="home__item far fa-clock fa-8x" />
      <h1 className="home__item home__title">Broken Time</h1>
      <h2 className="home__item home__subtitle">Le site de fictions interactives.</h2>
      <a className="home__item" href="#" alt="Autoscroll"><icon className="fas fa-angle-double-down fa-5x" /></a>
    </div>
  </div>
);

export default Home;
