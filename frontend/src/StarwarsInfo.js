import React, { Component } from "react"

function characterPropMany(props){
  
    if (props.length>1){
    return props[0]+"(+"+(props.length-1)+")";
  }
   
      return props[0];
  }
  
  
//function makeTable(props){
//    return (<td>props.)


  const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/remote/people"; 
  
  
  class  CharacterTable extends Component {
   
    constructor(props) {
      super(props);
      this.state = {  characters: this.props.people}
      
    }
     componentDidMount() {
      
      fetch(URL )
        .then(results => {
           
          if (!results.ok) {
            throw Error(results.statusText);
          }
          return results.json();
        
        }).then(data => {
  console.log(data.results)
         const characters = data.results.map((character) => {
            return (
              <tr key={character.name}>
  
                <td>  {character.name}</td>
                <td> {character.heightl}</td>
                <td> {character.mass}</td>
                <td> {character.hair_color}</td>
                <td> {character.skin_color}</td>
                <td> {character.eye_color}</td>
             
                <td> {character.gender}</td>
                <td> {characterPropMany(character.starships)}</td> 
               
               {/* <td> {characterPropMany(character.species)}</td>
                <td> {characterPropMany(character.vehicles)}</td>
               <td> {characterPropMany(character.homeworld)}</td>
                  <td> {character.birth_year}</td>
                <td> {character.created}</td>
                <td> {character.edited}</td>
                <td> {character.url}</td> */}
              </tr>
  
            )
          })
          this.setState({ characters: characters })
     
        })
  
    } 
  
  
  
  
    render() {
   
      return (
       
        <table className="table">
   
          <thead>
      
  
          </thead>
          <tbody>
            {this.state.characters}
          </tbody>
        </table>
  
      );
    }
  
  }
  
  export default CharacterTable;