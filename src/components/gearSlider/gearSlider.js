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

      <div className="expandGearContainer">
        <Slider {...settings}>
          <div className="image-container">
            <img className="expandGearImages" alt="" src={this.props.img1} />
          </div>
          <div className="image-container">
            <img className="expandGearImages" alt="" src={this.props.img2} />
          </div>
          <div className="image-container">
            <img className="expandGearImages" alt="" src={this.props.img3} />
          </div>
          <div className="image-container">
            <img className="expandGearImages" alt="" src={this.props.img4} />
          </div>
        </Slider>
      </div>
    )
  }
}
