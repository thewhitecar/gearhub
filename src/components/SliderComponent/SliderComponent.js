import React, { Component } from "react";
import Slider from 'react-slick'
import './slider.css';
import { Link } from 'react-router-dom'

export default class SimpleSlider extends Component {
  testing = (e) => {
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slider",
    };
    let imagesRenderer = this.props.images.map(e => {
      return(

         <Link key={e.id} to={`gear/${e.id}/`}><img src={e.imageUrl} alt="" className="slider-image"></img></Link>

      )
    })
    return (
      

        <Slider {...settings}
        afterChange={this.testing}>

          {imagesRenderer}

        </Slider>

    )}}
