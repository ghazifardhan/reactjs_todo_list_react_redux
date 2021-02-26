import { editTodoTypes } from '../actions/edit_todo_action';

let editTodoInitialState = {
  type: editTodoTypes.EDIT_TODO,
  loading: false,
  result: null,
  error: null
}

export const editTodoReducer = (state = editTodoInitialState, action) => {
  switch (action.type) {
    case editTodoTypes.EDIT_TODO:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case editTodoTypes.EDIT_TODO_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case editTodoTypes.EDIT_TODO_ERROR:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    default:
      return state;
  }
}