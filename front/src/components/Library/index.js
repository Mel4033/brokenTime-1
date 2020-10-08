import React from 'react';
import Card from './Card';
import './style-desktop.scss';
import './style-mobile.scss';

// Ici j'appelle les card que j'ai crée au préalable j'y incorpore le reste de mon html pour
// la recherche et mes titres ect et je dynamise le contenu de mes cards

const Library = ({ cards }) => (
  <div className="bibliotheque">
    <h1 className="menuTitle"> BROKEN TIME - La Bibliotheque </h1>
    <form className="searchForm">
      <input
        type="text"
        placeholder="Rechercher une fiction"
        className="searchInput"
      />
    </form>
    <div className="card">
      {
        cards.map((cardObject) => (
          <Card
            title={cardObject.title}
            resume={cardObject.resume}
            locked={cardObject.locked}
            thumbnail={cardObject.thumbnail}
          />
        ))
      }
    </div>
  </div>
);

export default Library;
