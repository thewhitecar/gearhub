import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/reducers/auth_reducer";
import Backdrop from "../backdrop/backdrop";
import SideDrawer from "../sidedrawer/sideDrawer";
import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import right from "../buttons/right.png";
import left from "../buttons/left.png";

import "./form2.css";
import ReactS3Uploader from "react-s3-uploader";
import {
  update_photo1,
  update_photo2,
  update_photo3,
  update_photo4
} from "../../redux/reducers/photos_reducer";

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaderVisible: true,
      sideDrawerOpen: false
    };
  }

  toggleUploader() {
    this.setState({
      uploaderVisible: false
    });
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  onFinish = response => {
    const {
      update_photo1,
      update_photo2,
      update_photo3,
      update_photo4
    } = this.props;
    let imageUrl = response.signedUrl.split("?").shift();
    if (this.props.photo1 === "/static/media/none.db88a501.png") {
      update_photo1(imageUrl);
    } else if (this.props.photo2 === "/static/media/none.db88a501.png") {
      update_photo2(imageUrl);
    } else if (this.props.photo3 === "/static/media/none.db88a501.png") {
      update_photo3(imageUrl);
    } else if (this.props.photo4 === "/static/media/none.db88a501.png") {
      update_photo4(imageUrl);
      this.toggleUploader();
    } else {
      alert("You can only upload four photos for each instrument");
    }
  };

  nextCheck = () => {
    if(this.props.photo1 === "/static/media/none.db88a501.png"){
      alert("Please add at least one picture")
    } else{this.props.history.push("/form3")}
  }

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let Uploader = (
      <ReactS3Uploader
        className="uploader"
        signingUrl="/s3/sign"
        accept="image/*"
        onFinish={this.onFinish}
        uploadRequestHeaders={{ "x-amz-acl": "public-read" }}
      />
    );
    console.log(this.props.photo1)
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
            <span className="whiteSpan">Add </span>
            <span className="orangeSpan">Photos</span>
          </div>

          
          <div className="form-wrapper">
            <div className="form-right-spacer">
              <Link to="/form">
                <img className="right_arrow" src={left} alt="" />
              </Link>
            </div>
          <div className="form-content">
            {this.state.uploaderVisible && Uploader}
            <div className="uploader-photos-div">
            <div className="uploader-photos-div-top">
            <img alt="" className="photo" src={this.props.photo1} />
            <img alt="" className="photo" src={this.props.photo2} />
            </div>
            <div style={{paddingTop: "5vh"}}></div>
            <div className="uploader-photos-div-bottom">
            <img alt="" className="photo" src={this.props.photo3} />
            <img alt="" className="photo" src={this.props.photo4} />
            </div>
            </div>
          </div>
          <div className="form-right-spacer">

              <img src={right} className="right_arrow" alt="" onClick={()=> this.nextCheck()}/>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.data,
    photo1: state.photo.photos1,
    photo2: state.photo.photos2,
    photo3: state.photo.photos3,
    photo4: state.photo.photos4
  };
}

export default connect(
  mapStateToProps,
  { update_photo1, update_photo2, update_photo3, update_photo4, logOut }
)(Form2);
