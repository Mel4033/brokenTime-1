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
  TODO : Au survol faire apparaitre un button en cachant un peu le fond.



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
            <p className="resume resume-unlocked">Je vais ici vous faire un court     résumé de la fiction que nous allons essayer de vous vendre très chère    pour ne plus avoir a travailler par la suite et se la couler douce en   vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          
            <p className="resume resume-unlocked">Je vais ici vous faire un court     résumé de la fiction que nous allons essayer de vous vendre très chère    pour ne plus avoir a travailler par la suite et se la couler douce en   vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>

      <div className="cardUnit">
        <h4 className="fictionTitle">titre de fiction</h4>
          <p className="resume resume-locked">Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.</p>
      </div>
    </div>
  </div>

);

export default Library;
*/

import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './style-desktop.scss';
import './style-mobile.scss';

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
