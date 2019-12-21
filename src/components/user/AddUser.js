import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {PostData} from '../user/PostData';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class AddUser extends Component {

constructor(props){
    super(props);
   
    this.state = {
    	name:null,
    	username:null,
    	email:null,
    	mobile:null,
    	password:null,
    	cpassword:null,
        errors: {
        	name:'',
		    username: '',
		    email:'',
		    mobile:'',
		    password:'',
		    cpassword:'',
		    redirectToReferrer: false
		}
    };

    this.adduser = this.adduser.bind(this);
    this.handleChange = this.handleChange.bind(this);

}

adduser() {

    if(this.state.username && this.state.password && this.state.email && this.state.name && this.state.mobile && this.state.cpassword){
        if(this.state.password != this.state.cpassword)
        {
            this.setState({
				formError: 'Password do not match!',
		    })
        }else{
        	if(validateForm(this.state.errors)) {
	        	PostData('adduser',this.state).then((result) => {
			    let responseJson = result;
			    if(responseJson.userData){       
			        sessionStorage.setItem('userData',JSON.stringify(responseJson));
			        this.setState({redirectToReferrer: true});
			    }else
	                //alert(result.error);
	                if(result.error)
			            this.setState({
							formError: result.error,
					    })
			        else
			        	this.setState({
							formSuccess: result.success,
					    })
			    });
			}else
			this.setState({
				formError: "Some Error occur!",
		    })
        }
	    

    }else{
    	this.setState({
			formError: 'Please fill mandatory values',
	    })
    }

}

handleChange(e)
{
	e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    const password = this.state.password;

    if(name == 'name'){
    	if(value.length < 5){
    		errors.name = "name must be 5 characters long!";
    	}else{
    		errors.name = "";
    	}
    	this.setState({errors, [name]: value});
    }
    else if(name == 'username'){
    	if(value.length < 5){
    		errors.username = "Username must be 5 characters long!";
    	}else{
    		errors.username = "";
    	}
    	this.setState({errors, [name]: value});
    }else if(name == 'email'){
    	if(validEmailRegex.test(value)){
    		errors.email = "";
    	}else{
    		errors.email = "Email is not valid!";
    	}
    	this.setState({errors, [name]: value});
    }else if(name == 'mobile'){
    	if(value.length < 10 || value.length > 10){
    		errors.mobile = "Mobile number  must be 10 digit long!";
    	}else{
    		errors.mobile = "";
    	}
    	this.setState({errors, [name]: value});
    }else if(name == 'password'){
    	if(value.length < 8){
    		errors.password = "Password must be 8 characters long!";
    	}else{
    		errors.password = "";
    	}
    	this.setState({errors, [name]: value});
    }else if(name == 'cpassword'){
    	if(value.length < 8){
    		errors.cpassword = "Conform password must be 8 characters long!";
    	}else if(password != value){
    		errors.cpassword = "Password do not match";
    	}
    	else{
    		errors.cpassword = "";
    	}
    	this.setState({errors, [name]: value});
    }else{
        this.setState({[e.target.name]:e.target.value});
    }
}

render(){
	const divStyle = {
	  'width': '100%',
	};
	const {errors} = this.state;
	

    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Add New User</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Add New User</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Register New User</h3>

							<div className="card-tools">
							  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
							  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
							</div>
							</div>
							
							<div className="card-body">
						    <span style={{color: "Red"}}>{this.state.formError}</span>
						    <span style={{color: "Green"}}>{this.state.formSuccess}</span>

								<div className="row">

								    <div className="col-md-6">
								        <div className="form-group">
									    <label> Name <span className="error">*</span></label>
									      <input type="text" className="form-control" name="name" onChange={this.handleChange} />
									      {errors.name.length > 0 &&  <span className='error'>{errors.name}</span>}
									    </div>
									    
									    <div className="form-group">
									      <label>Username <span className="error">*</span></label>
									      <input type="text" name="username" className="form-control" onChange={this.handleChange} />
									      {errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
									    </div>

									    <div className="form-group">
									      <label>Email Id <span className="error">*</span></label>
									      <input type="text" name="email" className="form-control" onChange={this.handleChange} />
									      {errors.email.length > 0 &&  <span className='error'>{errors.email}</span>}
									    </div>

									    <div className="form-group">
									      <label>Mobile Number <span className="error">*</span></label>
									      <input type="text" name="mobile" className="form-control" onChange={this.handleChange} />
									      {errors.mobile.length > 0 &&  <span className='error'>{errors.mobile}</span>}
									    </div>
									    <div className="form-group">
									      <label>Password <span className="error">*</span></label>
									      <input type="password" name="password" className="form-control"  onChange={this.handleChange} />
									      {errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
									    </div>
									    
								    
								    </div>

								    <div className="col-md-6">
								        <div className="form-group">
									    <label>Country</label>
									      <select className="form-control select2" onChange={this.handleChange}  name="country" style={divStyle}>
									        <option>---Select Country---</option>
									        <option >India</option>
									        <option>US</option>
									        <option>UK</option>
									        <option>Japan</option>
									        <option>Russia</option>
									        <option>Nepal</option>
									        <option>China</option>
									      </select>
									    </div>
									    
									    <div className="form-group">
									      <label>State</label>
									      <select className="form-control select2" onChange={this.handleChange}  name="state"  style={divStyle}>
									        <option>---Select Satate---</option>
									        <option>Uttra Pradesh</option>
									        <option>Uttrakhand</option>
									        <option>Punjab</option>
									        <option>Jammu & Kashmir</option>
									        <option>Gujrat</option>
									        <option>Delhi</option>
									        <option>Haryana</option>
									      </select>
									    </div>

									    <div className="form-group">
									      <label>City</label>
									      <select className="form-control select2" onChange={this.handleChange}  name="city"  style={divStyle}>
									        <option>---Select City---</option>
									        <option>Noida</option>
									        <option>Ghazibad</option>
									        <option>Bijnor</option>
									        <option>Meerut</option>
									        <option>Dhampur</option>
									        <option>Nagina</option>
									        <option>Haridwar</option>
									      </select>
									    </div>

									    <div className="form-group">
									      <label>Gender</label>
									      <select className="form-control select2" onChange={this.handleChange}  name="gender"  style={divStyle}>
									        <option>---Select gender---</option>
									        <option>Male</option>
									        <option>Female</option>
									        <option>Other</option>
									      </select>
									    </div>
									    <div className="form-group">
									      <label>Confirm Password <span className="error">*</span></label>
									      <input type="password" name="cpassword" className="form-control" onChange={this.handleChange}/>
									      {errors.cpassword.length > 0 &&  <span className='error'>{errors.cpassword}</span>}
									    </div>

									    <div className="form-group">
									      <input type="submit" value="Save" className="btn btn-success" onClick={this.adduser} />
									    </div>
								    
								    </div>
								  
								</div>
							
							</div>
							
							<div className="card-footer">
							   Create new user here
							</div>
						</div>


                    </div>
			    </section>


			   
			</div>
    )
}
}