
import { todosRef } from "../../utils/firebase";
import { TodoStatus } from "./create_todo_action";

export const changeTodoTypes = {
  CHANGE_TODO: "CHANGE_TODO",
  CHANGE_TODO_SUCCESS: "CHANGE_TODO_SUCCESS",
  CHANGE_TODO_ERROR: "CHANGE_TODO_ERROR",
}
export function changeTodo(item) {
  return dispatch => {
    dispatch({
      type: changeTodoTypes.CHANGE_TODO,
    });

    todosRef.doc(item.id).update({
      status: item.status === TodoStatus.DONE ? TodoStatus.UNDONE : TodoStatus.DONE
    })
      .then((res) => {
        dispatch({
          type: changeTodoTypes.CHANGE_TODO_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: changeTodoTypes.CHANGE_TODO_ERROR,
        });
      })
  }
}