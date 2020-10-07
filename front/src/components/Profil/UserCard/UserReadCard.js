import React from 'react';

const UserReadCard = ({ userpicture, username, useremail, switchDisplay }) => (
  <div>
    <h2 className="profil__title">Mes informations</h2>
    <div className="profil__card">
      <div className="profil__informations">
        <div className="profil__picture">
          <img className="profil__picture--image" src={userpicture} alt="PictureProfile" />
        </div>
        <div className="profil__data">
          <div className="profil__data--item">
            <p className="profil__data--title">Nom d'utilisateur</p>
            <p className="profil__data--value">{username}</p>
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Email associé</p>
            <p className="profil__data--value">{useremail}</p>
          </div>
        </div>
      </div>
      <button onClick={() => {switchDisplay()}} type="button" className="profil__button"><span className="profil__button--text">Modifier</span></button>
    </div>
  </div>
);

export default UserReadCard;
