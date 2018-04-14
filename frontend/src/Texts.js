import React, { Component } from 'react';
import apiFacade from './apiFacade';
class Texts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFromServer: "Fetching!!",
    };
  }

  componentDidMount() {
    try {
      apiFacade.fetchData().then(res => this.setState({ dataFromServer: res }));
    } catch (error) {

    }
  }

  render() {
    const userName = apiFacade.getUserName();
    const userRole = apiFacade.getRole();

    return (
      <div>

        <h2>Data Received from server</h2>
        <h3>{this.state.dataFromServer}</h3>

        <p>Name: {userName}</p>
        <p>Role: {userRole}</p>

      </div>
    )
  }


}

export default Texts;