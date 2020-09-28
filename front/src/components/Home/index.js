import React from 'react';
import './style.scss';

const Home = () => (
  <div className="home">
    {/* Encapsulation des éléments de première vue avec la div suivante */}
    <div className="home__firstlook">
      <div className="home__group">
        <icon className="home__item home__logo far fa-clock fa-8x" />
        <h1 className="home__item home__title">Broken Time</h1>
        <h2 className="home__item home__subtitle">Le site de fictions interactives.</h2>
      </div>
      <a className="home__item home__nav-arrow" href="#" alt="Autoscroll"><icon className="fas fa-angle-double-down fa-4x" /></a>
    </div>
    <div className="home__container">
      <div>Some content.</div>
    </div>
  </div>
);

export default Home;
