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

const initialState = {
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
      return {
        ...state,
        currentUser: {
          pseudo: 'bobbyNight',
        },
        isErrorDisplayed: false,
        isSuccessDisplayed: true,
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
          pseudo: 'bobbyNight',
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
