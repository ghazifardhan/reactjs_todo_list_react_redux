import { todosRef } from "../../utils/firebase";

export const editTodoTypes = {
  EDIT_TODO: "EDIT_TODO",
  EDIT_TODO_SUCCESS: "EDIT_TODO_SUCCESS",
  EDIT_TODO_ERROR: "EDIT_TODO_ERROR",
}

export function initializeEditTodo() {
  return dispatch => {
    dispatch({
      type: editTodoTypes.EDIT_TODO,
      result: null,
      loading: true,
      error: null
    });
  }
}

export function editTodo(id, header, description, imageUrl) {
  return dispatch => {
    dispatch({
      type: editTodoTypes.EDIT_TODO,
      result: null,
      loading: true,
      error: null
    });

    todosRef.doc(id).update({
      header: header,
      description: description,
      imageUrl: imageUrl,
      updatedAt: Date.now()
    })
    .then((result) => {
      console.log(result);
      dispatch({
        type: editTodoTypes.EDIT_TODO_SUCCESS,
        result: result,
        loading: false,
        error: null
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: editTodoTypes.EDIT_TODO_ERROR,
        result: null,
        loading: false,
        error: err
      });
    })
  }
}