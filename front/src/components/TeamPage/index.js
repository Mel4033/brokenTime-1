import React from 'react';
import { Link } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';

const teamPage = () => (
    <div className="team__page">
        <div className="team__melinda">
            <p className="p__name">Mélinda.D <i class="fab fa-symfony"></i></p>
            <p className="p__describ"> Scrum Master <a href="https://github.com/Mel4033"><i class="fab fa-github"></i></a></p>
            <img src= 'https://cdn.discordapp.com/attachments/728258821297799279/765552142483456000/melinda2.jpg' alt="Melinda" className="img__profil"/>
        </div>
        <div className="team__vincent">
            <p className="p__name">Vincent.A <i class="fab fa-symfony"></i></p>
            <p className="p__describ"> Lead Dev Back <a href="https://github.com/Vincent-o"><i class="fab fa-github"></i></a></p>
            <img src='https://cdn.discordapp.com/attachments/728258821297799279/765552142270201876/vincent1.png' alt="Vincent" className="img__profil"/>
        </div>
        <div className="team__axel">
            <p className="p__name">Axel.B <i class="fab fa-react 5x"></i></p>
            <p className="p__describ">Product Owner & Git Master <a href="https://github.com/Axel-Baudain"><i class="fab fa-github"></i></a></p>
            <img src='https://cdn.discordapp.com/attachments/728258821297799279/765552098179416129/axel1.jpg' alt="Axel" className="img__profil"/>
            
        </div>
        <div className="team__remi">
            <p className="p__name">Rémi.M <i class="fab fa-react 5x"></i></p>
            <p className="p__describ">Lead Dev Front <a href="https://github.com/MorelRemi17"><i class="fab fa-github"></i></a></p>
            <img src= 'https://cdn.discordapp.com/attachments/728258821297799279/765552208497737728/remi1.jpeg' alt="Rémi" className="img__profil"/>
        </div>
    </div>
);

export default teamPage;