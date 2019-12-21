import React, {Component} from 'react';
import { NavLink , Redirect} from 'react-router-dom';
import {PostData} from '../user/PostData';
export default class SideBar extends Component {
    constructor(props) {
      super(props);

      this.state = {
        redirectToReferrer: false,
      };
      this.logout = this.logout.bind(this);
      this.GetLoginDetail = this.GetLoginDetail.bind(this);
    }
    GetLoginDetail() 
    {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      //this.setState({name:data.userData.username});
      //console.log(data.userData);
      let postData = { user_id: data.userData};
      if (data) {
        PostData('GetLoginDetail', postData).then((result) => {
        let responseJson = result;
          //console.log(result.name);
          if(responseJson.userData){
          this.setState({data: responseJson.userData});
            console.log(this.state);
          }
        });
      }
    }

    componentWillMount() {
      if(sessionStorage.getItem("userData")){
        this.GetLoginDetail();
        //console.log(sessionStorage.getItem("userData"));
      }
      else{
      this.setState({redirectToReferrer: true});
      }
    }
    onChange(e){
      this.setState({userFeed:e.target.value});
    }

    logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.setState({redirectToReferrer: true});
       }
    render(){
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/'}/>)
        }
        return (
             <aside className="main-sidebar sidebar-dark-primary elevation-4">
               
                <NavLink to="/dashboard" className="brand-link">
                  <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                       />
                  <span className="brand-text font-weight-light">User Management</span>
                </NavLink>

               
                <div className="sidebar">
                  
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                    </div>
                    <div className="info"> 
                      <NavLink to="/dashboard" className="d-block" onChange={this.onChange}>{this.state.name}</NavLink>
                      <NavLink to="/" onClick={this.logout} className="logout">Logout</NavLink>
                    </div>
                  </div>

                 
                  <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                      
                      <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">
                          <i className="nav-icon fas fa-th"></i>
                          <p>
                            Dashboard
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item has-treeview">
                        <NavLink href="#" className="nav-link">
                          <i className="nav-icon fas fa-copy"></i>
                          <p>
                            Product Management
                            <i className="fas fa-angle-left right"></i>
                            <span className="badge badge-info right">6</span>
                          </p>
                        </NavLink>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <NavLink to="/brand" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Brand</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Category Management</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/subcategory" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Subategory Management</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/childcategory" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Child Category Management</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/products" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Product Management</p>
                            </NavLink>
                          </li>

                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/adduser" className="nav-link">
                          <i className="nav-icon fas fa-th"></i>
                          <p>
                            Add User
                            <span className="right badge badge-danger">New</span>
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/user-list" className="nav-link">
                          <i className="nav-icon fas fa-th"></i>
                          <p>
                            User List
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                          <i className="nav-icon fas fa-th"></i>
                          <p>
                            Contact
                          </p>
                        </NavLink>
                      </li>
                      <li className="nav-item has-treeview">
                        <NavLink href="#" className="nav-link">
                          <i className="nav-icon fas fa-copy"></i>
                          <p>
                            Demo Link
                            <i className="fas fa-angle-left right"></i>
                            <span className="badge badge-info right">6</span>
                          </p>
                        </NavLink>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <NavLink to="/single-upload" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Upload Single Image</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/single-upload-data" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Single Image With Data</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/multiple-upload" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Upload Multiple Image</p>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/add-more" className="nav-link">
                              <i className="far fa-circle nav-icon"></i>
                              <p>Add More</p>
                            </NavLink>
                          </li>

                        </ul>
                      </li>
                      
                    </ul>
                  </nav>
                  
                </div>
                
              </aside>
        )
    }
}