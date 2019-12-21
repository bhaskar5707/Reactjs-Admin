import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';
export default class EditChildCategory extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sub_category_name:null,
			childcategoryId:null,
			category_name:null,
			child_category_name:null,
			response:{},
			datas: [],
			categories:[],
			subcategory:[],
			errors:{
				sub_category_name:'',
				category_name:'',
				child_category_name:'',
				childcategoryId:''
			}
		};
		this.handleChange= this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		const {name , value} = e.target;
		let errors= this.state.errors;
		
		if(name == 'child_category_name'){
	    	if(value.length < 2){
	    		errors.child_category_name = "Category name atleast 2 character long!";

	    	}else{
	    		errors.child_category_name = "";
	    	}
	    	this.setState({errors, [name]: value});
	    };
	    this.setState({[e.target.name]:e.target.value});
	    //console.log(e.target.value);
	}

	componentDidMount() {
		const apiUrl = 'http://localhost/react-ci/index.php/edit-childcategory';
      
        const categoryId= this.props.match.params.id;
        //console.log(childcategoryId);
        const formData = new FormData();
	    formData.append('categoryId', categoryId);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }
       

	    fetch(apiUrl, options)
        
	        .then(res => res.json())
	        .then((result) => {
                console.log(result);
		        this.setState({
		            //datas: result
		            category_name:result.category_id,
		            sub_category_name:result.sub_category_id,
		            child_category_name:result.child_category_name,
		            childcategoryId:result.id
		        });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )


	    const apiUrl1 = 'http://localhost/react-ci/index.php/categories';

	    fetch(apiUrl1)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            categories: result
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )
	    const apiUrl2 = 'http://localhost/react-ci/index.php/subcategory';

	    fetch(apiUrl2)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            subcategory: result
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )

	}

	onFormSubmit(e) {
        e.preventDefault();
	    if(this.state.category_name && this.state.sub_category_name && this.state.child_category_name)
	    {
	    	//console.log(this.state.category_name);
	    	PostData('http://localhost/react-ci/index.php/update-childcategory',this.state).then((result) => {
	    		let responseJson = result;
	    		//console.log(responseJson);
	    		this.setState({
		          response: result,
		          formSuccess: 'Child Category updated successfully'
		        })
		        setTimeout(()=> this.setState({formSuccess: ''}), 1000)
	        });
	    }else{
		    this.setState({
				formError: 'Please fill mandatory values',
		    })
		    setTimeout(()=> this.setState({formError: ''}), 1000)
	    }
    }

	render() {
		const {errors , datas , categories , subcategory} = this.state;
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Edit Sub Category</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Edit Sub Category</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Edit Sub Category</h3>

							<div className="card-tools">
							  <Link to={"/childcategory"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
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
									    <label> Subcategory <span className="error">*</span></label>
									      <select name="category_name" className="form-control" onChange={this.handleChange}>
									     
									      {categories.map(category => (
									        <option value={category.id}   selected={
                                                   (category.id == this.state.category_name) ? 'selected' : ''
                                                   }>{category.category_name}</option>
									      ))}
									      </select>
									      <input type="hidden" name="childcategoryId" value={this.state.childcategoryId} onChange={this.handleChange} />
									    </div>
								        <div className="form-group">
									    <label> Subcategory <span className="error">*</span></label>
									      <select name="sub_category_name" className="form-control" onChange={this.handleChange}>
									     
									      {subcategory.map(category => (
									        <option value={category.id}   selected={
                                                   (category.id == this.state.sub_category_name) ? 'selected' : ''
                                                   }>{category.sub_category_name}</option>
									      ))}
									      </select>
									     
									    </div>
									    <div className="form-group">
									    <label> Clild Category <span className="error">*</span></label>
									      <input type="text" className="form-control" name="child_category_name" value={this.state.child_category_name}  onChange={this.handleChange} placeholder="Please enter child category name" />
									      {errors.child_category_name.length > 0 &&  <span className='error'>{errors.child_category_name}</span>}
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
