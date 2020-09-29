import React from 'react';
import logoSearch from '../../assets/images/loupe.png';
import './style.scss';

/*

  // TODO : Mettre en place le logo loupe dans la barre de recherche
  // TODO : Refaire la barre de recherche 
  // TODO : Finir les cases 
  // TODO : Voir le probléme avec le footer ( probléme de position )
  // TODO : Regler ecart entre search bar et cards
  // TODO : Rename bibliotheque en library
  // TODO : Alligner le button play et l'icone
  TODO : Revoir l'indentation
  TODO : Réussir a mettre l'image en fond et non sur le texte
  TODO : Regler les classes locked et unlocked
*/

const Library = () => (

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
    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="unlocked">
      <button className="play">Jouer</button>
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="unlocked">
      <button className="play">Jouer</button>
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>

    <div className="cardUnit">
      <h4 className="fictionTitle">titre de fiction</h4>
      <div className="locked">
        <p className="resume">Je vais ici vous faire un court résumé de la fiction que nous allons essayer de vous vendre très chère pour ne plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>


    </div>
  </div>
);

export default Library;