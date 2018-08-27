import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/reducers/auth_reducer'
import menu_icon from './menu.png';
import add_icon from '../buttons/add.png'
import logo from '../buttons/logo.png'
import logout_icon from '../buttons/logout.png'
import './dashboard.css';
import axios from 'axios';
import SimpleSlider from '../SliderComponent/SliderComponent'




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
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
                    axios.get('/api/gearCategoryView').then(response => {
                        this.setState({
                            data: response.data
                        })
                    })
    // } else{this.props.history.push("/")}}
                }

    render() {
        console.log(this.props)
        let categoryView = this.state.data.map(e => {
            return (
                <div className="categoryDiv">
                    <h1 className="categoryHeader">{e.categoryName}</h1>
                    <SimpleSlider images={e.images} ids={e.id}/>
                </div>
            )
        })

        return (
            <div className="background">
                <div className="header">
                    <div className="spacer-left"></div>
                    <img src={menu_icon} className="buttons" alt="" style={{ marginBottom: "0.8vh" }} />
                    <Link to="/form"><img alt="" src={add_icon} className="buttons" /></Link>
                    <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons" /></Link>
                    <div className="spacer-mid" />
                    <Link to="/dash"><img alt="" src={logo} className="logo" /></Link>
                </div>


                <div className="dashboard-content-box">

                <div>
                    <div className="titleDiv">
                        <span className="whiteSpan">MY</span><span className="orangeSpan">GEAR</span>
                    </div>


                    <div className="spanDiv">
                        <span className="menu-text">SHOW BY: </span> <span className="menu-select"> CATEGORY</span>
                    </div>
                    <div className="spanDiv">    
                        <span className="menu-text">SORT BY: </span><span className="menu-select"> A-Z</span>
                    </div>

                </div>
                    

                    <div className="categoryBox">
                        {categoryView}
                    </div>

                <div className="more">
                     <span className="menu-text">MORE</span> <span className="menu-select">...</span>
                </div>

                    <div className="spanDiv">
                        <span className="whiteSpan">GEAR</span><span className="orangeSpan">INFO</span>
                    </div>

                </div>
            </div>
        )
    }
}



let mapStateToProps = state => {

    return {
        user: state.auth.data
    }
}

export default connect(mapStateToProps, { logOut })(Dashboard);

