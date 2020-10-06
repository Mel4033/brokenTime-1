import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import Remi from '../../assets/images/remi1.jpeg';
import Axel from '../../assets/images/axel1.jpg';
import Vincent from '../../assets/images/vincent1.png';
import Melinda from '../../assets/images/melinda2.jpg';


const teamPage = () => (
    <div className="team__page">
        <div className="team__melinda">
            <p className="p__name">Mélinda.D</p>
            <p className="p__describ"> Scrum Master</p>
            <img src={`${Melinda}`} alt="Melinda" className="img__profil"/>
        </div>
        <div className="team__vincent">
            <p className="p__name">Vincent.A</p>
            <p className="p__describ"> Lead Dev Back</p>
            <img src={`${Vincent}`} alt="Vincent" className="img__profil"/>
        </div>
        <div className="team__axel">
            <p className="p__name">Axel.B</p>
            <p className="p__describ">Product Owner & Git Master</p>
            <img src={`${Axel}`} alt="Axel" className="img__profil"/>
        </div>
        <div className="team__remi">
            <p className="p__name">Rémi.M</p>
            <p className="p__describ">Lead Dev Front</p>
            <img src={`${Remi}`} alt="Rémi" className="img__profil"/>
        </div>
    </div>
);

export default teamPage;