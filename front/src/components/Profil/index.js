import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import OwnedCard from './OwnedCard';

const fakeImage = 'https://cdn.discordapp.com/avatars/179551273840934912/c5dc29e716dc0e081e94e64329a5325c.png?size=1024';
const ficImg1 = 'https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_960_720.jpg';
const ficImg2 = 'https://cdn.pixabay.com/photo/2019/05/22/14/51/skull-4221695_960_720.jpg';
const ficImg3 = 'https://cdn.pixabay.com/photo/2017/11/02/03/35/gothic-2910057_960_720.jpg';
const ficImg4 = 'https://cdn.pixabay.com/photo/2019/07/31/18/20/thunderstorm-4375844_960_720.jpg';
const ficImg5 = 'https://cdn.pixabay.com/photo/2019/06/28/12/08/fantasy-4304070_960_720.jpg';
const ficImg6 = 'https://cdn.pixabay.com/photo/2012/04/18/03/14/electrocardiogram-36732_960_720.png';

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
        image={ficImg1}
      />
      <OwnedCard
        title="BrokenTime - Au-delà de l'horloge"
        resume="A la suite de son voyage temporel, la connexion avec Meadow se rétabli. Elle n'est plus dans la même dimension, ni confrontée aux mêmes problèmes..."
        image={ficImg2}
      />
      <OwnedCard
        title="BrokenTime - Zephyrium en folie"
        resume="Une nouvelle forme d'énergie se révèle au travers d'un sablier peu commun. La puissance qui en émane risque de faire courir votre protagoniste à sa perte. Prêt à l'aider ?"
        image={ficImg3}
      />
      <OwnedCard
        title="BrokenTime - Passage interdit"
        resume="Alors que les dimensions s'enchaînent, la connexion se fait de plus en plus difficile. Le temps semble céder sous le poids des voyages, et Meadow est sur le point d'en payer le prix."
        image={ficImg4}
      />
      <OwnedCard
        title="BrokenTime - Du mécanique au digital"
        resume="2075 - Paris. Ou le plus grand saut vers le passé pour notre protagoniste. Les mentalités sont différentes et la crainte règne. Il n'y a pas que des humains sur Terre, ni que des tendres..."
        image={ficImg5}
      />
      <OwnedCard
        title="BrokenTime - Ligne de vie"
        resume="Retenue au laboratoire d'Aperture, les choses s'accélèrent. Faites les bons choix pour que l'électrocardiogramme de Meadow ne soit pas sa dernière ligne droite."
        image={ficImg6}
      />
    </div>
  </div>
);

export default Profil;
