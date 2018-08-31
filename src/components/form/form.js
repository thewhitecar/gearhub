import React, { Component } from "react";
import { connect } from "react-redux";
import {
    update_make,
    update_model,
    update_serial,
    update_condition,
    update_category
} from "../../redux/reducers/form_reducer";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/reducers/auth_reducer";
import categoryArray from "../../jsData/categoryVariables";
import conditionArray from "../../jsData/conditionArray";
import SideDrawer from "../sidedrawer/sideDrawer";
import Backdrop from "../backdrop/backdrop";
import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import rightArrow from "../buttons/right.png";
import "./form.css";

class Form extends Component {
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

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        const {
            update_make,
            update_model,
            update_serial,
            update_condition,
            update_category
        } = this.props;
        let categoryMap = [];
        categoryMap = categoryArray.map(e => {
            return <option value={`${e.categoryPath}`}>{`${e.categoryPath}`}</option>;
        });
        let conditionsMap = [];
        conditionsMap = conditionArray.map(e => {
            return <option value={`${e.display_name}`}>{`${e.display_name}`}</option>;
        });
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
                        <span className="whiteSpan">Add Gear </span>
                        <span className="orangeSpan">To Your Inventory</span>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-left-spacer"></div>
                        <div className="form-content">
                            <input
                                className="input-field"
                                value={this.props.make}
                                placeholder="make"
                                onChange={e => update_make(e.target.value)}
                            />
                            <input
                                className="input-field"
                                value={this.props.model}
                                placeholder="model"
                                onChange={e => update_model(e.target.value)}
                            />
                            <input
                                className="input-field"
                                value={this.props.serial}
                                placeholder="serial"
                                onChange={e => update_serial(e.target.value)}
                            />
                            <select
                                className="input-field"
                                value={this.props.condition}
                                onChange={e => update_condition(e.target.value)}
                            >
                                <option disabled hidden className="input-field" value="">
                                    condition
            </option>
                                {conditionsMap}
                            </select>
                            <select
                                className="input-field"
                                value={this.props.category}
                                onChange={e => update_category(e.target.value)}
                            >
                                <option disabled hidden className="input-field" value="">
                                    category
            </option>
                                {categoryMap}
                            </select>
                        </div>
                    
                    <div className="form-right-spacer">
                    <Link to="/form2">
                        <img src={rightArrow} alt="next" className="right_arrow" />
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { make, model, serial, condition, category } = state.form;

    return {
        make,
        model,
        serial,
        condition,
        category
    };
}

export default connect(
    mapStateToProps,
    {
        update_make,
        update_model,
        update_serial,
        update_condition,
        update_category,
        logOut
    }
)(Form);
