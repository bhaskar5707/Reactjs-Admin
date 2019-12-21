import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios , {post} from 'axios';
export default class SingleUploadWithData extends Component {

    constructor(props) {
		super(props);
		this.state = {
			title:'',
			response:{}
	    }
	    this.handleChange= this.handleChange.bind(this);
	}

	state = {
	    selectedFile : null,
	}

	handleChange(e){
		e.preventDefault();
		const {name , value} = e.target;
		let errors= this.state.errors;
	    this.setState({[e.target.name]:e.target.value});
	    //console.log(e.target.name);
	}

	fileSelect = event => 
	{
	    this.setState({selectedFile: event.target.files[0]})
	    //console.log(event.target.files[0])
	}
	fileUpload = (e) => {
	    const fd = new FormData();
	    fd.append('title', this.state.title);
	    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
	    //fd.append('title', this.state.title);
	    axios.post('http://localhost/react-ci/index.php/add-single-image-with-data', fd
	    ).then(result=>
	    {
	    	this.setState({
		        response: result
		    })
	       //console.log(result.data);
	    }
	    ); 
	}

    render(){

    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Single Upload File With Data</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Single Upload File</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Single Upload File</h3>

							<div className="card-tools">
							  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
							  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
							</div>
							</div>
							
							<div className="card-body">
							    {this.state.response.status === 'error' && <span style={{color: "Red"}}>{this.state.response.message}</span>}
							    {this.state.response.status === 'success' && <span style={{color: "Green"}}>{this.state.response.message}</span>}
							    

								<div className="row">

								    <div className="col-md-6">
								        <div className="form-group">
									        <label> Title <span className="error">*</span></label>
								            <input type="text" className="form-control" name="title" placeholder="Enter product title" onChange={this.handleChange} />
								        </div>
								        <div className="form-group">
									        <label> image <span className="error">*</span></label>
							                <input type="file" onChange = {this.fileSelect} />
							            </div>
							            <div className="form-group">
                                            <button onClick = {this.fileUpload} className="btn btn-default">Upload</button>
                                        </div>
	                                          
								    
								    </div>
								  
								</div>
							
							</div>
						</div>


                    </div>
			    </section>


			   
			</div>
    )
}
}