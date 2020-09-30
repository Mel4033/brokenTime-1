import { connect } from 'react-redux';
import LoginForm from '../components/Header/UserForm/LoginForm';
import { alternateForms } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = null;

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchToRegisterForm: () => {
    dispatch(alternateForms());
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(LoginForm);
