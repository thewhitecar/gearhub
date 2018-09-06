import React, { Component } from "react";
import Slider from 'react-slick'
import './newSlider.css';
import { Link } from 'react-router-dom'

export default class NewSlider extends Component {
  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "newslider",
      autoPlay: false
    };

    let imagesRenderer = this.props.images.map(e => {
      return(
         <Link 
            key={e.id} 
            to={`gear/${e.id}/`}>
                <img 
                     src={e.imageUrl} 
                     alt="" 
                     className="new-slider-image">
                </img>
        </Link>
      )
    })
    return (
    
        <Slider {...settings}>
          {imagesRenderer}
        </Slider>

    )}}