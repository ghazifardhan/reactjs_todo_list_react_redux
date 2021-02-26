import { combineReducers } from "redux";
import {
  authReducer
} from './auth_reducer';
import {
  getMeReducer
} from './get_me_reducer';
import {
  uploadImageReducer
} from './upload_image_reducer';
import {
  createTodoReducer
} from './create_todo_reducer';
import {
  listTodoReducer
} from './list_todos_reducer';
import {
  deleteTodoReducer
} from './delete_todos_reducer';
import {
  changeTodoReducer
} from './change_todo_status_reducer';
import {
  editTodoReducer
} from './edit_todo_reducer';

const rootReducer = combineReducers({
  authReducer,
  getMeReducer,
  uploadImageReducer,
  createTodoReducer,
  listTodoReducer,
  deleteTodoReducer,
  changeTodoReducer,
  editTodoReducer
});

export default rootReducer;