import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './style-desktop.scss';
import './style-mobile.scss';

// Ici j'appelle les card que j'ai crée au préalable j'y incorpore le reste de mon html pour
// la recherche et mes titres et je dynamise le contenu de mes cards

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
};

export default Library;
