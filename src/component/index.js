import React, { Component } from 'react';

import verifiedLogo from '../assets/images/100-Verified.jpg';
import slider_banner from '../assets/images/slider-banenr.jpg';
import heroesmeetLogo from '../assets/images/heroesmeet-logo.jpg';
import mostSecure from "../assets/images/most-secure.jpg";
import privacyLogo from "../assets/images/100-Privacy.jpg";
import smartMatching from "../assets/images/Smart-Matching.jpg"

import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';
import zoom from "../assets/images/zoom-plus.png";
import createProfile from "../assets/images/create-profile.png";
import bottomSlider from "../assets/images/bottom-slider.png";
import instagramFollowers from "../assets/images/instagram-followers.png";
import loginLogo from "../assets/images/heroesmeet-login-logo.png"
import menuLogo from "../assets/images/menu_logo.png"
import favicon from "../assets/images/favicon.png"

import all from '../assets/font-awsome/css/all.css';
import sty from '../assets/css/style.css';
import bootstrapCss from '../assets/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Favicon from 'react-favicon';
// import {openNav, closeNav} from '../assets/js/custom'

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

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
                <meta property="og:title" content="HeroesMeet - Find Your Mate" />
                <meta property="og:image" content={favicon} />
              </MetaTags>
              <Favicon url={favicon}/>
              <link rel="stylesheet" href={sty} />
              <link href={all} rel="stylesheet" /> 
              {/* Bootstrap CSS */}
              <link rel="stylesheet" href={bootstrapCss} />
              <header id="topbar">
   <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="heroesmeet_main_logo">
          <a href="#"><img src={heroesmeetLogo} /></a>
        </div>

        <span id="mobile-toogle-opner" style={{"font-size":30,"cursor":'pointer'}} onClick={()=>this.openNav()}>&#9776;</span>

      </div>

      <div className="menubar col-md-9">
        <nav className="navbar navbar-expand-lg navbar-light">  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-main-bar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="site-main-bar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">GUIDELINES <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">STORIES</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT US</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
        <div className="menu-logo">
          <img src={menuLogo} alt="User one" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">GUIDELINES <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">STORIES</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
        </ul>

        <footer id="menu-footer">
          <div className="row">
            <div className="col-md-12">

              <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-android"></i> Get HeroesMeett</a>

              <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-apple"></i> Get HeroesMeett</a>

            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer-social-icon">
                <ul>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest-square"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  </div>
</header>
<section id="header-slider">
  <div id="demo" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
    </ul>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider_banner} alt="Los Angeles" width="1920" height="500" />
        <div className="carousel-caption">
          <h3>Are You Waiting For Dating?</h3>
          <p>Start meeting new people in your area! If you already have an account, 
          <br /> sign in to use HeroesMeet on the web.</p>
          <div className="slider-btn">
            <a href="#" className="btn theme-color-them-btn btn-primary" data-toggle="modal" data-target="#login-modal">LOGIN</a>
            <a onClick={()=>this.props.history.push('/signupStepOne')} className="btn theme-color-them-btn btn-primary" data-toggle="modal" data-target="#signup-modal">SIGN UP</a>
          </div>
        </div>   
      </div>
    </div>
    

  </div>
</section>
<section id="security-tags">
  <div className="container">
    <div className="row">
      <div className="col-6 col-sm-3 col-md-3">
        <div className="secure-tags">
         <img src={verifiedLogo} alt="New York" />
         <h3>Verified Profiles</h3>
       </div>

     </div>
     <div className="col-6 col-sm-3 col-md-3">
      <div className="secure-tags">
       <img src={mostSecure} alt="New York" />
       <h3>Secure</h3>
     </div>
   </div>
   <div className="col-6 col-sm-3 col-md-3">
    <div className="secure-tags">
     <img src={privacyLogo} alt="New York" />
     <h3>100% Privacy</h3>
   </div>
 </div>
 <div className="col-6 col-sm-3 col-md-3">
  <div className="secure-tags">
   <img src={smartMatching} alt="New York" />
   <h3>Smart-Matching</h3>
 </div>
</div>
</div>
</div>  
</section>

<section id="steps-to-finding-your-soul-mate">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="section-title">Steps to Finding Your Soulmate</h2>
        <p className="text-center">On HeroesMeet, connecting is as simple as 1,2,3...</p>
      </div>
    </div>

    <div className="timeline">
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">CREATE PROFILE</h3>
          <p>Set up a personalized profile to introduce yourself to the HeroesMeet community.</p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src={createProfile} className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">

        </div>
      </div>
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">FIND MATCHES</h3>
          <p>Put yourself out there!.</p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src={createProfile} className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">

        </div>
      </div>
      <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
          <h3 className=" text-light">SPARK UP A CONVERSATION</h3>
          <p>See what all HeroesMeet has to offer by connecting with others with similar interests.</p>
        </div>
        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
          <img src={createProfile} className="img-fluid" alt="img" />
        </div>
        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
        </div>
      </div>
    </div>
  </div>
</section>


<section id="why-heroesmeet">
  <div className="container">

   <div className="row">
    <div className="col-md-12">
      <h2 className="section-title">About HeroesMeet</h2>
      <p className="text-center">HeroesMeet was founded to challenge the antiquated rules of dating by empowering users to connect by dating, networking, or simply making friends online. We’ve shaken up outdated gender norms by making the first move optional for both men and women. We provide a safe, online community for users to build new relationships that prioritize kindness and respect.</p>
    </div>
  </div>
</div>
</section>

<section id="header-slider">
 <div className="container">
  <div className="row">
    <div className="col-md-12">
      <img src={bottomSlider} alt="User one" />
    </div>
  </div>
</div>
</section>

<section id="instagram-follow">
 <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h2 className="section-title">Add us on social media!</h2>
    </div>
  </div>

  <div className="row">
    <div className="col-md-12">
      <img src={instagramFollowers} alt="User one" />
    </div>
  </div>

</div>
</section>

<footer id="footer">

  <div className="container">
    <div className="row">
      <div className="col-6 col-md-7">
        <div className="footer-logo">
          <img src={heroesmeetLogo} alt="User one" />
        </div>
      </div>

      <div className="col-6 col-md-4">
        <div className="footer-social-icon">
          <ul>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="#"><i className="fab fa-pinterest-square"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="footer-main-nav">
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

    <div className="row">
      <div className="col-md-12">
        <div className="copy-right">
          <p> © 2020 HeroesMeet | All Rights Reserved </p>
        </div>
      </div>
    </div>
  </div>
</footer>

<div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="login-form">
                <div className="logo">
                  <img src={loginLogo} alt="User one" />
                </div>
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope-open"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fas fa-unlock-alt"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <button type="button" className="col-md-12 btn theme-color-them-btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="login-left">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h2>Find My Kind</h2>
                <p>Why HeroesMeet? Everyone wants someone to save them from the malady of being in the single dating lifestyle.  So as much as you are saving her from she's saving you too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="modal login-signup-modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="login-form">
                <div className="logo">
                  <img src={loginLogo} alt="User one" />
                </div>
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope-open"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="fas fa-unlock-alt"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <button type="button" className="col-md-12 btn theme-color-them-btn btn-primary">Get Started</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="login-left">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h2>Find My Kind</h2>
                <p>Why HeroesMeet? Everyone wants someone to save them from the malady of being in the single dating lifestyle.  So as much as you are saving her from she's saving you too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          );
        
  }
}

export default withRouter(AppIndex);
