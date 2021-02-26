import { getMeTypes } from '../actions/get_me_action';

let getMeInitialState = {
  type: getMeTypes.GET_ME,
  loading: false,
  username: ""
}

export const getMeReducer = (state = getMeInitialState, action) => {
  switch (action.type) {
    case getMeTypes.GET_ME:
      return {
        type: action.type,
        loading: action.loading,
        username: action.username
      };
    case getMeTypes.GET_ME_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        username: action.username
      };
    case getMeTypes.GET_ME_ERROR:
      return {
        type: action.type,
        loading: action.loading,
        username: action.username
      };
    default:
      return state;
  }
}