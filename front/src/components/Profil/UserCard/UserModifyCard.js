import React from 'react';

const UserModifyCard = ({ userpicture, username, useremail, userpassword, userconfirmpassword, switchDisplay, profileInputChange, passwordsClasses, submitModifiedProfile }) => (
  <div>
    <h2 className="profil__title">Mes informations (Modification active)</h2>
    <div className="profil__card">
      <div className="profil__informations">
        <div className="profil__picture">
          <img className="profil__picture--image profil__picture--image-modify" src={userpicture} alt="PictureProfile" />
        </div>
        <div className="profil__data">
          <div className="profil__data--item">
            <p className="profil__data--title">Nom d'utilisateur</p>
            <input onChange={(evt) => { profileInputChange(evt.target.name, evt.target.value) }} className="profil__data--input" name="pseudo" required value={username} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Email associé</p>
            <input onChange={(evt) => { profileInputChange(evt.target.name, evt.target.value) }} className="profil__data--input" name="email" required value={useremail} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">URL d'image de profil</p>
            <input onChange={(evt) => { profileInputChange(evt.target.name, evt.target.value) }} className="profil__data--input" name="picture" value={userpicture} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Changer le mot de passe <i className={`fas fa-${passwordsClasses} confirmInputs`} /></p>
            <input onChange={(evt) => { profileInputChange(evt.target.name, evt.target.value) }} className="profil__data--input" name="password" value={userpassword} />
          </div>
          <div className="profil__data--item">
            <p className="profil__data--title">Répéter le mot de passe <i className={`fas fa-${passwordsClasses} confirmInputs`} /></p>
            <input onChange={(evt) => { profileInputChange(evt.target.name, evt.target.value) }} className="profil__data--input" name="confirmpassword" value={userconfirmpassword} />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          submitModifiedProfile();
          switchDisplay();
        }}
        type="button"
        className="profil__button profil__button-modify"
      >
        <span className="profil__button--text">Appliquer</span>
      </button>
    </div>
  </div>
);

export default UserModifyCard;
