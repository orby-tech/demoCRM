import  React from 'react';
import  './App.css';
import  Boss  from './Boss'
import  Profile  from './Profile'
import  Leader  from './Leader'
import  Start  from './Start'
import  NavBar from './NavBar'

import  { Route } from 'react-router-dom';
import  { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact component={NavBar}/>
          <Route path="/" exact component={Start} />  
          <Route path="/boss" exact component={Boss} />   
          <Route path="/manager" exact component={Profile} />    
          <Route path="/leader" exact component={Leader} />    


        </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

export default App;
