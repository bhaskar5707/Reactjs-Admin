import React from 'react';
import { NavLink , Link , Redirect} from 'react-router-dom';
import {PostData} from '../category/PostData';
import { Row, Form, Col, Button } from 'react-bootstrap';

const lookup = {
  "int": [
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' }
  ],
  "abc": [
    { id: 'a', text: 'a' },
    { id: 'b', text: 'b' },
    { id: 'c', text: 'c' },
    { id: 'd', text: 'd' },
    { id: 'e', text: 'e' }
  ]
}

export default class AddChildCategory1 extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      dataValue: 'int'
	    }
	}

	onChange = ({ target: { value } }) => {
	    this.setState({ dataValue: value });
	}

	render() {
        const { dataValue } = this.state;
        const options = lookup[dataValue];
		return (
			<div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Manage Sub Category</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Manage Sub Category</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Manage Sub Category</h3>

							<div className="card-tools">
							  <Link to={"/subcategory"} className="btn btn-primary" style={{float:'right'}}>Back</Link>
							</div>
							</div>
							
							<div className="card-body">
							
						    <span style={{color: "Red"}}></span>
								<div className="row">
                                    
								    <div className="col-md-6">
								        <div className="form-group">
									    <label> Category Name <span className="error">*</span></label>
									        <select onChange={this.onChange}>
									            <option value="int">Integers</option>
									            <option value="abc">Alphabets</option>
									        </select>
									    </div>
                                    </div>

                                    <div className="col-md-6">
								        <div className="form-group">
									    <label> Category Name <span className="error">*</span></label>
									        <select>
									          {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
									        </select>
									    </div>
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
