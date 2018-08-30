import React, { Component } from "react";
import Slider from 'react-slick'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'

export default class AboutSlider extends Component {

  render() {

    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (

      <div>
        <Slider {...settings}>
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
        </Slider>
      </div>
    )
  }
}
