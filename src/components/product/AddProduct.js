import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';
import axios , {post} from 'axios';
export default class AddProduct extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title:'',
			sku:'',
			buyer_price:'',
			seller_price:'',
			discount_type:'',
			discount:'',
			description:'',
			category_name:'',
			sub_category_name:'',
			child_category_name:'',
			product_availability:'',
			stock:'',
	        categories:[],
	        subCategories:[],
	        ChildCategories:[],
	        categoryId:'',
	        subcategoryId:'',
	        selectedOption:'',
	        response:{}
	    }
	    this.handleChange= this.handleChange.bind(this);
	    this.handleChangeCheckbox= this.handleChangeCheckbox.bind(this);
	    this.radioChange = this.radioChange.bind(this);
	    this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	state = {
	    selectedFile : null,
	}

	handleChange(e){
		e.preventDefault();
		const {name , value} = e.target;
		let errors= this.state.errors;
	    this.setState({[e.target.name]:e.target.value});
	}
    
    radioChange(e) {
	    this.setState({[e.target.name]:e.currentTarget.value});
	}
	handleChangeCheckbox(event, optionID) {
	    this.selected = this.selected || {};
	    if (event.target.checked) {
	      this.selected[optionID] = true;
	    } else {
	      delete this.selected[optionID];
	    }
	    this.setState({[event.target.name]:event.target.value});
	   
	}
	

	fileSelect = event => 
	{
	    this.setState({selectedFile: event.target.files[0]})
	}

    onFormSubmit = (e) => {
    if( this.state.title && 
        this.state.sku && 
        this.state.buyer_price &&
        this.state.seller_price && 
        this.state.category_name && 
        this.state.sub_category_name && 
        this.state.child_category_name &&
        this.state.product_availability && 
        this.state.stock && 
        this.state.selectedFile)
	    {
	        const fd = new FormData();
		    fd.append('title', this.state.title);
		    fd.append('sku', this.state.sku);
		    fd.append('buyer_price', this.state.buyer_price);
		    fd.append('seller_price', this.state.seller_price);
		    fd.append('discount_type', this.state.discount_type);
		    fd.append('discount', this.state.discount);
		    fd.append('description', this.state.description);
		    fd.append('category', this.state.category_name);
		    fd.append('sub_category', this.state.sub_category_name);
		    fd.append('child_category', this.state.child_category_name);
		    fd.append('product_availability', this.state.product_availability);
		    fd.append('stock', this.state.stock);
		    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

		    
		    axios.post('http://localhost/react-ci/index.php/add-product-with-image', fd
		    ).then(response=>
		    {
		    	this.setState({
			        response: response,
			        formSuccess: 'Product added successfully'
			    })
			    setTimeout(()=> this.setState({formSuccess: ''}), 1000)
			    //console.log(response.data.status);
		    }
		    ); 
	    }
	    else{
	    	this.setState({
	    		formError:'Please fill all mandatory fields',
	    	})
	    	setTimeout(()=> this.setState({formError: ''}), 1000)
	    }
	   
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
	        },
	        (error) => {
	          this.setState({ error });
	        }
	      )
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
		        this.setState({
		            subCategories: result
		        });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )

	}

	onChangeChildcategory = ({ target: { value } }) => {
	    this.setState({ dataValue: value });
        const apiUrl = 'http://localhost/react-ci/index.php/get-childcategory-by-subcategory';

	    const formData = new FormData();
	    formData.append('subcategoryId', value);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }
        fetch(apiUrl, options)
        
	        .then(res => res.json())
	        .then((result) => {
                //console.log(result);
		        this.setState({
		            ChildCategories: result
		        });
		        //console.log(result);
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )
	}

     
	render() {

		const {categories , subCategories , ChildCategories} = this.state;
		let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    if (imagePreviewUrl) {
	      $imagePreview = (<img src={imagePreviewUrl} style={{width:'35%',marginTop:'10px'}}/>);
	    } else {
	      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
	    }
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Products</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Products</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Products</h3>

							<div className="card-tools">
							  <Link to={"/products"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
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
									        <label> Product Title <span className="error">*</span></label>
									        <input type="text" className="form-control" name="title" placeholder="Enter product title" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label> Product Sku <span className="error">*</span></label>
									        <input type="text" className="form-control" name="sku" placeholder="Enter product sku" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Buyer Price <span className="error">*</span></label>
									        <input type="text" className="form-control" name="buyer_price" placeholder="Enter product buyer price" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label> Seller Price <span className="error">*</span></label>
									        <input type="text" className="form-control" name="seller_price" placeholder="Enter product seller price" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Discount Type</label>
									        <select className="form-control" name="discount_type" onChange={this.handleChange} >
									            <option>--- Select Discount Type ---</option>
									            <option value="1">In Percentage (%)</option>
									            <option value="2">Fix Discount</option>
									        </select>
									    </div>
									    <div className="form-group">
									        <label>Product Discount </label>
									        <input type="text" className="form-control" name="discount" placeholder="Enter product discount" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Product Description </label>
									        <textarea className="form-control" name="description" onChange={this.handleChange}></textarea>
									    </div>


									    <div className="form-group">
									      <input type="submit" value="Save Product" className="btn btn-success" onClick={this.onFormSubmit} />
									    </div>
                                    </div>

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
									      <select name="sub_category_name" className="form-control" onClick={this.onChangeChildcategory}  onChange={this.handleChange}>
									      <option value="">--- Select Sub Category ---</option>
										       {subCategories.map(o => (<option key={o.id} value={o.id}>{o.sub_category_name}</option>))}
									      </select>
									    </div>

									    <div className="form-group">
									    <label> Child Category <span className="error">*</span></label>
									      <select name="child_category_name" className="form-control" onChange={this.handleChange}>
									      <option value="">--- Select Sub Category ---</option>
										       {ChildCategories.map(o => (<option key={o.id} value={o.id}>{o.child_category_name}</option>))}
									      </select>
									    </div>

									    <div className="form-group">
									        <label> Product Availability <span className="error">*</span></label> &nbsp;
									        <input type="radio" name="product_availability" value="1"  onChange={this.radioChange}  /> In Stock &nbsp;
									        <input type="radio" name="product_availability" value="2"  onChange={this.radioChange}  /> Out of  Stock
									        {/*<h3>this.state.selectedOption: {this.state.selectedOption}</h3>*/}
									    </div>
									    <div className="form-group">
									        <label> Product Stock <span className="error">*</span></label>
									        <input type="text" className="form-control" name="stock" placeholder="Enter product stock" onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label> Product Image Type <span className="error">*</span></label>
									        <input type="file" className="form-control" onChange = {this.fileSelect} />
									        <div className="imgPreview">
									          {$imagePreview}
									        </div>
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
