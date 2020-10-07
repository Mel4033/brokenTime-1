import React from 'react';

const UserModifyCard = ({ userpicture, username, useremail, switchDisplay }) => (
  <div>
    <h2 className="profil__title">Mes informations (Modification active)</h2>
    <div className="profil__card">
      <div className="profil__informations">
        <div className="profil__picture">
          <img className="profil__picture--image" src={userpicture} alt="PictureProfile" />
        </div>
        <div className="profil__data">
          <div className="profil__data--item">
            <p className="profil__data--title">Nom d'utilisateur</p>
            <input className="profil__data--input" value={username} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Email associé</p>
            <input className="profil__data--input" value={useremail} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">URL d'image de profil</p>
            <input className="profil__data--input" value={userpicture} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Changer le mot de passe</p>
            <input className="profil__data--input" value={username} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Répéter le mot de passe</p>
            <input className="profil__data--input" value={username} />
          </div>
        </div>
      </div>
      <button onClick={() => {switchDisplay()}} type="button" className="profil__button profil__button-modify"><span className="profil__button--text">Appliquer</span></button>
    </div>
  </div>
);

export default UserModifyCard;
