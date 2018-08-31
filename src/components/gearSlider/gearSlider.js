import React, { Component } from "react";
import Slider from 'react-slick'
import './gearslider.css'

export default class GearSlider extends Component {
  
  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "gearslider"
    };
         
    return (
      
      <div>
        <Slider {...settings}>
          <img alt="" src={this.props.img1}/>
          <img alt="" src={this.props.img2}/>
          <img alt="" src={this.props.img3}/>
          <img alt="" src={this.props.img4}/>
        </Slider>
      </div>
    )}}
