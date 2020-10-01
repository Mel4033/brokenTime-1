import { connect } from 'react-redux';
import RegisterForm from '../components/Header/UserForm/RegisterForm';
import { alternateForms, registerSubmit, inputChange } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  nickname: state.user.nickname,
  email: state.user.email,
  password: state.user.password,
  confirmpassword: state.user.confirmpassword,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  switchToLoginForm: () => {
    dispatch(alternateForms());
  },
  registerSubmit: () => {
    dispatch(registerSubmit());
  },
  inputChange: (name, value) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(RegisterForm);
