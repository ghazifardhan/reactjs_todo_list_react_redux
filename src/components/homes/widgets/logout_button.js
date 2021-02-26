import React from 'react';
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/auth_action';

function LogoutButton(props) {

  const dispatch = useDispatch();

  return (
    <div className="logoutContainer">
      <Button id="createTodoButton" onClick={(e) => {
        e.preventDefault();

        dispatch(logout());
      }}>
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;