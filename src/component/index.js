import React, { Component } from 'react';

import verifiedLogo from '../assets/images/100-Verified.jpg';
import slider_banner from '../assets/images/slider-banenr.jpg';
import mostSecure from "../assets/images/most-secure.jpg";
import privacyLogo from "../assets/images/100-Privacy.jpg";
import smartMatching from "../assets/images/Smart-Matching.jpg"
import createProfile from "../assets/images/create-profile.png";
import bottomSlider from "../assets/images/bottom-slider.png";
import instagramFollowers from "../assets/images/instagram-followers.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MainHeader from './common/MainHeader';
import Footer from './common/footer';


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
              <MainHeader />
           
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
            <a onClick={()=>this.props.history.push('/getStarted')} className="btn theme-color-them-btn btn-primary" data-toggle="modal" data-target="#login-modal">LOGIN</a>
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
    <a onClick={()=>this.props.history.push('/')}>  <img src={bottomSlider} alt="User one" /></a>
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
<Footer />



            </div>
          );
        
  }
}

export default withRouter(AppIndex);
