import React from 'react';
import { Button } from "antd";

function CreateTodoButton(props) {
  return (
    <div className="buttonContainer">
      <Button id="createTodoButton" onClick={(e) => {
        e.preventDefault();

        props.navigation.push({
          pathname: "/create_edit_todo",
          state: {
            isEdit: false
          }
        });
      }}>
        Create a ToDo
      </Button>
    </div>
  );
}

export default CreateTodoButton;