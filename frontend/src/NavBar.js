import React, { Component }  from 'react';

import { Link } from 'react-router-dom';






class NavBar extends Component{

  render() {


    return(  
      <> 
        <br/>
        <Link className="link__button sign_log_button" to='/demo/boss'>
          Ваш кабинет
        </Link>        
        <br/>
        <Link className="link__button sign_log_button" to="/demo/leader">
          Кабинет руководителя
        </Link>        
         <br/>
        <Link className="link__button sign_log_button" to="/demo/manager">
          Кабинет менеджера
        </Link>  
        <br/>
        <hr/>
      </>
    );
  }
}

export default NavBar;



