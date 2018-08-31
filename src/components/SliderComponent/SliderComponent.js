import React, { Component } from "react";
import Slider from 'react-slick'
import './slider.css';
import { Link } from 'react-router-dom'

export default class SimpleSlider extends Component {
  
  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slider"
    };

    let imagesRenderer = this.props.images.map(e => {
      return(
      this.props.ids.map(elem =>  {
        return (
        <div className="image-container">
         <Link to={`gear/${elem}/`}><img src={e} alt="" className="slider-image"></img></Link>
        </div>
        )}))})

  
    return (
      
      <div className="image-container">
        <Slider {...settings}>
          {imagesRenderer}
        </Slider>
      </div>
    )}}
