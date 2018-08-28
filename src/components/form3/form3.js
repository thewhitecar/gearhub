import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/reducers/auth_reducer'
import menu_icon from './menu.png';
import './form3.css'
import add_icon from './add.png';
import logo from './gearHubWhite.png'
import left from './left.png'
import right from './right.png'
import logout_icon from './logout.png'
import { update_description } from '../../redux/reducers/form_reducer'

class Form3 extends Component{
    render(){
        const {update_description} = this.props
        console.log('description', this.props.description)
        return(
            <div className="background">
                <div className="header">
                    <img src={menu_icon} className="buttons" alt="" />
                    <img alt="" src={add_icon} onClick={this.toggleAddGear} className="buttons" />
                    <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
                    <div className="spacer" />
                    <Link to="/dash"><img alt="" src={logo} className="logo" /></Link>
                </div>
                <div className="content-box">
                    <div className="left-div">
                        <Link to="/form2"><img src={left} alt=""/></Link>
                    </div>
                    <div className="descriptioncenterbox"> 
                        <h1 className="description-title"> add a description </h1>
                        <div><textarea className="submission-field" value={this.props.description} maxLength="1000" placeholder="description" onChange= {( e ) => update_description( e.target.value)}></textarea></div> 
                    </div>
                <div className="right-div">
                <Link to="/form4"><img src={right} alt=""/></Link>
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