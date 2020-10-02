import React from 'react';
import './style.scss';
import logoBrokentime from '../../assets/images/brokentime-logo.png';
import HomeCard from './HomeCard';

const ficImg1 = 'https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_960_720.jpg';
const ficImg2 = 'https://cdn.pixabay.com/photo/2019/05/22/14/51/skull-4221695_960_720.jpg';

const Home = () => (
  <div className="home">
    {/* Encapsulation des éléments de première vue avec la div suivante */}
    <div className="home__firstlook">
      <div className="home__group">
        <img src={logoBrokentime} alt="Logo du site" className="home__item home__logo" />
        <h1 className="home__item home__title">Broken Time</h1>

        {/*
        // TODO : Des petites phrases générées aléatoirement à la place du H2 actuel, type:
        - Les meilleures fictions au meilleur endroit
        - Vivez des aventures partout où vous allez
        - Etc ...
         */}
        <h2 className="home__item home__subtitle">Le site de fictions interactives.</h2>
      </div>
      <a className="home__item home__nav-arrow" href="#home-fictions" alt="Autoscroll">
        {/* Le logo se situera ici à la place de l'icone */}
        <i className="fas fa-angle-double-down fa-4x" />
      </a>
    </div>
    <div className="home__fictions" id="home-fictions">
      <HomeCard
        title="BrokenTime - La montre du temps"
        resume="Une connexion des plus inattendues se fait avec Meadow, jeune femme d'un monde parallèle. En plein coeur d'un univers Steampunk, saurez-vous la mener jusqu'à la vérité ?"
        image={ficImg1}
      />
      <HomeCard
        title="BrokenTime - Au-delà de l'horloge"
        resume="A la suite de son voyage temporel, la connexion avec Meadow se rétabli. Elle n'est plus dans la même dimension, ni confrontée aux mêmes problèmes..."
        image={ficImg2}
      />
    </div>
  </div>
);

export default Home;
