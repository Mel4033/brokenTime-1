import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { fetchLibrary } from '../../actions/library';
import './style-desktop.scss';
import './style-mobile.scss';

// Ici j'appelle les card que j'ai crée au préalable j'y incorpore le reste de mon html pour
// la recherche et mes titres ect et je dynamise le contenu de mes cards

const Library = ({ fetchLibrary,list}) => {

  console.log(fetchLibrary);
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
          className="searchInput">
        </input>
      </form>
    <div className="card">
      {
      // A la place de fetchLibrary, faire un .map sur l'élément du State
        list.map((cardObject) => (
          <Card
          // Manque une propriété "key"
            key={cardObject.id}
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

Library.propTypes = {
  title: PropTypes.string.isrequired,
  resume: PropTypes.string.isrequired,
  picture:PropTypes.object.isRequired,
};

export default Library;
