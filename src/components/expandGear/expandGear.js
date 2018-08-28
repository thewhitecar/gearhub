import React, { Component } from 'react';

import GearSlider from '../gearSlider/gearSlider'
import Chart from '../chart/chart'
import { Link } from 'react-router-dom'
import axios from 'axios';


import menu_icon from '../buttons/menu.png'
import add_icon from '../buttons/add.png';
import logo from '../buttons/logo.png';
import logout_icon from '../buttons/logout.png';
import delete_icon from '../buttons/delete.png'
import back from '../buttons/back.png'

import './expandGear.css'

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
            photo_url_4: ""
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axios.get(`/api/gear/${id}`).then(results => {
            let { name, make, model, category, categoryslug, serial, condition, description, photo_url_1, photo_url_2, photo_url_3, photo_url_4 } = results.data
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
                photo_url_4
            })
        })
    }

    deleteGearById = (id) => {
        axios.delete(`/api/gear/${id}`).then(results => {
            this.props.history.push('/dash')
            console.log(results)
        })
    }

    goBack(){
        this.props.history.push("/dash")
    }

    render() {
        let {id} = this.props.match.params
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


                        <div className="gear-left-container">

                            <div className="titleDiv">
                            <img onClick={()=>this.goBack()} className="back" src={back} alt="go back"/>
                                <span className="gearTitleSpan">{this.state.make}</span><span className="gearTitleorangeSpan">{this.state.model}</span>
                            </div>

                            <GearSlider img1={this.state.photo_url_1} img2={this.state.photo_url_2} img3={this.state.photo_url_3} img4={this.state.photo_url_4} />
                            <div className="geardeletecontainer">
                                <img alt="delete" onClick={() => this.deleteGearById(id)} className="delete_icon" src={delete_icon}></img>
                                <p className="gear_p">edit</p>
                            </div>

                            <div className="gearInfo">
                                <div><span className="gear_p_orange">make:   </span><span className="gear_p2">{this.state.make}</span></div>
                                <div><span className="gear_p_orange">model:   </span><span className="gear_p2">{this.state.model}</span></div>
                                <div><span className="gear_p_orange">category:   </span><span className="gear_p2">{this.state.category}</span></div>
                                <div><span className="gear_p_orange">serial:   </span><span className="gear_p2">{this.state.serial}</span></div>
                                <div><span className="gear_p_orange">condition:   </span><span className="gear_p2">{this.state.condition}</span></div>
                                <div><span className="gear_p_orange">description:   </span><span className="gear_p2">{this.state.description}</span></div>
                            </div>



                            </div>

                            <div className="gear-right-container">
                            <Chart make={this.state.make} model={this.state.model} categoryslug={this.state.categoryslug}/>
                            </div>

                    </div>
                </div>

        )
    }
}
