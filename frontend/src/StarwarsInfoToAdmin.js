import React, { Component } from "react";
import { Table } from 'reactstrap';

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
                            <td> {characterPropMany(character.species)}</td>
                            <td> {characterPropMany(character.vehicles)}</td>
                            <td> {characterPropMany(character.homeworld)}</td>
                            <td> {character.birth_year}</td>
                            <td> {character.created}</td>
                            <td> {character.edited}</td>
                            <td> {character.url}</td>
                        </tr>

                    )
                })
                this.setState({ characters: characters })

            })

    }

    render() {

        return (
            <div>

                <h3>Admin you have accees to special information about Star Wars.</h3>

                <Table striped>

                    <thead>
                        <tr><th>Species</th><th>Vehicles</th><th>Homeworld</th><th>Birth Year</th><th>Created</th><th>Edited</th><th>Url</th></tr>
                    </thead>
                    <tbody>
                        {this.state.characters}
                    </tbody>
                </Table>

            </div>
        );
    }

}

export default CharacterTable;