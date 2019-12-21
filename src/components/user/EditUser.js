import React, {Component} from 'react';
import { NavLink , Link} from 'react-router-dom';
import {PostData} from '../user/PostData';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class EditUser extends Component {

constructor(props){
    super(props);
   
    this.state = {
    	name:null,
    	username:null,
    	email:null,
    	mobile:null,
    	user_id:null,
    	users: [],
        errors: {
        	name:'',
        	user_id:'',
		    username: '',
		    email:'',
		    mobile:'',
		    redirectToReferrer: false
		}
    };

    this.edituser = this.edituser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //console.log(this.props.match.params.id);	

}

componentDidMount() {
	    const apiUrl = 'http://localhost/react-php/api/index.php';
        const type ='GET_USERBYID';
        const userId= this.props.match.params.id;
        const formData = new FormData();
	    formData.append('userId', userId);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }
        //console.log(userId);

	    fetch(apiUrl+'?tp='+type, options)
        
	        .then(res => res.json())
	        .then((result) => {
                console.log(result);
		        this.setState({
		            users: result.UserData
		        });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )

	}

edituser() {

    if(this.state.username && this.state.email && this.state.name && this.state.mobile ){
       
        	if(validateForm(this.state.errors)) {
	        	PostData('edituser',this.state).then((result) => {
			    let responseJson = result;
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
				formError: "Some Error occur!",
		    })
       
	    

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
    }else{
        this.setState({[e.target.name]:e.target.value});
    }
}



render(){
	const divStyle = {
	  'width': '100%',
	};
	const {errors} = this.state;
	const {users} = this.state;

    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Edit User Profile</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Eidt User Profile</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Edit User Profile</h3>

							<div className="card-tools">
							  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
							  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
							</div>
							</div>
							
							<div className="card-body">
						    <span style={{color: "Red"}}>{this.state.formError}</span>
                            {
					            this.state.users.map((dynamicData, i)=>  
								<div className="row">
                                
								    <div className="col-md-6">
								        <div className="form-group">
									    <label> Name <span className="error">*</span></label>
									      <input type="text" value={dynamicData.name} className="form-control" name="name" onChange={this.handleChange} />
									       <input type="hidden" value={dynamicData.user_id} className="form-control" name="user_id" onChange={this.handleChange} />
									      {errors.name.length > 0 &&  <span className='error'>{errors.name}</span>}
									    </div>
									    
									    <div className="form-group">
									      <label>Username <span className="error">*</span></label>
									      <input type="text"  name="username"  value={dynamicData.username} className="form-control" onChange={this.handleChange} />
									      {errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
									    </div>

									    <div className="form-group">
									      <label>Email Id <span className="error">*</span></label>
									      <input type="text" name="email"  value={dynamicData.email} className="form-control" onChange={this.handleChange} />
									      {errors.email.length > 0 &&  <span className='error'>{errors.email}</span>}
									    </div>

									    <div className="form-group">
									      <label>Mobile Number <span className="error">*</span></label>
									      <input type="text" name="mobile"  value={dynamicData.mobile} className="form-control" onChange={this.handleChange} />
									      {errors.mobile.length > 0 &&  <span className='error'>{errors.mobile}</span>}
									    </div>
									    
								    
								    </div>

								    <div className="col-md-6">
								        <div className="form-group">
									    <label>Country</label>
									      <select className="form-control select2" onChange={this.handleChange}  name="country" style={divStyle}>
									        <option>---Select Country---</option>
									        <option>India</option>
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
									      <input type="submit" value="Save" className="btn btn-success" onClick={this.edituser} />
									    </div>
								    
								    </div>
								    
								  
								</div>
								) 
                            }
							
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