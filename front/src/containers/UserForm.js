import { connect } from 'react-redux';
import UserForm from '../components/Header/UserForm';
import { switchFormsDisplay } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  disconnectButtonOpened: state.user.disconnectButtonDisplayed,
  loginOpened: state.user.loginFormDisplayed,
  registerOpened: state.user.registerFormDisplayed,
  isUserConnected: state.user.currentUser === {},
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchFormsDisplay: () => {
    dispatch(switchFormsDisplay());
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(UserForm);
