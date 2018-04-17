import React, { Component } from 'react';
import { Alert } from 'reactstrap';
class Home extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>


               <h2>Welcome "insert username"</h2>

                <div>
                <HashRouter>
          <div>

    

            <Switch>
              <Route exact path="/" component={Home} />
              
             {/*  <Route path="/Register" component={Register} />
              <Route path="/Login" component={Login} />
              <Route path="/searchresults" component={Search} />
              <Route component={NoMatch} /> */}
            </Switch>
          </div>

        </HashRouter>

// ligin - {Welcome}
// registrer - {RegistartionForm}
// søg restaurenter intast location {Search}
// intast valgmuligheder
            


              

                </div>

            </div>
        )
    }

}

export default Home;
const NoMatch = () => (
    <div>
      <h1>404 Wrong url!</h1>
    </div>
  );