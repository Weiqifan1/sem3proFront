import React, { Component } from "react"
import facade from "./apiFacade";
import { HashRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import './App.css';
import Login from './Login'
import { About } from './Texts'


function Navigation() {

  return (
    <div>

      <ul className="header">

        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>


      </ul></div>
  )

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userroles: this.props.userroles
    }
  }

  render() {

    var user = this.props.userroles;

    return (
      <div>

        <HashRouter>
          <div>
            <Navigation />
            <Switch>

              <Route exact path="/" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/Login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>

        {/* <hr /> */}

        <main>
        </main>

        {/* <SeedFooter></SeedFooter> */}

      </div>
    );
  }
}

export default App;

const NoMatch = () => (
  <div>
    <h1>404 Wrong url!</h1>
  </div>
);

