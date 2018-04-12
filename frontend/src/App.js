import React, { Component } from "react"
import facade from "./apiFacade";
import {
  HashRouter as Router,
  Route,
  Link, NavLink
} from 'react-router-dom'
import './App.css';
import Login from './Login'
import {About} from './Texts'


function Header() {
console.log('Hey!!!');
  return (
    <div>

      <ul className="header">

        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
      

      </ul></div>
  )

}

const App = () => (
  <div>
    <main>
      <Router>
    
     
  
        <div> 
          <Header> </Header> 
          {/* <hr /> */}

        
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/Login" component={Login} />
        
        </div>
    
      {/* <SeedFooter></SeedFooter> */}
      </Router>
    </main>


  </div>
)
export default App;
