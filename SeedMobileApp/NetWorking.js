import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://swapi.co/api/people/?page=2')
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          isLoading: false,
          dataSource: data.results,
        }, function(){

        });

      })
      .catch((error) =>{

      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.gender}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
