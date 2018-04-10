import React, { Component } from "react"
import facade from "./AppFacade";
import t from 'tcomb-form-native';
import { Text, View, StyleSheet,  Button } from 'react-native';

const Form = t.form.Form;
const User = t.struct({
  username: t.String,
  password: t.String,
});

export class LogIn extends Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: "" }
    }
  
    login = (evt) => {
      evt.preventDefault();
      this.props.login(this.state.username, this.state.password);
    }
  
    onChange = (evt) => {
      this.setState({ [evt.target.id]: evt.target.value })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
      this.props.login(this.state.username, this.state.password);
          }
          
      render() {
        return (
          <View style={styles.container}>
            <Form type={User} />
            <Button
              title="Login!"
              onChange={this.onChange}
              onPress={this.handleSubmit}
            />
          </View>
        );
      }
    }
    
        
 /*         <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome</Text>
         <Text style={{ textAlign: "center", fontSize: 16 }}>Login</Text>
          <form onSubmit={this.login} onChange={this.onChange} >
            <input placeholder="User Name" id="username" />
            <input placeholder="Password" id="password" />
            <button>Login</button>
          </form> 
      
       
      )
    }
  } */
  export class LoggedIn extends Component {
    constructor(props) {
      super(props);
      this.state = { dataFromServer: "<Text>Fetching!!</Text>" };
    }
    componentDidMount() {
      try {
        facade.fetchData().then(res => this.setState({ dataFromServer: res }));
      } catch (error) {
     
      }
     
    }
    render() {
      return (

           <Text>Data Received from server</Text>

        //  {this.state.dataFromServer}
      
      )
    }
  }
  
  
  
  
  export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { loggedIn: false }
    }
  
    logout = () => {
      facade.logout();
      this.setState({ loggedIn: false });
    }
  
    login = (user, pass) => {
      facade.login(user, pass)
        .then(res => this.setState({ loggedIn: true }));
    }
    onChange = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
      }
      handleSubmit = (evt) => {
          evt.preventDefault();
        this.props.login(this.state.username, this.state.password);
            }


    render() {
      return (

        
        //   {!this.state.loggedIn ? (<LogIn login={this.login} />) :
        
           /*    <LoggedIn />
 
           
              <button onClick={this.logout}>Logout</button> */
              <View style={styles.container}>
              <Form type={User} />
              <Button
                title="Login!"
                onChange={this.onChange}
                handleSubmit={this.handleSubmit}
              />
            </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });