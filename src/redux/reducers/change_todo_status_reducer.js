import { changeTodoTypes } from '../actions/change_todo_status_action';

let changeTodoInitialState = {
  type: changeTodoTypes.CHANGE_TODO,
  loading: false,
  result: null,
  error: null
}

export const changeTodoReducer = (state = changeTodoInitialState, action) => {
  switch (action.type) {
    case changeTodoTypes.CHANGE_TODO:
      return {
        type: action.type,
      };
    case changeTodoTypes.CHANGE_TODO_SUCCESS:
      return {
        type: action.type,
      };
    case changeTodoTypes.CHANGE_TODO_ERROR:
      return {
        type: action.type,
      };
    default:
      return state;
  }
}