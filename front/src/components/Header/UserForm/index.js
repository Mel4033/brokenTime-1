import React from 'react';
import './style-desktop.scss';
import './style-mobile.scss';
import LoginForm from '../../../containers/LoginForm';
import RegisterForm from '../../../containers/RegisterForm';
import Disconnect from '../../../containers/Disconnect';

// fa-times = X
// fa-power-off = Power button

const UserForm = ({ registerOpened, loginOpened, switchFormsDisplay, disconnectButtonOpened }) => {
  // On détermine la classe que notre bouton doit avoir afin d'afficher une croix
  // ou un symbole de connexion.
  const buttonClass = registerOpened || loginOpened ? 'fas fa-times' : 'fas fa-power-off';

  return (
    <div className="login__container">
      <div className="login__panel-buttons">
        <button
          alt="none"
          type="button"
          className="menu__item menu__login-panel"
          onClick={() => {
            switchFormsDisplay();
          }}
        >
          <i className={`menu__login-panel-icon ${buttonClass}`} />
        </button>
        { disconnectButtonOpened && <Disconnect /> }
      </div>

      {/* On détermine quel élément doit être affiché ou non selon */}
      {/* le state et l'état de connexion */}
      { registerOpened && <RegisterForm /> }
      { loginOpened && <LoginForm /> }

    </div>
  );
};

export default UserForm;
