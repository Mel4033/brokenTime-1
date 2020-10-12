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
  PROFILE_INPUT_CHANGE,
  IS_LOADING,
  NOT_LOADING,
} from '../actions/user';

const cookies = new Cookies();

const initialState = {
  isLoading: false,
  disconnectButtonDisplayed: false,
  loginFormDisplayed: false,
  registerFormDisplayed: false,
  isErrorDisplayed: false,
  isSuccessDisplayed: false,
  formData: {
    pseudo: '',
    email: '',
    password: '',
    confirmpassword: '',
  },
  isLogged: false,
  currentUser: {},
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };
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
    case PROFILE_INPUT_CHANGE:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        formData: {
          pseudo: '',
          email: '',
          password: '',
          confirmpassword: '',
        },
        disconnectButtonDisplayed: false,
        loginFormDisplayed: false,
        registerFormDisplayed: false,
        isLogged: false,
      };
    case CONNECT_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
          password: '',
          confirmpassword: '',
        },
        isLogged: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        currentUser: {},
        isErrorDisplayed: true,
        isSuccessDisplayed: false,
        isLogged: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isErrorDisplayed: false,
        disconnectButtonDisplayed: false,
        loginFormDisplayed: false,
        registerFormDisplayed: false,
        isLogged: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        currentUser: {},
        isErrorDisplayed: true,
        isSuccessDisplayed: false,
        isLogged: false,
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
        isLogged: false,
      };
    default:
      return state;
  }
};

export default user;
