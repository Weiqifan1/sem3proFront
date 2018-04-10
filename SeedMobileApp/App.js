import React from 'react';
import { Text, View, Platform, ScrollView, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import FetchExample from './NetWorking';
import Login from './Login'
import facade from "./AppFacade";

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Seed App Project' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
     
        <Text style={{ textAlign: "center", fontSize: 20 }}>Start mobile app for the DataBuilders seed</Text>
        <Touchable onPress={() => navigate('HomeScreen')} title="Home" />
  {/*       <Touchable onPress={() => navigate('Basics')} title="Basics" />
        <Touchable onPress={() => navigate('FlatListBasics')} title="ListViews" />
        <Touchable onPress={() => navigate('SectionListBasics')} title="ListViews2" /> */}
        <Touchable onPress={() => navigate('FetchExample')} title="NetWorking" />
        <Touchable onPress={()=> navigate('Login')} title="Login" />
    </ScrollView>
    )
  }
}
export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
 /*  Basics: { screen: Basics },
  FlatListBasics: {screen:FlatListBasics},
SectionListBasics: {screen:SectionListBasics}, */
FetchExample: {screen: FetchExample},
Login: {screen: Login},

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})