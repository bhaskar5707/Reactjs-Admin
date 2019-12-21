import React, {Component} from 'react';
import { NavLink , Redirect} from 'react-router-dom';
export default class Dashboard extends Component {
//https://stackoverflow.com/questions/48076773/load-options-of-a-select-box-dynamically-based-on-value-of-another-select-box-in   
    constructor(props) {
		super(props);
		this.state = {
			error:'',
			totalCategory:[],
			totalSubCategory:[],
			totalActiveUser:[],
			totalChildCategory:[],
			totalUser:[],
			response: {}
		}
	}

	componentDidMount() {
	    const totalCategory = 'http://localhost/react-ci/index.php/total-category';

	    fetch(totalCategory)
        .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            totalCategory: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
        )

        const totalSubCategory = 'http://localhost/react-ci/index.php/total-subcategory';

	    fetch(totalSubCategory)
        .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            totalSubCategory: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
        )

        const totalChildCategory = 'http://localhost/react-ci/index.php/total-childcategory';

	    fetch(totalChildCategory)
        .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            totalChildCategory: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
        )

        const totalUser = 'http://localhost/react-ci/index.php/total-user';

	    fetch(totalUser)
        .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            totalUser: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
        )

        const totalActiveUser= 'http://localhost/react-ci/index.php/total-active-user';

	    fetch(totalActiveUser)
        .then(res => res.json())
        .then(
        (result) => {
          this.setState({
            totalActiveUser: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({ error });
        }
        )
	}


    render(){
    	const divStyle = {
		  'font-size': '20px',
		};
		const {totalCategory , totalSubCategory , totalChildCategory , totalUser , totalActiveUser} = this.state;
        return (
	            <div className="content-wrapper">
				   
				    <div className="content-header">
				      <div className="container-fluid">
				        <div className="row mb-2">
				          <div className="col-sm-6">
				            <h1 className="m-0 text-dark">Dashboard </h1>
				          </div>
				          <div className="col-sm-6">
				            <ol className="breadcrumb float-sm-right">
				              <li className="breadcrumb-item"><NavLink href="dd.html">Home</NavLink></li>
				              <li className="breadcrumb-item active">Dashboard v1</li>
				            </ol>
				          </div>
				        </div>
				      </div>
				    </div>
				  

				   
				    <section className="content">
				      <div className="container-fluid">
				       
				        <div className="row">
				          <div className="col-lg-3 col-6">
				            
				            <div className="small-box bg-info">
				              <div className="inner">
				                <h3>{totalCategory.status}</h3>

				                <p>Category</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-bag"></i>
				              </div>
				              <NavLink to="/category" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
				            </div>
				          </div>
				         
				          <div className="col-lg-3 col-6">
				            
				            <div className="small-box bg-default">
				              <div className="inner">
				                <h3>{totalSubCategory.status}</h3>

				                <p>Sub Category</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-stats-bars"></i>
				              </div>
				              <NavLink to="/subcategory" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
				            </div>
				          </div>
				          <div className="col-lg-3 col-6">
				            
				            <div className="small-box bg-primary">
				              <div className="inner">
				                <h3>{totalChildCategory.status}</h3>

				                <p>Child Category</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-stats-bars"></i>
				              </div>
				              <NavLink to="/childcategory" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
				            </div>
				          </div>
				        
				          <div className="col-lg-3 col-6">
				           
				            <div className="small-box bg-warning">
				              <div className="inner">
				                <h3>{totalUser.status}</h3>

				                <p>Users</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-person-add"></i>
				              </div>
				              <NavLink to="/user-list" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
				            </div>
				          </div>
				         
				          <div className="col-lg-3 col-6">
				            
				            <div className="small-box bg-success">
				              <div className="inner">
				                <h3>{totalActiveUser.status}</h3>

				                <p>Active Users</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-pie-graph"></i>
				              </div>
				              <NavLink to="/user-list" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></NavLink>
				            </div>
				          </div>
				         
				        </div>
				       

				      
				      </div>
				    </section>
				    
				</div>
        )
    }
}