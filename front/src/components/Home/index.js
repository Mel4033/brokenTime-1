import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import HomeCard from './HomeCard';

const logoBrokentime = 'https://media.discordapp.net/attachments/364094342953959424/765579486929485844/brokentime-logo.png?width=731&height=677';
const pocketwatch = 'https://media.discordapp.net/attachments/364094342953959424/765579202107408434/pocketwatch.jpeg';
const skullclock = 'https://media.discordapp.net/attachments/364094342953959424/765579187477544990/skullclock.jpeg';

const Home = ({ isLogged }) => (
  <div className="home">
    {/* Encapsulation des éléments de première vue avec la div suivante */}
    <div className="home__firstlook">
      <div className="home__group">
        <img src={logoBrokentime} alt="Logo du site" className="home__item home__logo" />
        <h1 className="home__item home__title">Broken Time</h1>
        <h2 className="home__item home__subtitle">Le site de fictions interactives.</h2>
      </div>
      <a className="home__item home__nav-arrow" href="#home-fictions" alt="Autoscroll">
        {/* Le logo se situera ici à la place de l'icone */}
        <i className="fas fa-angle-double-down fa-4x" />
      </a>
    </div>
    <div className="home__fictions" id="home-fictions">
      <HomeCard
        isLogged={isLogged}
        isAvailable
        title="BrokenTime - La montre du temps"
        resume="Une connexion des plus inattendues se fait avec Meadow, jeune femme d'un monde parallèle. En plein coeur d'un univers Steampunk, saurez-vous la mener jusqu'à la vérité ?"
        image={pocketwatch}
      />
      <HomeCard
        isLogged={isLogged}
        isAvailable={false}
        title="BrokenTime - Au-delà de l'horloge"
        resume="A la suite de son voyage temporel, la connexion avec Meadow se rétabli. Elle n'est plus dans la même dimension, ni confrontée aux mêmes problèmes..."
        image={skullclock}
      />
    </div>
  </div>
);

export default Home;
