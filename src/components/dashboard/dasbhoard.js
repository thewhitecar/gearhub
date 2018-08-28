import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/reducers/auth_reducer";
import axios from "axios";
import SimpleSlider from "../SliderComponent/SliderComponent";

import menu_icon from "./menu.png";
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
      displayNextButton: true
    };
  }

  // componentWillReceiveProps(props) {
  //     if (props.user) {
  //         axios.get('/api/gearCategoryView').then(response => {
  //             this.setState({
  //                 data: response.data
  //             })
  //         })
  //     }
  // }

  componentDidMount() {
    // if(this.props.data.user){
    //     console.log(this.props)
    axios.get("/api/gearCategoryView").then(response => {
      this.setState({
        data: response.data,
        dataMax: response.data.length
      });
    });
    // } else{this.props.history.push("/")}}
  }

  nextClick = num => {
    if (num < this.state.dataMax) {
      this.setState({
        pageBegin: this.state.pageBegin + 3,
        pageEnd: (this.state.pageEnd += 4),
        displayPrevButton: true,
        displayNextButton: false
      });
    }
  };

  prevClick = num => {
    if (num > 0)
      {this.setState({
        pageBegin: (this.state.pageBegin -= 3),
        pageEnd: (this.state.pageEnd -= 4),
        displayPrevButton: false,
        displayNextButton: true
      }) 
  }
  }

  render() {
    let array = this.state.data.slice(this.state.pageBegin, this.state.pageEnd);
    let categoryView = array.map(e => {
      return (
        <div className="categoryDiv">
          <h1 className="categoryHeader">{e.categoryName}</h1>
          <SimpleSlider images={e.images} ids={e.id} />
        </div>
      );
    });

    return (
      <div className="background">
        <div className="header">
          <div className="spacer-left" />
          <img src={menu_icon} className="buttons" alt="Menu"/>
          <Link to="/form"><img alt="Add Gear" src={add_icon} className="buttons" /></Link>
          <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
          <div className="spacer-mid" />
          <Link to="/dash">
            <img alt="" src={logo} className="logo" />
          </Link>
        </div>

        <div className="dashboard-content-box">
          <div>
            <div className="titleDiv">
              <span className="whiteSpan">MY</span>
              <span className="orangeSpan">GEAR</span>
            </div>

            {/* <div className="spanDiv">
                        <span className="menu-text">SHOW BY: </span> <span className="menu-select"> CATEGORY</span>
                    </div>
                    <div className="spanDiv">    
                        <span className="menu-text">SORT BY: </span><span className="menu-select"> A-Z</span>
                    </div> */}
          </div>

          <div className="categoryBox">{categoryView}</div>

          {this.state.displayPrevButton && <button onClick={() => this.prevClick(this.state.pageBegin)}>PREV PAGE</button>}
          {this.state.displayNextButton && <button onClick={() => this.nextClick(this.state.pageEnd)}> NEXT PAGE</button>}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.auth.data
  };
};

export default connect( mapStateToProps, { logOut } )( Dashboard );
