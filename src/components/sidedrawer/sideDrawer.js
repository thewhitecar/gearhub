import React, { Component } from 'react';
import './sideDrawer.css';
import logo from '../buttons/logo.png'
import { logOut } from "../../redux/reducers/auth_reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'

class SideDrawer extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarURL: ""
    }
  }

  componentDidMount=()=>{
    axios.get('/api/avatars').then(response => {
      this.setState({
        avatarURL: response.data.avatar_url
      })
  }
    )}



  render(){

let avatar;
if(this.state.avatarUrl !== ""){
  avatar=<img src={this.state.avatarURL} alt="avatar" className="avatar"/>
}
    
let username;
if(this.props.user){
  username = this.props.user.name
}
    let drawerClasses = 'side-drawer';
    if (this.props.show === true) {
      drawerClasses = 'side-drawer open';
    }
    

    return (
      <nav className={drawerClasses}>
        <div className="sidebarlogo">
        <img src={logo} alt="" className="sidebarlogoimage"></img>
        <p className="user">Hello, {username}!</p>
        </div>
        {avatar}
        <ul>
        <li>
        <Link to="/form"><a>Add Eqipment</a></Link>
        </li>
        <li>
          <Link to="/"><a onClick={this.props.logOut}>Log Out</a></Link>
        </li>
      </ul>
    </nav>
  );
}
}

let mapStateToProps = state => {
  return {
    user: state.auth.data
  };
};

export default connect( mapStateToProps, { logOut } )( SideDrawer );