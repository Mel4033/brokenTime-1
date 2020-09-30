import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import LoginForm from '../../../containers/LoginForm';
import RegisterForm from '../../../containers/RegisterForm';

// fa-times = X
// fa-power-off = Power button

const UserForm = ({ registerOpened, loginOpened, switchFormsDisplay }) => {
  // On détermine la classe que notre bouton doit avoir afin d'afficher une croix
  // ou un symbole de connexion.
  const buttonClass = registerOpened || loginOpened ? 'fas fa-times' : 'fas fa-power-off';

  return (
    <div className="login__container">
      <div>
        <button
          alt="none"
          type="button"
          className="menu__item menu__disconnect"
          onClick={() => {
            switchFormsDisplay();
          }}
        >
          <i className={buttonClass} />
        </button>
      </div>

      {/* On détermine si le RegisterForm ou le LoginForm doivent être affichés ou non selon */}
      {/* leur state. */}
      { registerOpened && <RegisterForm /> }
      { loginOpened && <LoginForm /> }
    </div>
  );
};

export default UserForm;
