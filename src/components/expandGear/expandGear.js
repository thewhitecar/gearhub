import React, { Component } from "react";

//components

import Backdrop from '../backdrop/backdrop'
import SideDrawer from '../sidedrawer/sideDrawer'
import GearSlider from "../gearSlider/gearSlider";
import Chart from "../chart/chart";
import Modal from 'react-modal';

//other

import { Link } from "react-router-dom";
import axios from "axios";
import "./expandGear.css";
import categoryArray from '../../jsData/categoryVariables';
import conditionArray from '../../jsData/conditionArray';

//images

import menu_icon from "../buttons/menu.png";
import add_icon from "../buttons/add.png";
import logo from "../buttons/logo.png";
import logout_icon from "../buttons/logout.png";
import delete_icon from "../buttons/delete.png";
import back from "../buttons/back.png";


export default class ExpandGear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            make: "",
            model: "",
            category: "",
            serial: "",
            condition: "",
            description: "",
            photo_url_1: "",
            photo_url_2: "",
            photo_url_3: "",
            photo_url_4: "",
            showModal: false,
            updatedMake: "",
            updatedModel: "",
            updatedCategory: "",
            updatedSerial: "",
            updatedCondition: "",
            updatedDescription: "",
            sideDrawerOpen: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    componentDidMount() {
        this.refresh()
        }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    deleteGearById = id => {
        axios.delete(`/api/gear/${id}`).then(results => {
            this.props.history.push("/dash");
            console.log(results);
        });
    };

    handleUpdateMakeField = (e) => {
        this.setState({
            updatedMake: e.target.value
        })
    }

    handleUpdateModelField = (e) => {
        this.setState({
            updatedModel: e.target.value
        })
    }

    handleUpdateSerialField = (e) => {
        this.setState({
            updatedSerial: e.target.value
        })
    }

    handleUpdatedCategoryField = (e) => {
        this.setState({
            updatedCategory: e.target.value
        })
    }

    handleUpdatedConditionField = (e) => {
        this.setState({
            updatedCondition: e.target.value
        })
    }

    handleUpdatedDescriptionField = (e) => {
        this.setState({
            updatedDescription: e.target.value
        })
    }

    goBack() {
        this.props.history.push("/dash");
    }

    handleUpdateGear = (id) => {
        let obj = {
            make: this.state.updatedMake,
            serial: this.state.updatedSerial,
            model: this.state.updatedModel,
            condition: this.state.updatedCondition,
            category: this.state.updatedCategory,
            description: this.state.updatedDescription,
        }
        axios.put(`/api/gear/${id}`, obj).then(res =>{
            this.refresh()
            this.handleCloseModal()
        })
    }

    refresh = () => {
        let { id } = this.props.match.params;
        axios.get(`/api/gear/${id}`).then(results => {

            let {
                name,
                make,
                model,
                category,
                categoryslug,
                serial,
                condition,
                description,
                photo_url_1,
                photo_url_2,
                photo_url_3,
                photo_url_4
            } = results.data;

            this.setState({
                name,
                make,
                model,
                category,
                categoryslug,
                serial,
                condition,
                description,
                photo_url_1,
                photo_url_2,
                photo_url_3,
                photo_url_4,
                updatedMake: make,
                updatedModel: model,
                updatedCategory: category,
                updatedSerial: serial,
                updatedCondition: condition,
                updatedDescription: description
            });
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

    render() {

        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

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
        let { id } = this.props.match.params;
        return <div className="background">
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="header">
                <div className="spacer-left" />
                <img src={menu_icon} className="buttons" alt="" onClick={this.drawerToggleClickHandler} style={{ marginBottom: "0.8vh" }} />
                <Link to="/form">
                    <img alt="" src={add_icon} className="buttons" />
                </Link>
                <Link to="/">
                    <img src={logout_icon} alt="logout" onClick={this.props.logOut} className="buttons" />
                </Link>
                <div className="spacer-mid" />
                <Link to="/dash">
                    <img alt="" src={logo} className="logo" />
                </Link>
            </div>

            <div className="dashboard-content-box">
                <div className="gear-left-container">
                    <div className="titleDiv">
                        <img onClick={() => this.goBack()} className="back" src={back} alt="go back" />
                        <span className="gearTitleSpan">{this.state.make + " "}</span>
                        <span className="gearTitleorangeSpan">
                            {this.state.model}
                        </span>
                    </div>

                    <GearSlider img1={this.state.photo_url_1} img2={this.state.photo_url_2} img3={this.state.photo_url_3} img4={this.state.photo_url_4} />
                    <div className="geardeletecontainer">
                        <img alt="delete" onClick={() => this.deleteGearById(id)} className="delete_icon" src={delete_icon} />
                        <p className="gear_button" onClick={this.handleOpenModal}>
                            edit
              </p>
                    </div>

                    <Modal style={customStyles} isOpen={this.state.showModal}>
                        <div className="topModalDiv">
                            <img onClick={this.handleCloseModal} className="back" src={back} alt="close" />
                        </div>
                        <div className="middleModalDiv">
                            <div className="modalWrapper">
                                <p className="gear_p_orange_modal">Make</p> <input value={this.state.updatedMake} className="modalInput" onChange={this.handleUpdateMakeField}></input>
                            </div>
                            <div className="modalWrapper">
                                <p className="gear_p_orange_modal">Model</p> <input value={this.state.updatedModel} className="modalInput" onChange={this.handleUpdateModelField}></input>
                            </div>
                            <div className="modalWrapper">
                                <p className="gear_p_orange_modal">Serial</p> <input value={this.state.updatedSerial} className="modalInput" onChange={this.handleUpdateSerialField}></input>
                            </div>
                            <div className="modalWrapper">
                                <p className="gear_p_orange_modal">Category</p>
                                <select className="modalInput" value={this.state.updatedCategory} onChange={this.handleUpdatedCategoryField}>
                                     <option className ="modalInput"  value="">{this.state.category}</option>
                                     {categoryMap}
                                 </select>
                            </div>
                            <div className="modalWrapper">
                                <p className="gear_p_orange_modal">Condition</p>
                                <select className="modalInput" value={this.state.updatedCondition} onChange={this.handleUpdatedConditionField}>
                                     <option className ="input-field"  value="">{this.state.condition}</option>
                                     {conditionsMap}
                                 </select>
                            </div>
                            <div className="modalWrapper">
                            <p className="gear_p_orange_modal_description">Description</p> <input value={this.state.updatedDescription} className="modalInputDescription" onChange={this.handleUpdatedDescriptionField}></input>
                            </div>
                            <div className="bottomModalDiv">
                            <button onClick={() => this.handleUpdateGear(id)} className="update_item_button">Update Item</button>
                            </div>
                        </div>
                    </Modal>



            {/* <select className="input-field" value={this.props.condition} onChange = { ( e ) => update_condition( e.target.value ) }>
                <option className ="input-field"  value="">condition</option>
                {conditionsMap}
            </select>
            <select className="input-field" value={this.props.category} onChange = {(e) => update_category(e.target.value)}>
                <option className ="input-field" value="">category</option>
                {categoryMap}
            </select> */}



                    <div className="gearInfo">
                        <div>
                            <span className="gear_p_orange">make: </span>
                            <span className="gear_p2">{this.state.make}</span>
                        </div>
                        <div>
                            <span className="gear_p_orange">model: </span>
                            <span className="gear_p2">{this.state.model}</span>
                        </div>
                        <div>
                            <span className="gear_p_orange">category: </span>
                            <span className="gear_p2">{this.state.category}</span>
                        </div>
                        <div>
                            <span className="gear_p_orange">serial: </span>
                            <span className="gear_p2">{this.state.serial}</span>
                        </div>
                        <div>
                            <span className="gear_p_orange">condition: </span>
                            <span className="gear_p2">{this.state.condition}</span>
                        </div>
                        <div>
                            <span className="gear_p_orange">description: </span>
                            <span className="gear_p2">{this.state.description}</span>
                        </div>
                    </div>
                </div>

                <div className="gear-right-container">
                    <Chart make={this.state.make} model={this.state.model} categoryslug={this.state.categoryslug} />
                </div>
            </div>
        </div>;
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '6',
        width: '80vw',
        height: '80vh',
        backgroundColor: '#0F181A'
    }
};