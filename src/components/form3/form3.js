import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/reducers/auth_reducer'
import './form3.css'
import Backdrop from '../backdrop/backdrop'
import SideDrawer from '../sidedrawer/sideDrawer'
import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import right from "../buttons/right.png";
import left from "../buttons/left.png";
import { update_description } from '../../redux/reducers/form_reducer'

class Form3 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          sideDrawerOpen: false
        };
      }

      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };

    render(){
        let backdrop;
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        const {update_description} = this.props
        return(
            <div className="background">
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="header">
              <div className="spacer-left" />
              <img
                onClick={this.drawerToggleClickHandler}
                src={menu_icon}
                className="menu-button"
                alt="Menu"
              />
              <Link to="/form">
                <img alt="Add Gear" src={add_icon} className="buttons" />
              </Link>
              <Link to="/">
                <img
                  src={logout_icon}
                  alt="logout"
                  onClick={this.props.logOut}
                  className="buttons"
                />
              </Link>
              <div className="spacer-mid" />
              <Link to="/dash">
                <img alt="" src={logo} className="logo" />
              </Link>
            </div>
            <div className="dashboard-content-box">


          <div className="titleDiv">
            <span className="whiteSpan">Add </span>
            <span className="orangeSpan">A Description</span>
          </div>

<div className="form-wrapper">
                    <div className="form-right-spacer">
                        <Link to="/form2"><img className="right_arrow" src={left} alt=""/></Link>
                    </div>

                    <div className="descriptioncenterbox"> 
                        <div><textarea className="submission-field" value={this.props.description} maxLength="1000" placeholder="description" onChange= {( e ) => update_description( e.target.value)}></textarea></div> 
                    </div>

                <div className="form-right-spacer">
                <Link to="/form4"><img className="right_arrow" src={right} alt=""/></Link>
                </div>

            </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        description: state.form.description
    };
}

export default connect(mapStateToProps, { update_description, logOut })(Form3);