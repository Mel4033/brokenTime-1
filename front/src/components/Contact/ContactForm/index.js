import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';


const ContactForm = () => (
  <form className="contactForm">
    <h2 className="titleContact"> Formulaire : </h2>
    <p className="introText">On a quand même besoin de savoir qui vous êtes : </p>
    <input type="text" className="nameContact" placeholder="Votre nom" />
    <input type="text" className="firstNameContact" placeholder="Votre prénom" />
    <input type="email" className="inputMail" placeholder="Votre email" />
    <p className="introText"> Et ce que vous voulez nous dire :</p>
    <textarea className="text" placeholder="Nous vous écoutons..." />
    <button type="submit" className="contactFormButon">Envoyez</button>
  </form>
);

export default ContactForm;
