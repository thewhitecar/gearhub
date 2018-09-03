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
  image2 = 
  <img className="expandGearImages" alt="" src={this.props.img2}/>;
  
}
let image3;
if (this.props.img3) {
  image3 = 
  <img className="expandGearImages" alt="" src={this.props.img3}/>
  
}
let image4;
if (this.props.img4) {
  image4 = 
  <img className="expandGearImages" alt="" src={this.props.img4}/>
  
}



    return (
        <Slider {...settings}>
       
            {<img className="expandGearImages" alt="" src={this.props.img1} />}
            
          {image2}
          {image3}
          {image4}
        </Slider>
    )
  }
}
