import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios , {post} from 'axios';
export default class SingleUpload extends Component {

    constructor(props) {
		super(props);
		this.state = {
			title:''
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
	    console.log(e.target.name);
	}

	fileSelect = event => 
	{
	    this.setState({selectedFile: event.target.files[0]})
	    console.log(event.target.files[0])
	}
	fileUpload = (e) => {
	    const fd = new FormData();
	    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
	    //fd.append('title', this.state.title);
	    axios.post('http://localhost/react-ci/index.php/add-single-image', fd
	    ).then(res=>
	    {
	    console.log(res);
	    }
	    ); 
	}

	/*onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        console.log(this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        PostImage('http://localhost/react-ci/index.php/add-single-image',formData,config)
            .then((response) => {
                let responseJson = response;
	    		console.log(responseJson);
	    		this.setState({
		          response: response
		        })

            }).catch((error) => {
        });
    }
    */
    render(){

    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Single Upload File</h1>
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

								<div className="row">

								    <div className="col-md-6">
								       {/*<input type="text" className="form-control" name="title" placeholder="Enter product title" onChange={this.handleChange} />*/}
							           <input type="file" onChange = {this.fileSelect} />
                                       <button onClick = {this.fileUpload}>Upload</button>
	                                          
								    
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