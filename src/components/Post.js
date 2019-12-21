import React, {Component} from 'react';
import {PostData} from './PostData';
import {NavLink , Redirect , Switch} from 'react-router-dom';


class Post extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false
    };

    this.post = this.post.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 

    post() {
	    if(this.state.username && this.state.password && this.state.email && this.state.name){
	    
	    PostData('post',this.state).then((result) => {
	      let responseJson = result;
	      if(responseJson.userData){       
	        sessionStorage.setItem('userData',JSON.stringify(responseJson));
	        this.setState({redirectToReferrer: true});
	      }
	      
	     });
	    }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
		const divStyle = {
		  'margin-left': '260px',
		};
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
        return (<Redirect to={'/dashboard'}/>)
    }
   
  

    return (
      
      <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1>Add Post</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink href="#">Home</NavLink></li>
                        <li className="breadcrumb-item active">Add Post</li>
                      </ol>
                    </div>
                  </div>
              </div>
            </section>

            <section className="content">
            <div className="container-fluid">
              <div className="card card-default">
                <div className="card-header">
                <h3 className="card-title">Add Post</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                </div>
                </div>
                
               
                                    
                  <div className="card-body">
                    <div className="row">

                        <div className="col-md-6">

                            <div className="form-group">
                              <label> Name <span className="error">*</span></label>    
                                <input type="text" name="email" className="form-control"  placeholder="Email" onChange={this.onChange}/>
                                                    
                             </div>

                            <div className="form-group">
                            <label> Email <span className="error">*</span></label>    
                              <input type="text" name="name"  className="form-control" placeholder="Name" onChange={this.onChange}/>
                                                   
                            </div>

                            <div className="form-group">
                            <label> Email <span className="error">*</span></label>    
                              <input type="text" name="username"  className="form-control" placeholder="Username" onChange={this.onChange}/>
                                                   
                            </div>

                            <div className="form-group">
                            <label> Email <span className="error">*</span></label>    
                             <input type="password"  className="form-control" name="password"  placeholder="Password" onChange={this.onChange}/>
                                                   
                            </div>

                            <div className="form-group">
                            <input type="submit" value="Save" className="btn btn-success" onClick={this.post} />
                          </div>
                        
                        </div>

                        <div className="col-md-6">
                            
                          
                        
                        </div>
                      
                    </div>
                  
                  </div>
                
                
                <div className="card-footer">
                   Add Post
                </div>
              </div>


              </div>
            </section>


           
        </div>
    );
  }
}

export default Post