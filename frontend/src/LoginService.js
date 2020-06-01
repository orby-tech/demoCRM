import React, { Component } from 'react';
import LoginForm from './LoginForm';
import  { Redirect } from 'react-router-dom';

import './App.css';



class signLogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: 'login',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
  }

  handle_login = (e, data) => {
          
  };

  

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    if (localStorage.getItem('token')){return <Redirect to='/Profile' />}


    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      default:
        form = null;
    }

    return (
      <>
        <div className="App">
          {form}
        </div>
      </>
    );
  }
}
export default signLogApp;
