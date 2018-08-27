import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {reset_form } from '../../redux/reducers/form_reducer'
import menu_icon from './menu.png';
import add_icon from './add.png';
import logo from './gearHubWhite.png'
import left from './left.png'
import logout_icon from './logout.png'
import { Link } from 'react-router-dom'



class Form4 extends Component {



    handleAddGear = () => {
        let obj = {
            owner_id: this.props.user.id,
            name: this.props.name,
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
            this.props.history.push('/home')
        })
    }



    render() {
        return (
            <div className="background">
                <div className="header">
                    <img src={menu_icon} className="buttons" alt="" />
                    <img alt="" src={add_icon} onClick={this.toggleAddGear} className="buttons" />
                    <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
                    <div className="spacer" />
                    <Link to="/home"><img alt="" src={logo} className="logo" onClick={this.toggleGear} /></Link>
                </div>
                <div className="content-box">
                    <div className="left-div">
                        <Link to="/form3"><img src={left} alt="" /></Link>
                    </div>
                    <div className="form4box">
                        <p className="form4ptitle">name: {this.props.name}</p>
                        <p className="form4ptitle">make: {this.props.make}</p>
                        <p className="form4ptitle">serial: {this.props.serial}</p>
                        <p className="form4ptitle">model: {this.props.model}</p>
                        <p className="form4ptitle">condition: {this.props.condition}</p>
                        <p className="form4ptitle">category: {this.props.category}</p>
                        <button className="addbutton" onClick={this.handleAddGear}>Add to Gear</button>
                    </div>
                    <div className="right-div">
                    </div>
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
 
    const { make, model, name, serial, condition, category, description } = state.form;
    
    return {
        make,
        model,
        name,
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