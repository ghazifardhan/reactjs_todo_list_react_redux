export const getMeTypes = {
  GET_ME: "GET_ME",
  GET_ME_SUCCESS: "GET_ME_SUCCESS",
  GET_ME_ERROR: "GET_ME_ERROR",
}

export function getMe() {
  return dispatch => {
    dispatch({
      type: getMeTypes.GET_ME,
      username: "",
      loading: true
    });

    var username = localStorage.getItem("username");

    if (username !== null && username !== "") {
      dispatch({
        type: getMeTypes.GET_ME_SUCCESS,
        username: username,
        loading: false,
      });
    } else {
      dispatch({
        type: getMeTypes.GET_ME_ERROR,
        username: "",
        loading: false,
      });
    }
  }
}