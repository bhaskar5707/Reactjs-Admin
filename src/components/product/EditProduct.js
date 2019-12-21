import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';
import axios , {post} from 'axios';
export default class EditProduct extends React.Component {

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
			product_image:'',
	        categories:[],
	        subcategory:[],
	        childcategory:[],
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
    e.preventDefault();
    if( this.state.title && 
        this.state.sku && 
        this.state.buyer_price &&
        this.state.seller_price && 
        this.state.category_name && 
        this.state.sub_category_name && 
        this.state.child_category_name &&
        this.state.product_availability && 
        this.state.stock)
	    {
	        const fd = new FormData();
		    fd.append('title', this.state.title);
		    fd.append('productId', this.state.productId);
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
		    if(this.state.selectedFile)
		    {
		    	fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
		    }else{
		    	fd.append('oldimage', this.state.product_image);
		    }
		    
		    
		    axios.post('http://localhost/react-ci/index.php/edit-product-with-image', fd
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

        const apiUrl = 'http://localhost/react-ci/index.php/edit-product';
      
        const productId= this.props.match.params.id;
        const formData = new FormData();
	    formData.append('productId', productId);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }
       

	    fetch(apiUrl, options)
        
	        .then(res => res.json())
	        .then((result) => {
                console.log(result);
		        this.setState({
		        	productId: result.productId,
		            title: result.title,
		            sku: result.sku,
		            buyer_price: result.buyer_price,
		            seller_price: result.seller_price,
		            discount_type: result.discount_type,
		            discount: result.discount,
		            description: result.description,
		            category_name: result.category,
		            sub_category_name: result.sub_category,
		            child_category_name: result.child_category,
		            product_availability: result.product_availability,
		            product_image: result.product_image,
		            stock: result.stock
		        });
		        //console.log(result.id);
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

	    const apiUrl3 = 'http://localhost/react-ci/index.php/childcategory';
	    fetch(apiUrl3)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            childcategory: result
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

		const {categories , subcategory, childcategory, subCategories , ChildCategories} = this.state;
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
									        <input type="text" className="form-control" name="title" placeholder="Enter product title" value={this.state.title} onChange={this.handleChange} />
									        <input type="hidden" className="form-control" name="productId"  value={this.state.productId} onChange={this.handleChange} />
									        
									    </div>
									    <div className="form-group">
									        <label> Product Sku <span className="error">*</span></label>
									        <input type="text" className="form-control" name="sku" placeholder="Enter product sku" value={this.state.sku} onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Buyer Price <span className="error">*</span></label>
									        <input type="text" className="form-control" name="buyer_price" placeholder="Enter product buyer price" value={this.state.buyer_price} onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label> Seller Price <span className="error">*</span></label>
									        <input type="text" className="form-control" name="seller_price" placeholder="Enter product seller price" value={this.state.seller_price} onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Discount Type</label>
									        <select className="form-control" name="discount_type" onChange={this.handleChange} >
									            <option>--- Select Discount Type ---</option>
									            <option value="1" selected={
                                                   (this.state.discount_type == 1) ? 'selected' : ''
                                                   }>In Percentage (%)</option>
									            <option value="2" selected={
                                                   (this.state.discount_type == 2) ? 'selected' : ''
                                                   }>Fix Discount</option>
									        </select>
									    </div>
									    <div className="form-group">
									        <label>Product Discount </label>
									        <input type="text" className="form-control" name="discount" placeholder="Enter product discount" value={this.state.discount} onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label>Product Description </label>
									        <textarea className="form-control" name="description" onChange={this.handleChange} value={this.state.description}  > </textarea>
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
										        <option value={category.id} selected={
                                                   (category.id == this.state.category_name) ? 'selected' : ''
                                                   }>{category.category_name}</option>
										      ))}
									      </select>
									    </div>

									    <div className="form-group">
									      <label>Sub Category <span className="error">*</span></label>
									      <select name="sub_category_name" className="form-control" onClick={this.onChangeChildcategory}  onChange={this.handleChange}>
									      <option value="">--- Select Sub Category ---</option>
                                            {subcategory.map(category => (
									        <option value={category.id}   selected={
                                                   (category.id == this.state.sub_category_name) ? 'selected' : ''
                                            }>{category.sub_category_name}</option>

									      ))}
									      </select>
									    </div>

									    <div className="form-group">
									    <label> Child Category <span className="error">*</span></label>
									      <select name="child_category_name" className="form-control" onChange={this.handleChange}>
									      <option value="">--- Select Sub Category ---</option>
										       {childcategory.map(o => (<option key={o.id} value={o.id}  selected={
                                                   (o.id == this.state.child_category_name) ? 'selected' : ''
                                            }>{o.child_category_name}</option>))}
									      </select>
									    </div>

									    <div className="form-group">
									        <label> Product Availability <span className="error">*</span></label> &nbsp;
									        <input type="radio" name="product_availability" value="1"  onChange={this.radioChange} checked={
                                                   (this.state.product_availability == 1) ? 'checked' : '' } /> In Stock &nbsp;
									        <input type="radio" name="product_availability" value="2"  onChange={this.radioChange} checked={
                                                   (this.state.product_availability == 2) ? 'checked' : ''} /> Out of  Stock
									        {/*<h3>this.state.selectedOption: {this.state.selectedOption}</h3>*/}
									    </div>
									    <div className="form-group">
									        <label> Product Stock <span className="error">*</span></label>
									        <input type="text" className="form-control" name="stock" placeholder="Enter product stock" value={this.state.stock} onChange={this.handleChange} />
									    </div>
									    <div className="form-group">
									        <label> Product Image Type <span className="error">*</span></label>
									        <input type="file" className="form-control" onChange = {this.fileSelect} />
									        <div className="imgPreview">
									          {$imagePreview} 
									        </div>
									        <input type="hidden" name="product_image" className="form-control"  value={this.state.product_image}   onChange={this.handleChange} />
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
