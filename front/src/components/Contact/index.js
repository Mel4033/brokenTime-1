import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';
import Video from './video';

const Contact = () => (
    <div className="contact">
        <Video />
        <h1 className="titreContact">Besoin d'un renseignement ? Une idée à soumettre ? Contactez-nous ! </h1>
            <div className="cardContact">
                <div className="intelligence">renseignement</div>
                <div className="idea">idée</div>
                <div className="email">Contact</div>
            </div>
    </div>
);

export default Contact;
