import { connect } from 'react-redux';
import LoginForm from '../components/Header/UserForm/LoginForm';
import { alternateForms, loginSubmit } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  email: state.user.input.email,
  password: state.user.input.password,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchToRegisterForm: () => {
    dispatch(alternateForms());
  },
  loginSubmit: () => {
    dispatch(loginSubmit());
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(LoginForm);
