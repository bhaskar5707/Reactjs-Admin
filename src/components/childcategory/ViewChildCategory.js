import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import { Row, Form, Col, Button } from 'react-bootstrap';
export default class ViewChildCategory extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			error:'',
			categories:[],
			response: {}
		}
	}

	componentDidMount() {
	    const apiUrl = 'http://localhost/react-ci/index.php/childcategory';

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

	deleteChildCategory(categoryId) {
	    const { categories } = this.state;

	    const apiUrl = 'http://localhost/react-ci/index.php/delete-childcategory';
	    const formData = new FormData();
	    formData.append('categoryId', categoryId);

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
	            categories: categories.filter(category => category.id !== categoryId),
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
		const { error, categories} = this.state;
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Child category List</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Child Category List</li>
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
					              <h3 className="card-title">You can find all child category list here</h3>
					               <NavLink to={"/add-childcategory"} className="btn btn-primary" style={{float:'right'}}>Add Child Category</NavLink>
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
					                  <th>Child Category</th>
					                  <th>Category</th>
					                  <th>Sub Category</th>
					                  <th>Status</th>
					                  <th>Action</th>
					                </tr>
					                </thead>
					                <tbody>
					                {categories.map(category => (
					                	<tr key={category.id}>
					                	    <td>1</td>
					                	    <td>{category.child_category_name}</td>
					                	    <td>{category.category_name}</td>
					                	    <td>{category.sub_category_name}</td>
					                	    <td>{category.status == 1 ? 'Active':'Inactive'}</td>
					                	    <td><NavLink to={"/edit-child-category/"+category.id} className="btn btn-primary">Edit</NavLink> |<Button variant="danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this category?')) this.deleteChildCategory(category.id) } } >Delete</Button></td>
					                	</tr>
					                ))}	
					                </tbody>
					                <tfoot>
					                <tr>
					                  <th>S.No</th>
					                  <th>Child Category</th>
					                  <th>Category</th>
					                  <th>Sub Category</th>
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
