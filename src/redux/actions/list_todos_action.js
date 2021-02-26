
import { todosRef } from "../../utils/firebase";

export const listTodoTypes = {
  LIST_TODO: "LIST_TODO",
  LIST_TODO_SUCCESS: "LIST_TODO_SUCCESS",
  LIST_TODO_ERROR: "LIST_TODO_ERROR",
}

export const SortBy = {
  ALPHABETICAL: "header",
  CREATEDAT: "createdAt"
}

export function initializeCreateTodo() {
  return dispatch => {
    dispatch({
      type: listTodoTypes.LIST_TODO,
      result: null,
      loading: true,
      error: null
    });
  }
}

export function listTodo(username, sortBy, ascDesc) {
  return dispatch => {
    dispatch({
      type: listTodoTypes.LIST_TODO,
      result: null,
      loading: true,
      error: null
    });

    todosRef.orderBy(sortBy, ascDesc)
      .onSnapshot((result) => {
        console.log(result);

        var datas = [];
        result.forEach((item) => {
          datas.push({
            id: item.id,
            ...item.data()
          });
        })

        dispatch({
          type: listTodoTypes.LIST_TODO_SUCCESS,
          result: datas,
          loading: false,
          error: null
        });
      });
  }
}

export function deleteTodosById(id) {
  todosRef.doc(id).delete();
}