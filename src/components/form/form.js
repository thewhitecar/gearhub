import React, { Component } from 'react';
import { connect } from 'react-redux';
import {update_make, update_model, update_serial, update_condition, update_category} from '../../redux/reducers/form_reducer'
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/reducers/auth_reducer'
import categoryArray from '../../jsData/categoryVariables';
import conditionArray from '../../jsData/conditionArray';
import './form.css';
import rightArrow from './right.png';
import menu_icon from './menu.png';
import add_icon from './add.png';
import logo from './gearHubWhite.png'
import logout_icon from './logout.png'


class Form extends Component{

    render() {
        const {update_make, update_model, update_serial, update_condition, update_category} = this.props
        let categoryMap= [];
        categoryMap = categoryArray.map(e => {
            return(
                <option value={`${e.categoryPath}`}>{`${e.categoryPath}`}</option>
        )})
        let conditionsMap= [];
        conditionsMap = conditionArray.map(e => {
            return(
                <option value={`${e.display_name}`}>{`${e.display_name}`}</option>
            )})
        return (
            <div className="background">
                <div className="header">
                    <img src={menu_icon} className="buttons" alt="" />
                    <Link to="/form"><img alt="" src={add_icon} className="buttons" /></Link>
                    <Link to="/"><img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons"/></Link>
                    <div className="spacer" />
                    <Link to="/dash"><img  alt="" src={logo} className="logo"/></Link>
                </div>
                <div className="content-box">
                <div className="spacer-left-arrow"/>
            <div className="form-box">
            <h1 className="heading"> add gear to your inventory </h1>
            <input className="input-field" value={this.props.make} placeholder="make" onChange= {( e ) => update_make( e.target.value )}></input>
            <input className="input-field" value={this.props.model}placeholder="model" onChange= {( e ) => update_model( e.target.value )}></input>
            <input className="input-field" value={this.props.serial} placeholder="serial" onChange= {( e ) => update_serial( e.target.value )}></input>
            <select className="input-field" value={this.props.condition} onChange = { ( e ) => update_condition( e.target.value ) }>
                <option className ="input-field"  value="">condition</option>
                {conditionsMap}
            </select>
            <select className="input-field" value={this.props.category} onChange = {(e) => update_category(e.target.value)}>
                <option className ="input-field" value="">category</option>
                {categoryMap}
            </select>
            </div>
            <Link to="/form2"><img src={rightArrow} alt="next" className="right_arrow"/></Link>
            </div>
                </div>
            )
    }
}


function mapStateToProps( state ) {
    const { make, model, serial, condition, category} = state.form;
  
    return {
      make,
      model,
      serial,
      condition,
      category,
    };
  }
  
export default connect(mapStateToProps,{update_make, update_model, update_serial, update_condition, update_category, logOut})(Form);