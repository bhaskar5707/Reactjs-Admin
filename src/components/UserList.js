import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
export default class UserList extends Component {

    render(){
    	const divStyle = {
		  'width': '100%',
		};

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
					                  <th>First Name</th>
					                  <th>Last Name</th>
					                  <th>Email Is</th>
					                  <th>Mobile Number</th>
					                  <th>Country</th>
					                </tr>
					                </thead>
					                <tbody>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
						                <tr>
						                  <td>Sunil Kumar</td>
						                  <td>Bhaskar</td>
						                  <td>sunil@recenturesoft.com</td>
						                  <td>9910625707</td>
						                  <td>India</td>
						                </tr>
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