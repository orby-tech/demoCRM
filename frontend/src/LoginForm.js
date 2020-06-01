import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    user: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="login__container">
        <h2>Войти в систему</h2>
       <input 
          type="text" 
          className="login__inputForm form-control" 
          placeholder="Ваш логин" 
          aria-label="Username" 
          aria-describedby="basic-addon1"                
          name="user"
          value={this.state.user}
          onChange={this.handle_change}
        />
        <input
          type="password"
          name="password"
          className="login__inputForm form-control" 
          placeholder="Пароль" 
          aria-label="password" 
          aria-describedby="basic-addon1"    
          value={this.state.password}
          onChange={this.handle_change}
        />
        <Button className="sign_log_button" variant='primary' onClick={e => this.props.handle_login(e, this.state)}>
          Войти
        </Button>
        <br/>
        <Link to="/boss"> временный переход </Link>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
