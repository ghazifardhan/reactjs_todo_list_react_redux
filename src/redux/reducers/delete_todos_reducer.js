import { deleteTodoTypes } from '../actions/delete_todos_action';

let deleteTodoInitialState = {
  type: deleteTodoTypes.DELETE_TODO,
  loading: false,
  result: null,
  error: null
}

export const deleteTodoReducer = (state = deleteTodoInitialState, action) => {
  switch (action.type) {
    case deleteTodoTypes.DELETE_TODO:
      return {
        type: action.type,
      };
    case deleteTodoTypes.DELETE_TODO_SUCCESS:
      return {
        type: action.type,
      };
    case deleteTodoTypes.DELETE_TODO_ERROR:
      return {
        type: action.type,
      };
    default:
      return state;
  }
}