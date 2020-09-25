import React from 'react';
import './style.scss';

/* 
  Ici on va mettre en place notre footer avec texte et icone
  Il seras ensuite appellé dans notre index dans App pour pouvoir
  être affichée
*/
const Footer = () => (
  <div className="footer">
    <div className="footerfollow">Suivez nous !
      <icon className="fab fa-facebook-square" />
      <icon className="fab fa-instagram" />
      <icon className="fab fa-twitter-square" />
    </div>
    <div className="copyright">&copy; Copyright 2020</div>
    <div> Tous droits reservés.</div>
  </div>
);

export default Footer;
