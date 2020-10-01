import {
  ALTERNATE_FORMS,
  SWITCH_FORMS_DISPLAY,
  INPUT_CHANGE,
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
  input: {
    nickname: null,
    email: null,
    password: null,
    confirmPassword: null,
  },
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
      return state;
    default:
      return state;
  }
};

export default user;
