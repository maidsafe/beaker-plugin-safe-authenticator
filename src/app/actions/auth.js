import { setUserAuthorised } from '../utils';

export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';
export const SET_CREATE_ACC_NAV_POS = 'SET_CREATE_ACC_NAV_POS';
export const SET_SECRET_STRENGTH = 'SET_SECRET_STRENGTH';
export const SET_PASSWORD_STRENGTH = 'SET_PASSWORD_STRENGTH';
export const SET_ACC_SECRET = 'SET_ACC_SECRET';
export const CLEAR_ACC_SECRET = 'CLEAR_ACC_SECRET';
export const SET_ACC_PASSWORD = 'SET_ACC_PASSWORD';
export const CLEAR_ACC_PASSWORD = 'CLEAR_ACC_PASSWORD';
export const SET_AUTH_LOADER = 'SET_AUTH_LOADER';
export const CLEAR_AUTH_LOADER = 'CLEAR_AUTH_LOADER';
export const CREATE_ACC_SUCCESS = 'CREATE_ACC_SUCCESS';
export const CREATE_ACC_ERROR = 'CREATE_ACC_ERROR';

const createAccSuccess = (payload) => ({
  type: CREATE_ACC_SUCCESS,
  payload
});

const createAccError = (error) => ({
  type: CREATE_ACC_ERROR,
  error
});

export const setCreateAccNavPos = (pos) => (
  {
    type: SET_CREATE_ACC_NAV_POS,
    position: pos
  }
);

export const setSecretStrength = (val) => (
  {
    type: SET_SECRET_STRENGTH,
    strength: val
  }
);

export const setPasswordStrength = (val) => (
  {
    type: SET_PASSWORD_STRENGTH,
    strength: val
  }
);

export const setError = (err) => ({
  type: SET_AUTH_ERROR,
  error: err
});

export const clearError = () => ({
  type: CLEAR_AUTH_ERROR
});

export const setAccSecret = (secret) => ({
  type: SET_ACC_SECRET,
  secret
});

export const clearAccSecret = () => ({
  type: CLEAR_ACC_SECRET
});

export const setAccPassword = (password) => ({
  type: SET_ACC_PASSWORD,
  password
});

export const clearAccPassword = () => ({
  type: CLEAR_ACC_PASSWORD
});

export const setAuthLoader = () => ({
  type: SET_AUTH_LOADER
});

export const clearAuthLoader = () => ({
  type: CLEAR_AUTH_LOADER
});

export const createAccount = (secret, password) => (
  (dispatch) => {
    if (!window.safeAuthenticator) {
      return dispatch(clearAuthLoader());
    }
    window.safeAuthenticator.createAccount(secret, password)
      .then((res) => {
        setUserAuthorised(true);
        dispatch(clearAuthLoader());
        return dispatch(createAccSuccess(res));
      })
      .catch((err) => {
        setUserAuthorised(false);
        dispatch(clearAuthLoader());
        return dispatch(createAccError(err));
      });
  }
);