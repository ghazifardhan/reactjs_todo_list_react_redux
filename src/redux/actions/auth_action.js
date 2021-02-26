export const loginTypes = {
  AUTH_LOGIN: "AUTH_LOGIN",
  AUTH_LOGIN_SUCCESS: "AUTH_LOGIN_SUCCESS",
  AUTH_LOGIN_ERROR: "AUTH_LOGIN_ERROR",
}

export function checkIsLoggedIn() {
  return dispatch => {
    dispatch({
      type: loginTypes.AUTH_LOGIN,
      authorized: false,
      loading: true
    });

    var username = localStorage.getItem("username");

    if (username !== null && username !== "") {
      dispatch({
        type: loginTypes.AUTH_LOGIN_SUCCESS,
        authorized: true,
        loading: false,
      });
    } else {
      dispatch({
        type: loginTypes.AUTH_LOGIN_ERROR,
        authorized: false,
        loading: false,
      });
    }
  }
}

export function login(username) {
  return dispatch => {
    dispatch({
      type: loginTypes.AUTH_LOGIN,
      authorized: false,
      loading: true,
    });
    
    // save username to localStorage;
    localStorage.setItem("username", username);

    // set authorized to true
    dispatch({
      type: loginTypes.AUTH_LOGIN_SUCCESS,
      authorized: true,
      loading: false,
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("username");
    // set authorized to true
    dispatch({
      type: loginTypes.AUTH_LOGIN_ERROR,
      authorized: false,
      loading: false,
    });
  }
}