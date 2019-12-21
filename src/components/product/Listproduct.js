import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import { Row, Form, Col, Button } from 'react-bootstrap';
export default class Listproduct extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			error:'',
			products:[],
			response: {}
		}
	}
	componentDidMount() {
	    const apiUrl = 'http://localhost/react-ci/index.php/products';

	    fetch(apiUrl)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            products: result
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	      )
	}
	deleteProduct(productId) {
	    const { products } = this.state;

	    const apiUrl = 'http://localhost/react-ci/index.php/delete-product';
	    const formData = new FormData();
	    formData.append('productId', productId);

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
	            products: products.filter(product => product.id !== productId)
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
      )
    }

	render() {
		const imageWidth = {
			width:'100px'
		}
		const { error, products} = this.state;
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Product List</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Product List</li>
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
					              <h3 className="card-title">You can find all product list here</h3>
					               <NavLink to={"/add-product"} className="btn btn-primary" style={{float:'right'}}>Add Product</NavLink>
					            </div>
					            
					            <div className="card-body">
					              <table className="table table-bordered table-striped">
					                <thead>
					                <tr>
					                  <th>S.No</th>
					                  <th>Image</th>
					                  <th>Product Name</th>
					                  <th>Price</th>
					                  <th>Category</th>
					                  <th>Sub Category</th>
					                  <th>Child Category</th>
					                  <th>Stock</th>
					                  <th>Stock Status</th>
					                  <th>Status</th>
					                  <th>Action</th>
					                </tr>
					                </thead>
					                <tbody>
					                {products.map(product => (
					                	<tr key={product.productId}>
					                	    <td>1</td>
					                	    <td><img style={imageWidth} src="http://localhost/react-ci/image/a1.jpeg"/></td>
					                	    <td>{product.title}</td>
					                	    <td>Rs. {product.seller_price}</td>
					                	    <td>{product.category_name}</td>
					                	    <td>{product.sub_category_name}</td>
					                	    <td>{product.child_category_name}</td>
					                	    <td>{product.stock}</td>
					                	    <td>{product.product_availability == 1 ? 'In Stock':'Out Of Stock'}</td>
					                	    <td>{product.status == 1 ? 'Active':'Inactive'}</td>
					                	    <td><NavLink to={"/edit-product/"+product.productId} className="btn btn-primary">Edit</NavLink> |<Button variant="danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this product?')) this.deleteProduct(product.id) } } >Delete</Button></td>
					                	</tr>
					                ))}	
					                </tbody>
					                <tfoot>
					                <tr>
					                  <th>S.No</th>
					                  <th>Image</th>
					                  <th>Product Name</th>
					                  <th>Price</th>
					                  <th>Category</th>
					                  <th>Sub Category</th>
					                  <th>Child Category</th>
					                  <th>Stock</th>
					                  <th>Stock Status</th>
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
