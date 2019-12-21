import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import { Row, Form, Col, Button } from 'react-bootstrap';
export default class brand extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			error:'',
			brands:[],
			response: {}
		}
	}

    componentDidMount() {
	    const apiUrl = 'http://localhost/react-ci/index.php/get-brand';

	    fetch(apiUrl)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            brands: result
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	      )
	}

	deleteBrand(brandId) {
	    const { brands } = this.state;

	    const apiUrl = 'http://localhost/react-ci/index.php/delete-brand';
	    const formData = new FormData();
	    formData.append('brandId', brandId);

	    const options = {
	      method: 'POST',
	      body: formData
	    }

	    fetch(apiUrl, options)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            response: result,
	            brands: brands.filter(brand => brand.id !== brandId),
	            formSuccess: 'Record deleted successfully'
	          });
	          setTimeout(()=> this.setState({formSuccess: ''}), 1000)
	        },
	        (error) => {
	          this.setState({ error });
	        }
      )
    }

	render() {
		const { error, brands} = this.state;
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Brand List</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Brand List</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12">

					        <div className="card">
					            <div className="card-header">
					              <h3 className="card-title">You can find all brand here</h3>
					               <Link to={"/add-brand"} className="btn btn-primary" style={{float:'right'}}>Add Brand</Link>
					            </div>
					            
					            <div className="card-body">
                                    {this.state.formSuccess ? <div className="alert alert-success alert-dismissible">
								        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
								        <strong>Success!</strong> {this.state.formSuccess}
								    </div> : ''}
						                <table className="table table-bordered table-striped">
						                <thead>
						                <tr>
						                  <th>S.No</th>
						                  <th> Name</th>
						                  <th>Status</th>
						                  <th>Action</th>
						                </tr>
						                </thead>
						                <tbody>
						                {brands.map(brand => (
						                	<tr key={brand.id}>
						                	    <td>1</td>
						                	    <td>{brand.name}</td>
						                	    <td>{brand.status == 1 ? 'Active':'Inactive'}</td>
						                	    <td><Link to={"/edit-brand/"+brand.id} className="btn btn-primary">Edit</Link> |
						                	    <Button variant="danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this brand?')) this.deleteBrand(brand.id) } } >Delete</Button></td>
						                	</tr>
						                ))}	
						                </tbody>
						                <tfoot>
						                <tr>
						                  <th>S.No</th>
						                  <th>Category Name</th>
						                  <th>Status</th>
						                  <th>Action</th>
						                </tr>
					                </tfoot>
					                </table>

					            </div>
					           
					        </div>
          

                        </div>
                    </div>
                </section>



			</div>
		);
	}
}
