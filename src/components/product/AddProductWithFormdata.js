import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';
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
	    this.radioChange = this.radioChange.bind(this)
	    //this.onChangeCheck= this.onChangeCheck.bind(this);
	    this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		const {name , value} = e.target;
		let errors= this.state.errors;
	    this.setState({[e.target.name]:e.target.value});
	    //console.log(this.state);
	}
    
    radioChange(e) {
	    /*this.setState({
	      selectedOption: e.currentTarget.value
	    });*/
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
	    //console.log(event.target.value);
	   
	}
	/*onChangeCheck(e){
		this.setState({[e.target.name]:e.target.checked});
	}*/



	onFormSubmit = (e) => {
	    /*e.preventDefault();
		const {name , value} = e.target;
		this.setState({[e.target.name]:e.target.value});
		console.log(this.state.product_availability);*/
		if(this.state.title)
	    {
	    	PostData('http://localhost/react-ci/index.php/add-product',this.state).then((result) => {
	    		let responseJson = result;
	    		console.log(responseJson);
	    		this.setState({
		          response: result
		        })
		        return <Redirect to='/subcategory'  />
        });
        }else{
	    	this.setState({
				formError: 'Please fill mandatory values',
		    })
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
	          //console.log(result);
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

	_handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
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
							  <Link to={"/category"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
							</div>
							</div>
							
							<div className="card-body">
							
							    {this.state.response.status === 'error' && <span style={{color: "Red"}}>{this.state.response.message}</span>}
							    {this.state.response.status === 'success' && <span style={{color: "Green"}}>{this.state.response.message}</span>}
							    <span style={{color: "Red"}}>{this.state.formError}</span>
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
									        <label> Product Availability Type <span className="error">*</span></label> &nbsp;
									        <input type="checkbox" value="cod" name="product_at"  onChange={this.handleChangeCheckbox}/> COD
									        <input type="checkbox" value="online" name="product_at"  onChange={this.handleChangeCheckbox}/> Online
									    </div>
									    <div className="form-group">
									        <label> Product Image Type <span className="error">*</span></label>
									        <input type="file" name="image" className="form-control" onChange={(e)=>this._handleImageChange(e)} />
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
