import { connect } from 'react-redux';
import LoginForm from '../components/Header/UserForm/LoginForm';
import { alternateForms, loginSubmit, inputChange } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  email: state.user.formData.email,
  password: state.user.formData.password,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchToRegisterForm: () => {
    dispatch(alternateForms());
  },
  loginSubmit: () => {
    dispatch(loginSubmit());
  },
  inputChange: (name, input) => {
    const object = {
      [name]: input,
    };
    dispatch(inputChange(object));
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(LoginForm);
