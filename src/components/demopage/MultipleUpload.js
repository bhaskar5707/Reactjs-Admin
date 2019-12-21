import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
//https://dzone.com/articles/react-image-upload-how-its-done

const BASE_URL = 'http://localhost/react-ci/index.php/add-multiple-image/';
export default class MultipleUpload extends Component {


constructor(props) {
	super(props);
	this.state = {
	images: [],
	imageUrls: [],
	message: ''
	}
}

selectImages = (event) => {
	let images = []
	for (var i = 0; i < event.target.files.length; i++) {
	images[i] = event.target.files.item(i);
	}
	images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
	let message = `${images.length} valid image(s) selected`
	this.setState({ images, message })
}

uploadImages = () => {
	const uploaders = this.state.images.map(image => {
	const data = new FormData();
	data.append("image", image, image.name);
	// Make an AJAX upload request using Axios
	return axios.post(BASE_URL, data)
		.then(response => {
	    //console.log(response);
		this.setState({
		imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
		});
		})
	});
	// Once all the files are uploaded 
	axios.all(uploaders).then(() => {
	console.log('done');
	}).catch(err => alert(err.message));
}


render(){
  
    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Multiple Upload File</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Multiple Upload File</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Multiple Upload File</h3>

							<div className="card-tools">
							  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
							  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
							</div>
							</div>
							
							<div className="card-body">

								<div className="row">

								    <div className="col-md-6">
								        
								        <div className="col-sm-12">
											<h1>Image Uploader </h1><hr/>
											<div className="col-sm-4">
											<input className="form-control " type="file" 
											onChange={this.selectImages} multiple/>
											</div>
											<p className="text-info">{this.state.message}</p>
											<br/><br/><br/>
											<div className="col-sm-4">
											<button className="btn btn-primary" value="Submit" 
											onClick={this.uploadImages}>Submit</button>
											</div>
											</div>
											<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/>
											<div className="row col-lg-12">
											{ 
											this.state.imageUrls.map((url, i) => (
											<div className="col-lg-2" key={i}>
											<img src={BASE_URL + url} className="img-rounded img-responsive"
											alt="not available"/><br/>
											</div>
											
											))
											}
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