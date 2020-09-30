import { SWITCH_FORMS_DISPLAY, CHANGE_LOGIN_DISPLAY, INPUT_CHANGE, CHANGE_REGISTER_DISPLAY, LOGIN_ERROR, LOGIN_SUBMIT, LOGIN_SUCCESS } from '../actions/user';

const initialState = {
  loginFormDisplayed: false,
  registerFormDisplayed: false,
  input: {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTER_DISPLAY:
      return {
        ...state,
        loginFormDisplayed: !state.loginFormDisplayed,
        registerFormDisplayed: !state.registerFormDisplayed,
      };
    case CHANGE_LOGIN_DISPLAY:
      return {
        ...state,
        loginFormDisplayed: !state.loginFormDisplayed,
        registerFormDisplayed: !state.registerFormDisplayed,
      };
    case SWITCH_FORMS_DISPLAY:
      if (state.loginFormDisplayed || state.loginFormDisplayed) {
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
    default:
      return state;
  }
};

export default user;
