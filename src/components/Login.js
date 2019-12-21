import React, {Component} from 'react';
import { NavLink , Redirect } from 'react-router-dom';
import {PostData} from './PostData';
import Routes from '../Routes';
class Login extends Component {

	constructor(){
	    super();
	   
	    this.state = {
	        username: '',
	        password: '',
	        redirectToReferrer: false
	    };

	    this.login = this.login.bind(this);
	    this.onChange = this.onChange.bind(this);

	}

	login(){
		if(this.state.username && this.state.password){
	        PostData('login',this.state).then((result) => {
	        let responseJson = result;console.log(responseJson);  
	        if(responseJson.userData){  
	            sessionStorage.setItem('userData',JSON.stringify(responseJson));
	            this.setState({redirectToReferrer: true});
	        }else
                //alert(result.error);
	            this.setState({
					formError: result.error,
			    })
	       
	        });
	    }else
	    this.setState({
			formError: 'Please enter login credintial',
	    })
	}

	onChange(e){
	    this.setState({[e.target.name]:e.target.value});
	}


	render() {

	if (this.state.redirectToReferrer) {
        //return (<Redirect to={'/dashboard'}/>)
        //return (<Routes name={this.state.appName}/>)
    }
   
    if(sessionStorage.getItem('userData')){
        //return (<Redirect to={'/dashboard'}/>)
        //return (<Routes name={this.state.appName}/>)
    }

    return (
       <div>
            <div className="login-box">
			  <div className="login-logo">
			    <NavLink href="#"><b>Admin</b>LTE</NavLink>
			  </div>
			
			  <div className="card">
			    <div className="card-body login-card-body">
			        <p className="login-box-msg">Sign in to start your session</p>
                    <p className="login-box-msg"><span style={{color: "Red"}}>{this.state.formError}</span></p>
			      
			        <div className="input-group mb-3">
			          <input type="text" className="form-control" name="username" placeholder="Email" onChange={this.onChange} />
			          <div className="input-group-append">
			            <div className="input-group-text">
			              <span className="fas fa-envelope"></span>
			            </div>
			          </div>
			        </div>
			        <div className="input-group mb-3">
			          <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange} />
			          <div className="input-group-append">
			            <div className="input-group-text">
			              <span className="fas fa-lock"></span>
			            </div>
			          </div>
			        </div>
			        <div className="row">
			          <div className="col-8">
			            <div className="icheck-primary">
			              <input type="checkbox" id="remember" />
			              <label for="remember">
			                Remember Me
			              </label>
			            </div>
			          </div>
			        
			          <div className="col-4">
			            <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.login}>Sign In</button>
			          </div>
			         
			        </div>
			      

			      <div className="social-auth-links text-center mb-3">
			        <p>- OR -</p>
			        <NavLink href="#" className="btn btn-block btn-primary">
			          <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
			        </NavLink>
			        <NavLink href="#" className="btn btn-block btn-danger">
			          <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
			        </NavLink>
			      </div>
			     

			      <p className="mb-1">
			        <NavLink href="#">I forgot my password</NavLink>
			      </p>
			      <p className="mb-0">
			        <NavLink href="register.html" className="text-center">Register a new membership</NavLink>
			      </p>
			    </div>
			   
			  </div>
			</div>
       </div>
    );
    }
}
 
export default Login;