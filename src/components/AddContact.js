import React from 'react';
import { NavLink , Redirect , Switch} from 'react-router-dom';

export default class AddContact extends React.Component {


	constructor(props){
	    super(props);

	    this.state = {
	      fields: {},
	      errors: {},
	      name:''
	    }
	}

	handleValidation()
	{
	    let fields = this.state.fields;
	    let errors = {};
	    let formIsValid = true;

	    if(!fields["name"]){
	        formIsValid = false;
	        errors["name"] = "Name cannot be empty";
	    }
	    if(typeof fields["name"] !== "undefined"){
	      if(!fields["name"].match(/^[a-zA-Z]+$/)){
	        formIsValid = false;
	        errors["name"] = "Name should accept only alphabets";
	      }      	
	    }
	    if(!fields["email"]){
	      formIsValid = false;
	      errors["email"] = "Email id cannot be empty";
	    }

	    if(typeof fields["email"] !== "undefined"){
	      let lastAtPos = fields["email"].lastIndexOf('@');
	      let lastDotPos = fields["email"].lastIndexOf('.');

	      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
	        formIsValid = false;
	        errors["email"] = "Please enter a valid email id";
	      }
	    }

	    this.setState({errors: errors});
        return formIsValid;
    }
    contactSubmit(e){
	    e.preventDefault();
	   
	    if(this.handleValidation()){
          
	      this.setState({
	      	SuccessMessage:"Form has been submited successfully!"
	      })

	      //return <Redirect to="/Dashboard" />
	    }else{
	      this.setState({
	      	ErrorMessage:"Form occur some error please Fix it!"
	      })
	    }

	}

	/* If You Dont use it not effect your application*/
	handleChange(field, e){    		
	    let fields = this.state.fields;
	    fields[field] = e.target.value;        
	    this.setState({fields});
	    //console.log(fields[field]);
	}
	/* If You Dont use it not effect your application*/

	render() {
		const divStyle = {
		  'width': '100%',
		};
		return (
			<div className="content-wrapper">
				    <section className="content-header">
					    <div className="container-fluid">
					        <div className="row mb-2">
					          <div className="col-sm-6">
					            <h1>Add Contact Details</h1>
					          </div>
					          <div className="col-sm-6">
					            <ol className="breadcrumb float-sm-right">
					              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
					              <li className="breadcrumb-item active">Add Contact Details</li>
					            </ol>
					          </div>
					        </div>
					    </div>
				    </section>

				    <section className="content">
                        <div className="container-fluid">
							<div className="card card-default">
								<div className="card-header">
								<h3 className="card-title">Add Contact Details</h3>

								<div className="card-tools">
								  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
								  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
								</div>
								</div>
								
								<form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                                    
									<div className="card-body">
									
                                        <span className="success">{this.state.SuccessMessage}</span>
                                        <span className="error">{this.state.ErrorMessage}</span>
										<div className="row">

										    <div className="col-md-6">

										        <div className="form-group">
										        <label> Name <span className="error">*</span></label>    
											        <input name="name" className="form-control"  type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                                                    <span className="error">{this.state.errors["name"]}</span>
                                                </div>

                                                <div className="form-group">
										        <label> Email <span className="error">*</span></label>    
											        <input className="form-control" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                                    <span className="error">{this.state.errors["email"]}</span>
                                                </div>

                                                <div className="form-group">
											      <input type="submit" value="Save" className="btn btn-success" />
											    </div>
										    
										    </div>

										    <div className="col-md-6">
										        
											    
										    
										    </div>
										  
										</div>
									
									</div>
								</form>
								
								<div className="card-footer">
								   Add Contact Details
								</div>
							</div>


                        </div>
				    </section>


				   
		    </div>
		);
	}
}
