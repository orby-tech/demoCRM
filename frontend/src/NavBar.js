import React, { Component }  from 'react';

import { Link } from 'react-router-dom';






class NavBar extends Component{

  render() {


    return(  
      <> 
        <Link className="sign_log_button" to='/demo/boss'>
          Ваш кабинет
        </Link>        
        <br/>
        <Link className="sign_log_button" to="/demo/leader">
          Кабинет руководителя
        </Link>        
                <br/>

        <Link className="sign_log_button" to="/demo/manager">
          Кабинет менеджера
        </Link>  
      </>
    );
  }
}

export default NavBar;



