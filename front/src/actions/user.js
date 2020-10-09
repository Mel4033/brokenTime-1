export const INPUT_CHANGE = 'INPUT_CHANGE';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const CONNECT_USER = 'CONNECT_USER';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const ALTERNATE_FORMS = 'ALTERNATE_FORMS';
export const SWITCH_FORMS_DISPLAY = 'SWITCH_FORMS_DISPLAY';
export const CHECK_AUTH = 'CHECK_AUTH';
export const PROFILE_INPUT_CHANGE = 'PROFILE_INPUT_CHANGE';
export const SUBMIT_MODIFIED_PROFILE = 'SUBMIT_MODIFIED_PROFILE';
export const IS_LOADING = 'IS_LOADING';
export const NOT_LOADING = 'NOT_LOADING';

// ============================ Action creators ============================
export const isLoading = () => ({
  type: IS_LOADING,
});

export const notLoading = () => ({
  type: NOT_LOADING,
});

export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const connectUser = (payload) => ({
  type: CONNECT_USER,
  payload,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const registerSubmit = () => ({
  type: REGISTER_SUBMIT,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

export const alternateForms = () => ({
  type: ALTERNATE_FORMS,
});

export const switchFormsDisplay = () => ({
  type: SWITCH_FORMS_DISPLAY,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const profileInputChange = (payload) => ({
  type: PROFILE_INPUT_CHANGE,
  payload,
});

export const submitModifiedProfile = () => ({
  type: SUBMIT_MODIFIED_PROFILE,
});
