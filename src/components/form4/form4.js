import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {reset_form } from '../../redux/reducers/form_reducer'
import { Link } from 'react-router-dom'

import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import left from "../buttons/left.png";

import Backdrop from '../backdrop/backdrop'
import SideDrawer from '../sidedrawer/sideDrawer'

class Form4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sideDrawerOpen: false
        };
      }

    handleAddGear = () => {
        let obj = {
            owner_id: this.props.user.id,
            make: this.props.make,
            serial: this.props.serial,
            model: this.props.model,
            condition: this.props.condition,
            category: this.props.category,
            description: this.props.description,
            photo1: this.props.photo1,
            photo2: this.props.photo2,
            photo3: this.props.photo3,
            photo4: this.props.photo4
        }
        axios.post('/api/gear', obj).then(res =>{
            reset_form();
            this.props.history.push('/dash')
        })
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };

    render() {

        let backdrop;
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
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
            <span className="whiteSpan">Confirm </span>
            <span className="orangeSpan">Your Information</span>
          </div>

<div className="form-wrapper">
                    <div className="form-right-spacer">
                        <Link to="/form3"><img src={left} alt="" /></Link>
                    </div>



                    <div className="form4box">
                        <p className="form4pcontent">make: {this.props.make}</p>
                        <p className="form4pcontent">serial: {this.props.serial}</p>
                        <p className="form4pcontent">model: {this.props.model}</p>
                        <p className="form4pcontent">condition: {this.props.condition}</p>
                        <p className="form4pcontent">category: {this.props.category}</p>
                        <button className="addbutton" onClick={this.handleAddGear}>Add to Gear</button>
                    </div>


                    <div className="right-div">
                    </div>
                </div>

</div>
            </div>)
    }
}

function mapStateToProps(state) {
 
    const { make, model, serial, condition, category, description } = state.form;
    
    return {
        make,
        model,
        serial,
        condition,
        category,
        description, 
        user: state.auth.data,
        photo1: state.photo.photos1,
        photo2: state.photo.photos2,
        photo3: state.photo.photos3,
        photo4: state.photo.photos4,
    };
}

export default connect(mapStateToProps, { reset_form })(Form4)