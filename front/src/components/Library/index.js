import React, { useEffect } from 'react';
import Card from './Card';
import './style-desktop.scss';
import './style-mobile.scss';

// Ici j'appelle les card que j'ai crée au préalable j'y incorpore le reste de mon html pour
// la recherche et mes titres ect et je dynamise le contenu de mes cards

const Library = ({ fetchLibrary, list }) => {
  useEffect(() => {
    fetchLibrary();
  }, []);

  return (
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
          // A la place de fetchLibrary, faire un .map sur l'élément du State
          list.map((cardObject) => (
            <Card
              key={cardObject.id}
              id={cardObject.id}
              title={cardObject.title}
              resume={cardObject.summary}
              locked={cardObject.locked}
              thumbnail={cardObject.picture}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Library;
