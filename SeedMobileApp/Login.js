import React, { Component } from "react"
import facade from "./AppFacade";
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView, Touchable, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Form from 'react-native-form'


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







  render() {

    return (
      <View style={{ padding: 20 }}>

        <Text
          style={{ fontSize: 27 }}>
          Login
              </Text >
        <Form onChange={this.onChange} >
          <TextInput placeholder='Username' id="username"  />
          <TextInput placeholder='Password' id="password" />

          <Button
           onPress={LogIn.login}
            title="Submit"
          />
        </Form>
      </View>
    )
  }
}

export class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() {
    facade.fetchData().then(res => this.setState({ dataFromServer: res }));
  }
  render() {
    return (
      <View>
        <Text>Data Received from server
      {this.state.dataFromServer}</Text>

        <Button onPress={this.props.logout}
          title="Logout"
        />
      </View>
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
    this.props.login(this.state.username, this.state.password);
  }


  render() {

    return (
      <View style={{ padding: 20 }}>
        {!this.state.loggedIn ? (<LogIn login={this.login()} />) :
          <LoggedIn />

        }
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
/* npm install
  npm install -g create-react-native-app

  npm install react-navigation --save */

