import React, {Component} from 'react';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';


class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false
    };

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

    signup() {
	    if(this.state.username && this.state.password && this.state.email && this.state.name){
	    
	    PostData('signup',this.state).then((result) => {
	      let responseJson = result;
	      if(responseJson.userData){       
	        sessionStorage.setItem('userData',JSON.stringify(responseJson));
	        this.setState({redirectToReferrer: true});
	      }
	      
	     });
	    }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
		const divStyle = {
		  'margin-left': '260px',
		};
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
        return (<Redirect to={'/dashboard'}/>)
    }
   
  

    return (
      
      <div className="row " id="Body">
        <div className="medium-5 columns left" style={divStyle}>
        <h4>Signup</h4>
        <label>Email</label>
        <input type="text" name="email"  placeholder="Email" onChange={this.onChange}/>
        <label>Name</label>
        <input type="text" name="name"  placeholder="Name" onChange={this.onChange}/>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        
        <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
        <a href="/login">Login</a>
        </div>
        
      </div>
    );
  }
}

export default Signup;