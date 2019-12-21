import React, {Component} from 'react';
import { NavLink , Table , Link} from 'react-router-dom';
import axios from 'axios';

export default class UserList extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      users: [],
	      response: {}
	    }
	    //this.deleteProduct = this.deleteProduct.bind(this);
	}

	componentDidMount() {
	    const apiUrl = 'http://localhost/react-php/api/index.php';
        const type ='GET_USER';

	    fetch(apiUrl+'?tp='+type)
        
	        .then(res => res.json())
	        .then((result) => {
                //console.log(result);
		        this.setState({
		            users: result.UserList
		        });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )

	}

	deleteProduct(userId) {
        //alert(userId);
	    const { users } = this.state;
        const type ='USER_DELETE';

	    const apiUrl = 'http://localhost/react-php/api/index.php';
	    const formData = new FormData();
	    formData.append('userId', userId);
        
	    const options = {
	        method: 'POST',
	        body: formData
        }

        //console.log(options);
        fetch(apiUrl+'?tp='+type, options)
        .then(res => res.json())
        .then(
        (result) => {
          //console.log(result);
          this.setState({
            response: result,
            users: users.filter(dynamicData => dynamicData.user_id !== userId)
          });

        },
        (error) => {
          this.setState({ error });
        }
        )
    }



    render(){
    	const divStyle = {
		  'width': '100%',
		};
		const { error, users} = this.state;
        if(error) {
	      return (

	        <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>User List</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">User List</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12">
					        <div className="card">
					            
					            Error: {error.message}
					         
					        </div>
                        </div>
                    </div>
                </section>

			</div>

	      )
	    } else {
        return (
        	<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>User List</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">User List</li>
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
					              <h3 className="card-title">You can find all user list here</h3>
					            </div>
					            
					            <div className="card-body">
					              <table className="table table-bordered table-striped">
					                <thead>
					                <tr>
					                  <th>Name</th>
					                  <th>Email</th>
					                  <th>Mobile</th>
					                  <th>Country</th>
					                  <th>State</th>
					                  <th>city</th>
					                  <th>Action</th>
					                </tr>
					                </thead>
					                <tbody>
					                {
					                	this.state.users.map((dynamicData, i)=>
					                	<tr key={dynamicData.id}>
					                	    <td>{dynamicData.name}</td>
					                	    <td>{dynamicData.email}</td>
					                	    <td>{dynamicData.mobile}</td>
					                	    <td>{dynamicData.country}</td>
					                	    <td>{dynamicData.state}</td>
					                	    <td>{dynamicData.city}</td>
					                	    <td><Link to={"/edit/"+dynamicData.user_id} className="btn btn-primary">Edit</Link> | <input type="submit" value="Delete" className="btn btn-danger"  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this user?')) this.deleteProduct(dynamicData.user_id) } } /></td>
					                	</tr>
					                	)
					                }
					                </tbody>
					                <tfoot>
					                <tr>
					                  <th>Name</th>
					                  <th>Email</th>
					                  <th>Mobile</th>
					                  <th>Country</th>
					                  <th>State</th>
					                  <th>city</th>
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
	            
        )
        }
    }
}