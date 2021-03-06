import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/reducers/auth_reducer";
import SideDrawer from '../sidedrawer/sideDrawer';
import axios from "axios";
import NewSlider from "../newSlider/newSlider";
import Backdrop from '../backdrop/backdrop'
import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataMax: 0,
      pageBegin: 0,
      pageEnd: 3,
      displayPrevButton: false,
      displayNextButton: true,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    axios.get("/api/gearCategoryView").then(response => {
      this.setState({
        data: response.data,
        dataMax: response.data.length
      });
    });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  
  nextClick = num => {
    if (num < this.state.dataMax) {
      this.setState({
        pageBegin: (this.state.pageBegin + 3),
        pageEnd: (this.state.pageEnd + 3),
        displayPrevButton: true
      });
    }
  };

  prevClick = num => {
    if (num > 0)
      {this.setState({
        pageBegin: (this.state.pageBegin - 3),
        pageEnd: (this.state.pageEnd - 3),
      })
  }
  }

  render() {

    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    let prev;
    if(this.state.pageBegin !== 0){
      prev = <button className="nextbutton" onClick={() => this.prevClick(this.state.pageBegin)}>PREV PAGE</button>
    }
    let array = this.state.data.slice(this.state.pageBegin, this.state.pageEnd);
    let categoryView = array.map(e => {
      return (
        <div className="categoryDiv" key={e.categoryid}>
          <h1 className="categoryHeader">{e.categoryName}</h1>
          <NewSlider images={e.images} />
        </div>
      );
    });

    if(this.props.user){
      return(
<div className="background">
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
        <div className="header">
          <div className="spacer-left" />
          <img onClick={this.drawerToggleClickHandler} src={menu_icon} className="menu-button" alt="Menu"/>
          <Link to="/form"><img alt="Add Gear" src={add_icon} className="buttons" /></Link>
          <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
          <div className="spacer-mid" />
          <Link to="/dash">
            <img alt="" src={logo} className="logo" />
          </Link>
        </div>
        <div className="dashboard-content-box">
          <div className="titleDiv">
                        <span className="whiteSpan">MY</span>
                        <span className="orangeSpan">Gear</span>
                    </div>
          <div className="categoryBox">{categoryView}</div>
          <div className="pageButtonWrapper">
          {prev}
          {this.state.displayNextButton && <button className="nextbutton" onClick={() => this.nextClick(this.state.pageEnd)}> NEXT PAGE</button>}
          </div>
        </div>
        </div>
      )
    }
    else{
      return(
        <div className="background">
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
        <div className="header">
          <div className="spacer-left" />
          <img onClick={this.drawerToggleClickHandler} src={menu_icon} className="menu-button" alt="Menu"/>
          <Link to="/form"><img alt="Add Gear" src={add_icon} className="buttons" /></Link>
          <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
          <div className="spacer-mid" />
          <Link to="/dash">
            <img alt="" src={logo} className="logo" />
          </Link>
        </div>
        <div className="dashboard-content-box" style={{height: "80vh"}}>
          <div className="titleDiv" style={{marginTop: "30vh"}}>
                        <Link to="/"><span className="orangeSpanLink">Click Here</span></Link>
                        <span className="whiteSpan">To Log In and View Your Gear</span>
                    </div>
                    </div>
                    </div>
      )
    }
  }
}

let mapStateToProps = state => {
  return {
    user: state.auth.data
  };
};

export default connect( mapStateToProps, { logOut } )( Dashboard );
