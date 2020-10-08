import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import { Typewriter } from 'react-typewriting-effect';

const NotFound = () => (
  <div className="errorpage">
    <div className="errorpage__header">
      <h1 className="errorpage__title">404</h1>
      <h2 className="errorpage__subtitle">La page recherchée n'a pas été trouvée.</h2>
    </div>
    <div className="errorpage__livechat">
      <p className="errorpage__text">
        <Typewriter string="Fin de la transmission. Communications interrompues. Votre dernier choix est décisif." stopBlinkinOnComplete delay={30} cursor="|" />
      </p>
      <div className="livechat__choices">
        <Link to="/"><input className="livechat__choices--item" type="button" value="[Revenir sur la page d'accueil]" /></Link>
        <input className="livechat__choices--item" type="button" value="[Bouffer du f0f à la pelle]" />
      </div>
    </div>
  </div>
);

export default NotFound;
