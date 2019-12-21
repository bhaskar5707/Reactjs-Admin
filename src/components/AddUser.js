import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class AddUser extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      firstname: null,
	      email: null,
	      mobile:null,
	      password: null,
	      cpassword:null,
	      errors: {
	        firstname: '',
            email:'',
            mobile:'',
            password: '',
            cpassword:'',
	      }
	    };
	    //this.handleChange = this.handleChange.bind(this);
    }



    handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;


    const password = this.state.password;
    //console.log(password , cpassword , name , value);
    //alert(cpassword);

	    switch (name) {
	      case 'firstname': 
	        errors.firstname = 
	          value.length < 5
	            ? 'Full Name must be 5 characters long!'
	            : '';
	        break;
	      case 'email': 
	        errors.email = 
	          validEmailRegex.test(value)
	            ? ''
	            : 'Email is not valid!';
	        break;
	      case 'mobile': 
	        errors.mobile = 
	          value.length < 10 || value.length > 10
	            ? 'Mobile number must be 10 digit number!'
	            : '';
	        break;
	      case 'password': 
	        errors.password = 
	          value.length < 8
	            ? 'Password must be 8 characters long!'
	            : '';
	        break;
	      case 'cpassword': 
	        errors.cpassword = 
	          value.length < 8
	            ? 'Confirm Password must be 8 characters long!'
	            : (password != value ? 'Password do not match' : '' );
	       break;
	      
	       default:
	       break;
	    }
	    this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => 
    {
	    event.preventDefault();
	    const password = this.state.password;
		const cpassword = this.state.cpassword;
		const firstname = this.state.firstname;
		const email = this.state.email;
		const mobile = this.state.mobile;
		if(!firstname || !email || !mobile || !password || !cpassword){
           this.setState({
				formError: 'All fields are required',
		    })
        }
        else{
        	if(validateForm(this.state.errors)) {
	        this.setState({
				formSuccess: 'Valid Form',
				formError :''
		    })

		    }else{
		    	this.setState({
					formError: 'Invalid Form'
				})
		    }
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
								
								<form onSubmit={this.handleSubmit} noValidate>

								<div className="card-body">
								<span style={{color: "Red"}}>{this.state.formError}</span>
								<span style={{color: "Green"}}>{this.state.formSuccess}</span>

									<div className="row">

									    <div className="col-md-6">
									        <div className="form-group">
										    <label>First Name <span className="error">*</span></label>
										      <input type="text" className="form-control" name="firstname" onChange={this.handleChange} />
										      {errors.firstname.length > 0 &&  <span className='error'>{errors.firstname}</span>}
										    </div>
										    
										    <div className="form-group">
										      <label>Last Name</label>
										      <input type="text" className="form-control" />
										    </div>

										    <div className="form-group">
										      <label>Email Id <span className="error">*</span></label>
										      <input type="email" name="email" className="form-control" onChange={this.handleChange} />
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
										      {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
										    </div>
										    
									    
									    </div>

									    <div className="col-md-6">
									        <div className="form-group">
										    <label>Country</label>
										      <select className="form-control select2" style={divStyle}>
										        <option selected="selected">India</option>
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
										      <select className="form-control select2"  style={divStyle}>
										        <option selected="selected">Uttra Pradesh</option>
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
										      <select className="form-control select2"  style={divStyle}>
										        <option selected="selected">Noida</option>
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
										      <select className="form-control select2"  style={divStyle}>
										        <option selected="selected">Male</option>
										        <option>Female</option>
										        <option>Other</option>
										      </select>
										    </div>
										    <div className="form-group">
										      <label>Confirm Password <span className="error">*</span></label>
										      <input type="password" name="cpassword" className="form-control" onKeyUp={this.handleChange}/>
										      {errors.cpassword.length > 0 && <span className='error'>{errors.cpassword}</span>}
										    </div>

										    <div className="form-group">
										      <input type="submit" value="Save" className="btn btn-success" />
										    </div>
									    
									    </div>
									  
									</div>
								
								</div>
								</form>
								
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