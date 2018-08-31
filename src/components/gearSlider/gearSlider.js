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


let image2;
if (this.props.img2) {
  image2 = <div className="image-container">
  <img className="expandGearImages" alt="" src={this.props.img2}/>;
  </div>
}
let image3;
if (this.props.img3) {
  image3 = <div className="image-container">
  <img className="expandGearImages" alt="" src={this.props.img3}/>
  </div>
}
let image4;
if (this.props.img4) {
  image4 = <div className="image-container">
  <img className="expandGearImages" alt="" src={this.props.img4}/>
  </div>
}



    return (

      <div className="expandGearContainer">
        <Slider {...settings}>
          <div className="image-container">
            {<img className="expandGearImages" alt="" src={this.props.img1} />}
          </div>
          {image2}
          {image3}
          {image4}
        </Slider>
      </div>
    )
  }
}
