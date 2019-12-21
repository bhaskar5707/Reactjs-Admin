 // Header.js
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
export default class Footer extends Component {
    render(){
        return (
			<footer className="main-footer">
			    <strong>Copyright <NavLink href="#">AdminLTE</NavLink>.</strong>
			    All rights reserved.
			    <div className="float-right d-none d-sm-inline-block">
			      <b>Version</b> 3.0.0-rc.1
			    </div>
			</footer>
        )
    }
}
