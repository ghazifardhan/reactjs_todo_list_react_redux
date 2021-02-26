import React, { useEffect } from 'react';
import './App.css';
import Homes from './components/homes/homes';
import Login from './components/login/login';
import CreateEditTodo from './components/todos/create_edit_todo';
import { useDispatch, useSelector } from "react-redux";
import { checkIsLoggedIn } from './redux/actions/auth_action';
import PrivateRoute from './router/private_route';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState])

  return (
    <div>
      {/* <CheckAuth type={type} /> */}
      <Switch>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/">
          <Homes/>
        </PrivateRoute>
        <PrivateRoute path="/home" component={Homes}/>
        <PrivateRoute excat path="/create_edit_todo">
          <CreateEditTodo/>
        </PrivateRoute>
      </Switch>
      {/* <Route component={NotFound}/> */}
    </div>
  );
}

export default App;
