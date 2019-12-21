import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Error from './components/Error';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

 
class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        isLoggedIn : true 
      }
  }

  render() {

      if(this.state.isLoggedIn) {
        return (   

           <BrowserRouter>
              <div>

                <Header />
                <SideBar />
                

                <Switch>

                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/adduser" component={AddUser}/>
                  <Route path="/user-list" component={UserList}/>
                  <Route component={Error}/>

                </Switch>

               
                <Footer />

            </div> 
          </BrowserRouter>

        );
      }else{
        return (   
           <BrowserRouter>
            <div>

                <Switch>

                   <Route path="/" component={Home} exact/>
                  <Route component={Error}/>

               </Switch>

            </div> 
          </BrowserRouter>

        );


      }
  }
}
 
export default App;