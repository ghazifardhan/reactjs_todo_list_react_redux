import { Form, Input, Button } from "antd";
import React, { useEffect } from "react";
import { 
  useDispatch, 
  useSelector,
} from 'react-redux';
import { withRouter } from "react-router-dom";
import { login, loginTypes } from "../../redux/actions/auth_action";
import './login.scss';

function Login(props) {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(authState);

    if (authState.type === loginTypes.AUTH_LOGIN_SUCCESS) {
      if (!authState.loading) {
        props.history.push("/");
      }
    }
  }, [authState])

  const onFinish = (values) => {
    console.log('Success:', values);

    dispatch(login(values.username));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            }
          ]}>
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button 
            id="nextButton"
            htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

}

export default withRouter(Login);