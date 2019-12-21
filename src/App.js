import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Routes from './Routes';
import './App.css';

//4620816365016761480
//9130 3473 2463 5626
///home/d3autogaragenetw/public_html/QuickBooks/src/Core/HttpClients/SyncRestHandler.php
 
class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        appName: "AdminTN",
        dashboard : false 
      }
      //console.log(this.state.redirectToReferrer);
  }

  render() {
      if(sessionStorage.getItem('userData')) {
        return (   
          
            <div>
              <Routes name={this.state.appName}/>
            </div> 
        );
      }else{
        return (   
            <BrowserRouter>
            <div>

                <Switch>
                  <Route path="/" component={Login} exact/>
                  <Route component={Error}/> Hi, salary ?
                </Switch>

            </div> 
            </BrowserRouter>
        );
      }
        
  }
}
 
export default App;