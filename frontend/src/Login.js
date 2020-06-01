import  { Redirect,  Route  } from 'react-router-dom';
import React, { Component } from 'react';
import signLogApp from './LoginService';

class Login extends Component {
  render() {
    return (
    	<Route exact component={signLogApp} />  	
    	)}
}
export default Login;
