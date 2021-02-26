import { createTodoTypes } from '../actions/create_todo_action';

let createTodoInitialState = {
  type: createTodoTypes.CREATE_TODO,
  loading: false,
  result: null,
  error: null
}

export const createTodoReducer = (state = createTodoInitialState, action) => {
  switch (action.type) {
    case createTodoTypes.CREATE_TODO:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case createTodoTypes.CREATE_TODO_SUCCESS:
      return {
        type: action.type,
        loading: action.loading,
        result: action.result,
        error: action.error,
      };
    case createTodoTypes.CREATE_TODO_ERROR:
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