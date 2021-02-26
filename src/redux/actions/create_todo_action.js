import { todosRef } from "../../utils/firebase";

export const TodoStatus = {
  DONE: "DONE",
  UNDONE: "UNDONE"
}

export const createTodoTypes = {
  CREATE_TODO: "CREATE_TODO",
  CREATE_TODO_SUCCESS: "CREATE_TODO_SUCCESS",
  CREATE_TODO_ERROR: "CREATE_TODO_ERROR",
}

export function initializeCreateTodo() {
  return dispatch => {
    dispatch({
      type: createTodoTypes.CREATE_TODO,
      result: null,
      loading: true,
      error: null
    });
  }
}

export function createTodo(username, header, description, imageUrl) {
  return dispatch => {
    dispatch({
      type: createTodoTypes.CREATE_TODO,
      result: null,
      loading: true,
      error: null
    });

    todosRef.add({
      username: username,
      header: header,
      description: description,
      status: TodoStatus.UNDONE,
      imageUrl: imageUrl,
      createdAt: Date.now(),
      updatedAt: null
    })
    .then((result) => {
      console.log(result);
      dispatch({
        type: createTodoTypes.CREATE_TODO_SUCCESS,
        result: result,
        loading: false,
        error: null
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: createTodoTypes.CREATE_TODO_ERROR,
        result: null,
        loading: false,
        error: err
      });
    })
  }
}