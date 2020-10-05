/*
import React from 'react';
import './style.scss';
import Proptypes from 'prop-types';

  // TODO : Mettre en place le logo loupe dans la barre de recherche
  // TODO : Refaire la barre de recherche 
  // TODO : Finir les cases 
  // TODO : Voir le probléme avec le footer ( probléme de position )
  // TODO : Regler ecart entre search bar et cards
  // TODO : Rename bibliotheque en library
  // TODO : Alligner le button play et l'icone
  // TODO : Réussir a mettre l'image en fond et non sur le texte
  // TODO : Revoir l'indentation
  // TODO : Regler les classes locked et unlocked
  // TODO : Dynamiser une classe.
  // TODO : Revoir l'allignement des cards ( Desktop )
  // TODO : Revoir l'allignement des cards ( Mobile )
  // TODO : Faire une fausse base de données pour faire les middleware ect.
  // TODO : Dynamiser avec la fausse BDD
  // TODO : Faire deux style css
  // TODO : Au survol faire apparaitre un button en cachant un peu le fond.

*/

import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './style-desktop.scss';
import './style-mobile.scss';

// Ici j'appelle les card que j'ai crée au préalable j'y incorpore le reste de mon html pour
// la recherche et mes titres ect et je dynamise le contenu de mes cards

const Library = ({ cards }) => {
  console.log(cards);

  return (
    <div className="bibliotheque">
    <h1 className="menuTitle"> BROKEN TIME - La Bibliotheque </h1>
      <form className="searchForm">
        <input 
          type="text" 
          placeholder="Rechercher une fiction"
          className="searchInput">
        </input>
      </form>
    <div className="card">
      {
        cards.map((cardObject) => (
          <Card
            title={cardObject.title}
            resume={cardObject.resume}
            locked={cardObject.locked}
            picture={cardObject.pictureCard}
          />
        ))
      }
    </div>
    </div>
  );
};

Library.propTypes = {
  title: PropTypes.string.isrequired,
  resume: PropTypes.string.isrequired,
  picture:PropTypes.object.isRequired,
};

export default Library;
