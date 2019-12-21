import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class AddMore extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }]
    };

  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };


render(){
    
    return (
            <div className="content-wrapper">
			    <section className="content-header">
				    <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1>Add More Field</h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
				              <li className="breadcrumb-item active">Add More Field</li>
				            </ol>
				          </div>
				        </div>
				    </div>
			    </section>

			    <section className="content">
                    <div className="container-fluid">
						<div className="card card-default">
							<div className="card-header">
							<h3 className="card-title">Add More Field</h3>

							<div className="card-tools">
							  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
							  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
							</div>
							</div>
							
							<div className="card-body">

								<div className="row">

								    <div className="col-md-6">
								        
								        <form onSubmit={this.handleSubmit}>
								            <div className="form-group">
									        <input
									          type="text"
									          className="form-control"
									          placeholder="Company name, e.g. Magic Everywhere LLC"
									          value={this.state.name}
									          onChange={this.handleNameChange}
									        />
									        </div>

									        <h4>Add More Field</h4>

									        {this.state.shareholders.map((shareholder, idx) => (
									            <div className="shareholder">
										            <div className="form-group">
											            <input
											              type="text"
											              className="form-control"
											              placeholder={`add more #${idx + 1} name`}
											              value={shareholder.name}
											              onChange={this.handleShareholderNameChange(idx)}
											            />
										            </div>

										            <button
										              type="button"
										              onClick={this.handleRemoveShareholder(idx)}
										              className="btn btn-danger"
										            >
										              -
										            </button>

									          </div>
									        ))}
									        <div className="form-group">
									        <button
									          type="button"
									          onClick={this.handleAddShareholder}
									          className="btn btn-success"
									        >
									          Add More
									        </button>
                                             &nbsp;
									        <button className="btn btn-primary">Save Now</button>

									        </div>
									        
								        </form>

								        
								    
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