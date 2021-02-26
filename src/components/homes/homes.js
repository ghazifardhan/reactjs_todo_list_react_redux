import { Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe, getMeTypes } from "../../redux/actions/get_me_action";
import './homes.scss';
import { withRouter} from 'react-router-dom';
import { listTodo, listTodoTypes, SortBy } from "../../redux/actions/list_todos_action";
import TodoCard from './widgets/todo_card';
import CreateTodoButton from "./widgets/create_todo_button";
import LogoutButton from "./widgets/logout_button";

function Homes(props) {

  const getMeState = useSelector(state => state.getMeReducer);
  const listTodoState = useSelector(state => state.listTodoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [])

  useEffect(() => {
    console.log(getMeState);
    if (getMeState.type === getMeTypes.GET_ME_SUCCESS) {
      dispatch(listTodo(getMeState.username, SortBy.CREATEDAT, "desc"));
    }
  }, [getMeState])

  useEffect(() => {
    console.log(listTodoState);
  }, [listTodoState])

  return (
    <div className="homeContainer">
      <LogoutButton/>
      <CreateTodoButton
        navigation={props.history}
      />

      <div className="divider">
        <h1>Hello: {getMeState?.username}</h1>

        <Select
          placeholder="Sort by"
          onChange={(value) =>{
            var ascDesc = value === SortBy.ALPHABETICAL ? "asc" : "desc";
            dispatch(listTodo(getMeState.username, value, ascDesc));
          }}
          className="option"
        >
          <Select.Option value={SortBy.ALPHABETICAL}>Alphabetical</Select.Option>
          <Select.Option value={SortBy.CREATEDAT}>Created At</Select.Option>
        </Select>

        <div style={{ margin: 10 }}/>

        {
          listTodoState.type === listTodoTypes.LIST_TODO_SUCCESS ?
          listTodoState.result.length > 0 
            ? listTodoState.result.map((item, index) => {
              return <TodoCard 
                key={index} 
                item={item}
                navigation={props.history}
              />  
            })
            : <div><h4>Empty</h4></div>
          : <div><h4>Loading</h4></div>
        }
      </div>
    </div>
  );

}

export default withRouter(Homes);