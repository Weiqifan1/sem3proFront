import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import starwarstheme from './images/starwars-theme.jpg';
class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>

                <Alert color="success">
                    Welcome to intro site.
                </Alert>

                {/* <Alert color="secondary"> */}
                {/* <a href="Login" className="alert-link"> Example link to refresh to Login page or easily set to another page. </a> */}
                {/* </Alert> */}
                                
                <img src={starwarstheme} className="imgPreview" /> 
                 
                

            </div>
        )
    }

}

export default Home;
