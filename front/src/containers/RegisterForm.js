import { connect } from 'react-redux';
import RegisterForm from '../components/Header/UserForm/RegisterForm';
import { alternateForms, registerSubmit, inputChange } from '../actions/user';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  pseudo: state.user.formData.pseudo,
  email: state.user.formData.email,
  password: state.user.formData.password,
  confirmpassword: state.user.formData.confirmpassword,
  passwordsClass: state.user.formData.password === state.user.formData.confirmpassword ? 'check' : 'times',
  isErrorDisplayed: state.user.isErrorDisplayed,
  isSuccessDisplayed: state.user.isSuccessDisplayed,
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
