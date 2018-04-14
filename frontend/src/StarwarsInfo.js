import React, { Component } from "react"

function characterPropMany(props) {
  if (props.length > 1) {
    return props[0] + "(+" + (props.length - 1) + ")";
  }
  return props[0];
}

const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/remote/people";
class CharacterTable extends Component {

  constructor(props) {
    super(props);
    this.state = { characters: this.props.people }

  }

  componentDidMount() {

    fetch(URL)
      .then(results => {

        if (!results.ok) {
          throw Error(results.statusText);
        }
        return results.json();

      }).then(data => {
        const characters = data.results.map((character) => {
          return (

            <tr key={character.name}>

              <td>  {character.name}</td>
              <td> {character.height}</td>
              <td> {character.mass}</td>
              <td> {character.hair_color}</td>
              <td> {character.skin_color}</td>
              <td> {character.eye_color}</td>
              <td> {character.gender}</td>
              <td> {characterPropMany(character.starships)}</td>

            </tr>

          )
        })
        this.setState({ characters: characters })

      })

  }

  render() {

    return (
      <div>

        <h3>Star Wars information to the user.</h3>

        <table className="table">

          <thead>
            <tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th><th>Skin Color</th><th>Eye Color</th><th>Gender</th><th>Starships</th></tr>
          </thead>
          <tbody>
            {this.state.characters}
          </tbody>
        </table>

      </div>
    );
  }

}

export default CharacterTable;