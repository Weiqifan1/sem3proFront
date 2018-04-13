import React, { Component } from "react";
import facade from "./apiFacade";
import { HashRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css';
import LogIn, { LoggedIn } from './Login';
import Texts from './Texts';
import About from './About';
import Home from './Home';


const Navigation = (props) => {

  var userRole = props.userRole;

  if (userRole === "user") {
    var navigationView = <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
  }

  return (
    <div>

      <ul className="header">

        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        {navigationView}
        <li><NavLink activeClassName="active" to="/texts">Texts</NavLink></li>

      </ul>

    </div>
  )

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      //userroles: this.props.userroles
      userroles: ""
    }
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }

  login =  (user, pass) => {
  facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }

  render() {

    var userRole = this.props.userroles;
    console.log('App: ');
    return (
      <div>

        <main>
        <HashRouter>
          <div>

            <Navigation userRole={userRole} />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/texts" component={Texts} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </HashRouter>

        {/* <hr /> */}

        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>
          </div>)}

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

