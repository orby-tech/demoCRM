import React from 'react';
import './App.css';
import Boss from './Boss'
import Profile from './Profile'
import Leader from './Leader'
import Login from './Login'
import NavBar from './NavBar'
import Presentation from './Presentation'

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Presentation} />


        <Route exact component={NavBar} />
        <Route path="/demo" exact component={Login} />
        <Route path="/demo/boss" exact component={Boss} />
        <Route path="/demo/manager" exact component={Profile} />
        <Route path="/demo/leader" exact component={Leader} />


      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

export default App;
