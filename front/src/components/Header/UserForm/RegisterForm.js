import React from 'react';

const RegisterForm = ({ switchToLoginForm, pseudo, email, password, confirmpassword, inputChange, registerSubmit }) => (
  <form
    className="login__form"
    onSubmit={(evt) => {
      evt.preventDefault();
      registerSubmit();
    }}
  >
    <p className="form__label">Pseudo</p>
    <input onChange={(evt) => inputChange(evt.target.name, evt.target.value)} name="pseudo" className="form__input" value={pseudo} type="text" placeholder="Votre nom" />
    <p className="form__label">Email</p>
    <input onChange={(evt) => inputChange(evt.target.name, evt.target.value)} name="email" className="form__input" value={email} type="email" placeholder="Exemple@gmail.com" />
    <p htmlFor="password" className="form__label">Mot de passe</p>
    <input onChange={(evt) => inputChange(evt.target.name, evt.target.value)} name="password" className="form__input" value={password} type="password" placeholder="Votre mot de passe" />
    <p htmlFor="confirmpassword" className="form__label">Confirmer mot de passe</p>
    <input onChange={(evt) => inputChange(evt.target.name, evt.target.value)} name="confirmpassword" className="form__input" value={confirmpassword} type="password" placeholder="Confirmation du mot de passe" />
    <button type="submit" className="form__button">S'inscrire</button>
    <a
      className="form__link"
      onClick={() => {
        switchToLoginForm();
      }}
    >
      Se connecter
    </a>
  </form>
);

export default RegisterForm;
