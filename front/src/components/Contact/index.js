import React from 'react';
import { Link } from 'react-router-dom';
import './style-mobile.scss';
import './style-desktop.scss';

const Contact = () => (
  <div className="contact">
    <h1 className="titreContact">Besoin d'un renseignement ? Une idée à soumettre ? Contactez-nous ! </h1>
    <div className="textCard">
      <div>Renseignements</div>
      <div>Idée</div>
      <div>Contact</div>
    </div>
    <div className="cardContact">
      <Link to="/ContactForm" className="intelligence">
        <p className="cardContactText">Renseignements</p>
      </Link>
      <Link to="/ContactForm" className="idea">
        <p className="cardContactText">Idée</p>
      </Link>
      <Link to="/ContactForm" className="email">
        <p className="cardContactText">Contact</p>
      </Link>
    </div>
  </div>
);

export default Contact;
