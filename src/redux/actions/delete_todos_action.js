
import { todosRef } from "../../utils/firebase";

export const deleteTodoTypes = {
  DELETE_TODO: "DELETE_TODO",
  DELETE_TODO_SUCCESS: "DELETE_TODO_SUCCESS",
  DELETE_TODO_ERROR: "DELETE_TODO_ERROR",
}
export function deleteTodo(id) {
  return dispatch => {
    dispatch({
      type: deleteTodoTypes.DELETE_TODO,
    });

    todosRef.doc(id).delete()
      .then((res) => {
        dispatch({
          type: deleteTodoTypes.DELETE_TODO_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: deleteTodoTypes.DELETE_TODO_ERROR,
        });
      })
  }
}