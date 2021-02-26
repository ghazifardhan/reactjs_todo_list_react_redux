import { listTodoTypes } from '../actions/list_todos_action';

let listTodoInitialState = {
  type: listTodoTypes.LIST_TODO,
  loading: false,
  result: null,
  error: null
}

export const listTodoReducer = (state = listTodoInitialState, action) => {
  switch (action.type) {
    case listTodoTypes.LIST_TODO:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case listTodoTypes.LIST_TODO_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case listTodoTypes.LIST_TODO_ERROR:
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