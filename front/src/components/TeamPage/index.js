import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

const axel = 'https://cdn.discordapp.com/attachments/728258821297799279/765552098179416129/axel1.jpg';
const remi = 'https://cdn.discordapp.com/attachments/728258821297799279/765552208497737728/remi1.jpeg';
const vincent = 'https://cdn.discordapp.com/attachments/728258821297799279/765552142270201876/vincent1.png';
const melinda = 'https://cdn.discordapp.com/attachments/728258821297799279/765552142483456000/melinda2.jpg';

const teamPage = () => (
  <div className="team__page">
    <div className="team__melinda">
      <p className="p__name">Mélinda.D <i className="fab fa-symfony" /></p>
      <p className="p__describ"> Scrum Master <a href="https://github.com/Mel4033" alt="Github de Melinda"><i className="fab fa-github" /></a></p>
      <img src={melinda} alt="Melinda" className="img__profil" />
    </div>
    <div className="team__vincent">
      <p className="p__name">Vincent.A <i className="fab fa-symfony" /></p>
      <p className="p__describ"> Lead Dev Back <a href="https://github.com/Vincent-o" alt="Github de Vincent"><i className="fab fa-github" /></a></p>
      <img src={vincent} alt="Vincent" className="img__profil" />
    </div>
    <div className="team__axel">
      <p className="p__name">Axel.B <i className="fab fa-react 5x" /></p>
      <p className="p__describ">Product Owner & Git Master <a href="https://github.com/Axel-Baudain" alt="Github d'Axel"><i className="fab fa-github" /></a></p>
      <img src={axel} alt="Axel" className="img__profil" />

    </div>
    <div className="team__remi">
      <p className="p__name">Rémi.M <i className="fab fa-react 5x" /></p>
      <p className="p__describ">Lead Dev Front <a href="https://github.com/MorelRemi17" alt="Github de Rémi"><i className="fab fa-github" /></a></p>
      <img src={remi} alt="Rémi" className="img__profil" />
    </div>
  </div>
);

export default teamPage;