import React, { Component } from "react";
import Slider from 'react-slick'
import image1 from './newimage1.png'
import image2 from './newimage2.png'
import image3 from './newimage3.png'
import image4 from './newimage4.png'

export default class AboutSlider extends Component {

  render() {

    const settings = {
      infinite: true,
      arrows: false,
      dots: true,
      speed: 5000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "AboutSlider",
    };

    return (

      <div>
        <Slider {...settings}>
        <img className="aboutsliderimages" alt="" src={image1}></img>
        <img className="aboutsliderimages"alt="" src={image2}></img>
        <img className="aboutsliderimages"alt="" src={image3}></img>
        <img className="aboutsliderimages" alt="" src={image4}></img>
        </Slider>
      </div>
    )
  }
}
