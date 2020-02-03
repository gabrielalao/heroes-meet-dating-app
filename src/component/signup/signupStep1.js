import React, { Component } from 'react';

import verifiedLogo from '../../assets/images/100-Verified.jpg';
import slider_banner from '../../assets/images/slider-banenr.jpg';
import heroesmeetLogo from '../../assets/images/heroesmeet-logo.jpg';
import mostSecure from "../../assets/images/most-secure.jpg";
import privacyLogo from "../../assets/images/100-Privacy.jpg";
import smartMatching from "../../assets/images/Smart-Matching.jpg"

import team1 from '../../assets/images/team-1.png';
import team2 from '../../assets/images/team-2.png';
import team3 from '../../assets/images/team-3.png';
import zoom from "../../assets/images/zoom-plus.png";
import createProfile from "../../assets/images/create-profile.png";
import bottomSlider from "../../assets/images/bottom-slider.png";
import instagramFollowers from "../../assets/images/instagram-followers.png";
import loginLogo from "../../assets/images/heroesmeet-login-logo.png"
import favicon from "../../assets/images/favicon.png"

import all from '../../assets/font-awsome/css/all.css';
import sty from '../../assets/css/style.css';
import bootstrapCss from '../../assets/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Favicon from 'react-favicon';

class SignupStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push('/signupStepTwo')
  };

  render() {
    return (

            <div>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="description" content="Start meeting new people in your area! If you already have an account"></meta>
              <MetaTags>
                    <title>HeroesMeet - Find Your Mate</title>
                    <meta name="description" content="Start meeting new people in your area! If you already have an account" />
                    <meta property="og:title" content="Heroes Meet - Find Your Mate" />
                    <meta property="og:image" content={favicon} />
                </MetaTags>
                <Favicon url={favicon}/>
              <link rel="stylesheet" href={sty} />
              <link href={all} rel="stylesheet" /> 
              {/* Bootstrap CSS */}
              <link rel="stylesheet" href={bootstrapCss} />
              <header id="signup">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heroesmeet_main_logo">
                            <a onClick={()=>this.props.history.push('/')}><img src={heroesmeetLogo} /></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </header>

            <section id="signup-screen">
  
  <div class="container">
    <div class="row">
      <div class="text-center col-md-12">
        <h2 class="get-started">Welcome! How do you want to <br/> get started? </h2>
        <a href="#" class="facebook btn btn-primary">Use Facebook</a>
      </div>
      <div class="col-md-12 text-center">
        <p class="or">OR</p>
      </div>
      <div class="col-md-12 text-center">
         <a onClick={this.handleClick} href="" class="use-my-contact">Use cell phone number</a>
      </div>
    </div>
  </div>

</section>



<footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-7">
        <div class="footer-logo">
        <a onClick={()=>this.props.history.push('/')}><img src={heroesmeetLogo} alt="User one" /></a>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="footer-social-icon">
          <ul>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest-square"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="footer-main-nav">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Term & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="copy-right">
          <p> © 2020 HeroesMeet | All Rights Reserved </p>
        </div>
      </div>
    </div>
  </div>
</footer>

            </div>
          );
        
  }
}

export default withRouter(SignupStep1);
