import Cookies from 'universal-cookie';

import {
  ALTERNATE_FORMS,
  SWITCH_FORMS_DISPLAY,
  INPUT_CHANGE,
  DISCONNECT_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  CONNECT_USER,
} from '../actions/user';

const cookies = new Cookies();

const initialState = {
  disconnectButtonDisplayed: false,
  loginFormDisplayed: false,
  registerFormDisplayed: false,
  isErrorDisplayed: false,
  isSuccessDisplayed: false,
  formData: {
    pseudo: '',
    email: 'testAPI@gmail.com',
    password: 'testAPI',
    confirmpassword: '',
  },
  currentUser: {},
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALTERNATE_FORMS:
      return {
        ...state,
        loginFormDisplayed: !state.loginFormDisplayed,
        registerFormDisplayed: !state.registerFormDisplayed,
        isErrorDisplayed: false,
        isSuccessDisplayed: false,
      };
    case SWITCH_FORMS_DISPLAY:
      if (Object.keys(state.currentUser).length > 0) {
        return {
          ...state,
          disconnectButtonDisplayed: !state.disconnectButtonDisplayed,
          loginFormDisplayed: false,
          registerFormDisplayed: false,
          isErrorDisplayed: false,
          isSuccessDisplayed: false,

        };
      }
      if (state.loginFormDisplayed || state.registerFormDisplayed) {
        return {
          ...state,
          loginFormDisplayed: false,
          registerFormDisplayed: false,
          isErrorDisplayed: false,
          isSuccessDisplayed: false,
        };
      }
      return {
        ...state,
        loginFormDisplayed: true,
        isErrorDisplayed: false,
        isSuccessDisplayed: false,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isErrorDisplayed: false,
        isSuccessDisplayed: true,
        formData: {
          pseudo: '',
          email: '',
          password: '',
          confirmpassword: '',
        },
      };
    case CONNECT_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        currentUser: {},
        isErrorDisplayed: true,
        isSuccessDisplayed: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isErrorDisplayed: false,
        isSuccessDisplayed: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        currentUser: {},
        isErrorDisplayed: true,
        isSuccessDisplayed: false,
      };
    case DISCONNECT_USER:
      cookies.remove('token');
      return {
        ...state,
        currentUser: {},
        disconnectButtonDisplayed: false,
        loginFormDisplayed: false,
        registerFormDisplayed: false,
        isErrorDisplayed: false,
        isSuccessDisplayed: false,
      };
    default:
      return state;
  }
};

export default user;
