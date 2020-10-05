import {
  ALTERNATE_FORMS,
  SWITCH_FORMS_DISPLAY,
  INPUT_CHANGE,
  DISCONNECT_USER,
  LOGIN_ERROR,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
} from '../actions/user';

const initialState = {
  loginFormDisplayed: false,
  registerFormDisplayed: false,
  formData: {
    pseudo: '',
    email: 'Bobby.night@gmail.com',
    password: 'bobby',
    confirmpassword: '',
  },
  currentUser: {},
};

// Contrôle la correspondance entre le mot de passe saisi et le vérificateur.
const passwordMatchWithConfirm = (password, confirmation) => {
  if (password === confirmation) {
    return true;
  }
  return false;
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALTERNATE_FORMS:
      return {
        ...state,
        loginFormDisplayed: !state.loginFormDisplayed,
        registerFormDisplayed: !state.registerFormDisplayed,
      };
    case SWITCH_FORMS_DISPLAY:
      if (state.loginFormDisplayed || state.registerFormDisplayed) {
        return {
          ...state,
          loginFormDisplayed: false,
          registerFormDisplayed: false,
        };
      }
      return {
        ...state,
        loginFormDisplayed: true,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case DISCONNECT_USER:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default user;
