import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import OwnedCard from './OwnedCard';

import pocketwatch from '../../assets/images/pocketwatch.jpeg';
import skullclock from '../../assets/images/skullclock.jpeg';
import hourglass from '../../assets/images/hourglass.jpeg';
import thunderstorm from '../../assets/images/thunderstorm.jpeg';
import futurefantasy from '../../assets/images/futurefantasy.jpeg';
import electrocardiogram from '../../assets/images/electrocardiogram.jpeg';

const fakeImage = 'https://cdn.discordapp.com/avatars/179551273840934912/c5dc29e716dc0e081e94e64329a5325c.png?size=1024';

const Profil = () => (
  <div className="profil">
    <h2 className="profil__title">Mes informations</h2>
    <div className="profil__card">
      <div className="profil__informations">
        <div className="profil__picture">
          <img className="profil__picture--image" src={fakeImage} alt="profil" />
        </div>
        <div className="profil__data">
          <div className="profil__data--item">
            <p className="profil__data--title">Nom d'utilisateur</p>
            <p className="profil__data--value">Broken Time</p>
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Email associé</p>
            <p className="profil__data--value">brokentime.project@gmail.com</p>
          </div>
        </div>
      </div>
      <button type="button" className="profil__button"><span className="profil__button--text">Modifier</span></button>
    </div>

    <h2 className="profil__title">Ma bibliothèque</h2>
    <div className="cardlist">
      <OwnedCard
        title="BrokenTime - La montre du temps"
        resume="Une connexion des plus inattendues se fait avec Meadow, jeune femme d'un monde parallèle. En plein coeur d'un univers Steampunk, saurez-vous la mener jusqu'à la vérité ?"
        image={pocketwatch}
      />
      <OwnedCard
        title="BrokenTime - Au-delà de l'horloge"
        resume="A la suite de son voyage temporel, la connexion avec Meadow se rétabli. Elle n'est plus dans la même dimension, ni confrontée aux mêmes problèmes..."
        image={skullclock}
      />
      <OwnedCard
        title="BrokenTime - Zephyrium en folie"
        resume="Une nouvelle forme d'énergie se révèle au travers d'un sablier peu commun. La puissance qui en émane risque de faire courir votre protagoniste à sa perte. Prêt à l'aider ?"
        image={hourglass}
      />
      <OwnedCard
        title="BrokenTime - Passage interdit"
        resume="Alors que les dimensions s'enchaînent, la connexion se fait de plus en plus difficile. Le temps semble céder sous le poids des voyages, et Meadow est sur le point d'en payer le prix."
        image={thunderstorm}
      />
      <OwnedCard
        title="BrokenTime - Du mécanique au digital"
        resume="2075 - Paris. Ou le plus grand saut vers le passé pour notre protagoniste. Les mentalités sont différentes et la crainte règne. Il n'y a pas que des humains sur Terre, ni que des tendres..."
        image={futurefantasy}
      />
      <OwnedCard
        title="BrokenTime - Ligne de vie"
        resume="Retenue au laboratoire d'Aperture, les choses s'accélèrent. Faites les bons choix pour que l'électrocardiogramme de Meadow ne soit pas sa dernière ligne droite."
        image={electrocardiogram}
      />
    </div>
  </div>
);

export default Profil;
