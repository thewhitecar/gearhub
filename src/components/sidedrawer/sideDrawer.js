import React from 'react';
import './sideDrawer.css';
import logo from '../buttons/logo.png'
import { logOut } from "../../redux/reducers/auth_reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show === true) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <div className="sidebarlogo"></div>
        <ul>
        <li>
        <Link to="/form"><a>Add Eqipment</a></Link>
        </li>
        <li>
          <Link to="/"><a onClick={props.logOut}>Log Out</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default connect( null, { logOut } )( SideDrawer );