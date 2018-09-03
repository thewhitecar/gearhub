import React, { Component } from 'react';
import background from './background.mp4';
import logo from './logo.png'
import './home.css'
import { connect } from 'react-redux'
import amp from './amp.png'
import chart from './chart.png'
import shield from './shield.png'
import location from './location.png'
import studio from './studio.png'
import Slider from 'react-slick'
import AboutSlider from '../aboutSlider/AboutSlider'


class Home extends Component {


  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    window.location = location
  }

  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "studioimage",
    };


    return(

      <div>
      <div className="whyisthisdivhere">
        <header className="v-header container">
          <div className="fullscreen-video-wrap">
            <video autoPlay={true} loop muted plays-inline="true">
              <source src={background} type="video/mp4" />
            </video>
          </div>
          <div className="header-overlay"></div>
          <div className="header-content">
          <img className="mainlogo" src={logo} style={{marginBottom: "-6vh"}} alt=""></img>
          <p className="homepage-text-top">Helping musicians and engineers protect their instruments, equipment and gear. </p>
            <div className="buttons-wrapper">
              <button onClick={this.login} className="login">Log In</button>
              <button className="register" onClick={this.login} >Register</button>
            </div>
          </div>
        </header>


        <section className="section section-a">
<div className="homecolumn">
            <div className="top-container">
              <div className="containers">
              <img alt="" className="homeicons" src={amp}></img>
                <p className="homepage-titles">manage your inventory</p>
                <p className="homepage-text">Add information and photos of your instruments, studio equipment, and other pro audio gear for an integrated view of your home or professional studio.</p>
              </div>
              <div className="containers">
              <img alt="" className="homeicons" src={chart}></img>
                <p className="homepage-titles">track recent sales</p>
                <p className="homepage-text">For gearheads seeking the perfect sound, our equipment is in a constant state of flux.  Track the value of your gear using the Reverb API* to find the best way to fund that next big next purchase.</p>
              </div>
            </div>           
<div className="homespacer"></div>
            <div className="top-container">
              <div className="containers">
              <img alt="" className="homeicons" src={shield}></img>
                <p className="homepage-titles">secure your gear</p>
                <p className="homepage-text">Protect your investment by securing important information like serial numbers, photos and product keys.  In the event of theft, loss, or other catastrophes, this information is vital for  completing insurance claims or police reports. </p>
              </div>
              <div className="containers">
              <img alt="" className="homeicons" src={location}></img>
                <p className="homepage-titles">connect locally</p>
                <p className="homepage-text">Find other musicians and engineers in your area to collaborate on projects or to trade, buy, or sell equipment</p>
              </div>
            </div>
           </div>
        </section>

            <div className="aboutSliderDiv">
            <AboutSlider/>
            </div>

<div className= "sectionb">
 <Slider {...settings}>
 <img src={studio} alt="" className="studioimage"></img>
 <img src={studio} alt="" className="studioimage"></img>
 <img src={studio} alt="" className="studioimage"></img>
 <img src={studio} alt="" className="studioimage"></img>
 <img src={studio} alt="" className="studioimage"></img>
        </Slider>
        </div>




<div className="sectionc"></div> 

<footer className="footer">
<img className="footerlogo" src={logo} style={{marginBottom: "-6vh"}}alt=""></img>
</footer>
      

</div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return{
      user: state.auth.data
  }
}

export default connect(mapStateToProps)(Home)