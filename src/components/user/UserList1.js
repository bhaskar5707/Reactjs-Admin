import React, {Component} from 'react';
import { NavLink , Table } from 'react-router-dom';

export default class UserList extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      data: [],
	    }
	}

	componentDidMount() {

	    /*const apiUrl = 'http://localhost/react-php/api/index.php';
        const type ='GET_USER';

	    fetch(apiUrl+'?tp='+type)
        
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            users: result
	          });
	        },
	        (error) => {
	          this.setState({ error });
	        }
	    )*/

	    fetch('http://facebook.github.io/react-native/movies.json')
	    .then((Response)=>Response.json())
	    .then((findresponse)=>
	     {
             console.log(findresponse);
             this.setState({
             	data:findresponse.movies,
             })
	     })

	}

    render(){
    	const divStyle = {
		  'width': '100%',
		};
		const { error, users} = this.state;
		console.log(users);
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
					              <table id="example1" className="table table-bordered table-striped">
					                <thead>
					                <tr>
					                  <th>Name</th>
					                  <th>Email</th>
					                  <th>Mobile</th>
					                  <th>Country</th>
					                  <th>State</th>
					                  <th>city</th>
					                </tr>
					                </thead>
					                <tbody>

					                {
					                	this.state.data.map((dynamicData, i)=>
					                	<div>
					                	    {dynamicData.title}
					                	    {dynamicData.releaseYear}
					                	</div>
					                	)
					                }
					                
					                </tbody>
					                <tfoot>
					                <tr>
					                  <th>Rendering engine</th>
					                  <th>Browser</th>
					                  <th>Platform(s)</th>
					                  <th>Engine version</th>
					                  <th>CSS grade</th>
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