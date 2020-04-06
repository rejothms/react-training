import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';
import UserForm from './UserForm';
import { Route, Switch } from 'react-router-dom';

class Router extends React.Component {

  
  render() {

    return (
      <div>
        <Switch>
        <Route path="/" Component={AutoComplete} />
        <Route path="/register" Component={UserForm} />
        </Switch>
      </div>
    )

  }


}

export default Router



