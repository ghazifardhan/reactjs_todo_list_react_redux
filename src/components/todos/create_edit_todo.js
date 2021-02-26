import { Form, Input, Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../redux/actions/get_me_action";
import { withRouter} from 'react-router-dom';
import { uploadImage, uploadImageInit } from "../../redux/actions/upload_image_action";
import { createTodo, createTodoTypes, initializeCreateTodo } from "../../redux/actions/create_todo_action";
import { editTodo, editTodoTypes, initializeEditTodo } from "../../redux/actions/edit_todo_action";
import CreateTodoButton from "../homes/widgets/create_todo_button";

const { Search } = Input;

function CreateEditTodo(props) {

  const getMeState = useSelector(state => state.getMeReducer);
  const uploadImageState = useSelector(state => state.uploadImageReducer);
  const createTodoState = useSelector(state => state.createTodoReducer);
  const editTodoState = useSelector(state => state.editTodoReducer);

  const dispatch = useDispatch();
  const inputFile = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(getMe());

    if (props.location.state.isEdit) {
      dispatch(uploadImageInit(props.location.state.item.imageUrl));
    } else {
      dispatch(uploadImageInit(""));
    }
  }, [])

  useEffect(() => {
    console.log(file);
    if (file !== null) {
      dispatch(uploadImage(file[0]));
    }
  }, [file]);

  useEffect(() => {
    console.log(createTodoState);
    if (createTodoState.type === createTodoTypes.CREATE_TODO_SUCCESS) {
      if (!createTodoState.loading) {
        dispatch(initializeCreateTodo());
        dispatch(initializeEditTodo());
        props.history.replace("/");
      }
    }
  }, [createTodoState]);

  useEffect(() => {
    console.log(editTodoState);
    if (editTodoState.type === editTodoTypes.EDIT_TODO_SUCCESS) {
      if (!editTodoState.loading) {
        dispatch(initializeCreateTodo());
        dispatch(initializeEditTodo());
        props.history.replace("/");
      }
    }
  }, [editTodoState]);

  useEffect(() => {
    console.log(getMeState);
  }, [getMeState]);

  const onFinish = (values) => {
    console.log('Success:', values);

    if (!props.location.state.isEdit) {
      dispatch(createTodo(
        getMeState.username,
        values.header,
        values.description,
        uploadImageState?.imageUrl
      ));
    } else {
      dispatch(editTodo(
        props.location.state.item.id,
        values.header,
        values.description,
        uploadImageState?.imageUrl
      ));
    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="homeContainer">
      <CreateTodoButton
        navigation={props.history}
      />

      <div style={{ marginTop: 50}}>
        <h1>Hello: {getMeState?.username}</h1>

        <Form
          initialValues={{
            header: props.location.state.isEdit ? props.location.state.item.header : "",
            description: props.location.state.isEdit ? props.location.state.item.description : "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Header"
            name="header"
            rules={[
              {
                required: true,
                message: "Please input header",
              }
            ]}>
            <Input/>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description",
              }
            ]}>
            <Input/>
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload"
          >
            <input 
              type="file"
              ref={inputFile}
              style={{
                display: 'none'
              }}
              accept="image/*"
              onChange={(e) => setFile(e.target.files)}
            />
            <Search 
              readOnly 
              placeholder={uploadImageState?.imageUrl} enterButton="Upload"
              loading={uploadImageState.loading}
              onClick={(e) => {
                e.preventDefault();
                inputFile.current.click();
              }}
              onSearch={(e) => {
                inputFile.current.click();
              }}
            />
          </Form.Item>


          <Form.Item>
            <Button 
              id="nextButton"
              htmlType="submit">
              {props.location.state.isEdit ? "Edit" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );

}

export default withRouter(CreateEditTodo);