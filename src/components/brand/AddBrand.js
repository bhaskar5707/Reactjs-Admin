import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import { Row, Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';
export default class AddBrand extends React.Component {

	constructor(props) {
    super(props);
	    this.onBrandName = this.onBrandName.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {
	      brand_name: ''
	    }
    }

    onBrandName(e) {
	    this.setState({
	      brand_name: e.target.value
	    });
	}


	onSubmit(e) {
	    e.preventDefault();
	    /*const obj = {
	      brand_name: this.state.brand_name
	    };*/
	    if(this.state.brand_name)
	    {
		    const obj = new FormData();
		    obj.append('brand_name', this.state.brand_name);
		    //console.log(obj);
		    //console.log(this.state.brand_name);
		    axios.post('http://localhost/react-ci/index.php/add-brand', obj)
		        .then(res => console.log(res.data));
		    
		    this.setState({
		        brand_name: '',
		        formSuccess: 'Brand added successfully'
		    })
		    setTimeout(()=> this.setState({formSuccess: ''}), 1000)
		}else{
	    	this.setState({
				formError: 'Please enter brand name',
		    })
		    setTimeout(()=> this.setState({formError: ''}), 1000)
	    }
	}
 

	render() {
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Brand</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Brand</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Brand</h3>
           
							<div className="card-tools">
							  <Link to={"/brand"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
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
								    <form onSubmit={this.onSubmit}> 
								        <div className="form-group">
									    <label> Brand Name <span className="error">*</span></label>
									      <input type="text" className="form-control" name="brand_name" placeholder="Enter brand Name" onChange={this.onBrandName} value={this.state.brand_name} />
									      
									    </div>
									    <div className="form-group">
									      <input type="submit" value="Save Brand" className="btn btn-success" onClick={this.onFormSubmit} />
									    </div>
									</form>
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
