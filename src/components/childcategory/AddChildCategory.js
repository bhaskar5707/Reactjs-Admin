import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';

export default class AddChildCategory extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      categories:[],
	      categoryId:'',
	      subCategories:[],
	      response:{},
	      category_name:null,
		  sub_category_name:null,
		  child_category_name:null,
		    errors:{
				category_name:'',
				sub_category_name:'',
				child_category_name:''
			}
	    }
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
	    //console.log(value);
	}

	onChangeSubcategory = ({ target: { value } }) => {
	    this.setState({ dataValue: value });
        const apiUrl = 'http://localhost/react-ci/index.php/sub-subcategory';

	    const formData = new FormData();
	    formData.append('categoryId', value);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }
        fetch(apiUrl, options)
        
	        .then(res => res.json())
	        .then((result) => {
                //console.log(result);
		        this.setState({
		            subCategories: result
		        });
		        //console.log(result);
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )

	}

	componentDidMount() {
	    const apiUrl = 'http://localhost/react-ci/index.php/categories';

	    fetch(apiUrl)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            categories: result
	          });
	          //console.log(result);
	        },
	        (error) => {
	          this.setState({ error });
	        }
	      )
	}

	onFormSubmit(data) {
		if(this.state.category_name && this.state.sub_category_name && this.state.child_category_name)
	    {
	    	PostData('http://localhost/react-ci/index.php/add-sub_child_category',this.state).then((result) => {
	    		let responseJson = result;
	    		console.log(responseJson);
	    		this.setState({
		          response: result,
		          formSuccess: 'Child category added successfully'
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
        const { subCategories } = this.state;
        const {categories , errors} = this.state;
        //console.log(subCategories);
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Manage Child Category</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Manage Child Category</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Manage Child Category</h3>

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
									    <label> Category <span className="error">*</span></label>
									      <select name="category_name" className="form-control"  onClick={this.onChangeSubcategory}  onChange={this.handleChange}>
										      <option value="0">--- Select Category ---</option>
										      {categories.map(category => (
										        <option value={category.id}>{category.category_name}</option>
										      ))}
									      </select>
									    </div>

									    <div className="form-group">
									    <label> Sub Category <span className="error">*</span></label>
									      <select name="sub_category_name" className="form-control"  onChange={this.handleChange}>
									      <option value="">--- Select Sub Category ---</option>
										       {subCategories.map(o => (<option key={o.id} value={o.id}>{o.sub_category_name}</option>))}
									      </select>
									    </div>

									    <div className="form-group">
									    <label> Clild Category <span className="error">*</span></label>
									      <input type="text" className="form-control" name="child_category_name"  onChange={this.handleChange} placeholder="Please enter child category name" />
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
