import { loginTypes } from '../actions/auth_action';

let authInitialState = {
  type: loginTypes.AUTH_LOGIN,
  loading: false,
  authorized: false
}

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case loginTypes.AUTH_LOGIN:
      return {
        type: action.type,
        loading: action.loading,
        authorized: action.authorized
      };
    case loginTypes.AUTH_LOGIN_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        authorized: action.authorized
      };
    case loginTypes.AUTH_LOGIN_ERROR:
      return {
        type: action.type,
        loading: action.loading,
        authorized: action.authorized
      };
    default:
      return state;
  }
}