import { connect } from 'react-redux';
import RegisterForm from '../components/Header/UserForm/RegisterForm';
import { alternateForms, registerSubmit } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  nickname: state.user.input.nickname,
  email: state.user.input.email,
  password: state.user.input.password,
  confirmpassword: state.user.input.confirmpassword,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchToLoginForm: () => {
    dispatch(alternateForms());
  },
  registerSubmit: () => {
    dispatch(registerSubmit());
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(RegisterForm);
