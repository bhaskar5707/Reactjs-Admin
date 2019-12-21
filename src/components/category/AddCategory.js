import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';

export default class AddCategory extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			category_name:null,
			response:{},
			errors:{
				category_name:''
			}
		};
	    this.handleChange= this.handleChange.bind(this);
	    this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		const {name , value} = e.target;
		let errors= this.state.errors;
		
		if(name == 'category_name'){
	    	if(value.length < 2){
	    		errors.category_name = "Category name atleast 2 character long!";

	    	}else{
	    		errors.category_name = "";
	    	}
	    	this.setState({errors, [name]: value});
	    };
	    this.setState({[e.target.name]:e.target.value});

	    
	}

	onFormSubmit(data) {
	    if(this.state.category_name)
	    {
	    	//console.log(this.state.category_name);
	    	PostData('http://localhost/react-ci/index.php/add_category',this.state).then((result) => {
	    		let responseJson = result;
	    		console.log(responseJson);
	    		this.setState({
		          response: result,
		          formSuccess: 'Category added successfully'
		        })
		        setTimeout(()=> this.setState({formSuccess: ''}), 1000)
	        });
	    }else{
	    	this.setState({
				formError: 'Please enter category name',
		    })
		    setTimeout(()=> this.setState({formError: ''}), 1000)
	    }
    }

	render() {
		const {errors} = this.state;
		
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Category</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Category</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Category</h3>

							<div className="card-tools">
							  <Link to={"/category"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
							</div>
							</div>
							
							<div className="card-body">
							    {this.state.formError ? <div className="alert alert-danger alert-dismissible">
							        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
							        <strong>Error!</strong> {this.state.formError}
							    </div> : ''}

							    {this.state.formSuccess ? <div className="alert alert-success alert-dismissible">
							        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
							        <strong>Success!</strong> {this.state.formSuccess}
							    </div> : ''}
							    
								<div className="row">
                                    
								    <div className="col-md-6">
								        <div className="form-group">
									    <label> Category Name <span className="error">*</span></label>
									      <input type="text" className="form-control" name="category_name" placeholder="Enter Category Name" onChange={this.handleChange} />
									      {errors.category_name.length > 0 &&  <span className='error'>{errors.category_name}</span>}
									    </div>
									    <div className="form-group">
									      <input type="submit" value="Save Category" className="btn btn-success" onClick={this.onFormSubmit} />
									    </div>
                                    </div>
								
								</div>
							
							</div>
						</div>


                    </div>
			    </section>


			   
			</div>
		);
	}
}
