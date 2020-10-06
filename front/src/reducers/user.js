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
} from '../actions/user';

const cookies = new Cookies();

const initialState = {
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
        // TODO : Zone de traitement à revoir. Les données reçues sont-elles sous le bon format ?
        currentUser: action.payload,
        isErrorDisplayed: false,
        isSuccessDisplayed: true,
        formData: {
          pseudo: '',
          email: '',
          password: '',
          confirmpassword: '',
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
        currentUser: {
          pseudo: state.formData.pseudo,
          email: state.formData.email,
        },
        formData: {
          pseudo: '',
          email: '',
          password: '',
          confirmpassword: '',
        },
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
        isErrorDisplayed: false,
        isSuccessDisplayed: false,
      };
    default:
      return state;
  }
};

export default user;
