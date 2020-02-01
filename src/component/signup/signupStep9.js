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

class SignupStep9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category:[
            {name:'Police Officer'},
            {name:'Peace Officer'},
            {name:'FBI Agent'},
            {name:'US Secret Service Agent'},
            {name:'US Marshal'},
            {name:'ATF Agent'},
            {name:'State Coordinator'},
            {name:'County Coordinator'},
            {name:'Town Coordinator'},
            {name:'Ladies Auxiliary'},
            {name:'Fire fighter'},
            {name:'Deputy Sheriff'},
            {name:'Special Deputy Sheriff'},
            {name:'Sheriff'},
            {name:'Under Sheriff'},
            {name:'Campus Security'},
            {name:'Security Guard'},
            {name:'Fire Marshal'},
            {name:'Harbor Patrol'},
            {name:'Harbor Police'},
            {name:'Emergency Medical Technician'},
            {name:'Doctor'},
            {name:'Nurse'},
            {name:'Physician Assistant'},
            {name:'Dog Warden'},
            {name:'Constable'},
            {name:'Court Officer'},
            {name:'Investigator'},
            {name:'CERT Member'},
            {name:'Public Information Officer'},
            {name:'Animal Control Officer'},
            {name:'SPCA Officer'},
            {name:'Correction Officer'},
            {name:'Warden'},
            {name:'Inspector'},
            {name:'Military Police'},
            {name:'Environmental Police'},
            {name:'K-9 Officer'},
            {name:'Auxiliary Police'},
            {name:'Park Police'},
            {name:'Life Guard'},
            {name:'TSA Officer'},
            {name:'Special Police'},
            {name:'Paramedic'},
            {name:'AEMT'},
            {name:'Tow trucker driver/operator'},
            {name:'Park Ranger National Seashore Officer'},
            {name:'Bridge and Tunnel Officer'},
            {name:'Conservation Officer'},
            {name:'Diplomatic Security'},
            {name:'DEA Agent'},
            {name:'Fish and Wildlife Officer'},
            {name:'DEC Official'},
            {name:'Emergency Medical Professional'},
            {name:'FEMA Official'},
            {name:'Private Investigator'},
            {name:'Citizens Police Academy Graduate'},
            {name:'Police Explorer'},
            {name:'Corporate Security Officer'},
            {name:'Insurance Investigator'},
            {name:'Homeland Security Agent'},
            {name:'Air National Guard Soldier'},
            {name:'US Army'},
            {name:'US Navy'},
            {name:'US Air Force'},
            {name:'US Coast Guard'},
            {name:'Public Safety Official'},
            {name:'Dispatcher'},
            {name:'Coroner'},
            {name:'US Marine Air Marshal'},
            {name:'Civil Air Patrol'},
            {name:'Game Warden'},
            {name:'Postal Inspector'},
            {name:'Transit Police'},
            {name:'Red Cross Member'},
            {name:'AmeriCorps'},
            {name:'EPA Officer'},
            {name:'ICE Agent'},
            {name:'Border Patrol'},
            {name:'District Attorney'},
            {name:'Assistant District Attorney'},
            {name:'Probation Officer'},
            {name:'Elected Official'},
            {name:'Air Traffic Controller'},
            {name:'University Police'},
            {name:'Parole Officer'},
            {name:'Fire Commissioner'},
        ]
    };
  }

  render() {
    return (

            <div>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="description" content="Start meeting new people in your area! If you already have an account"></meta>
              <MetaTags>
                <title>Heroes Meet - Find Your Mate</title>
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
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-md-12">
                            <div classNameName="heroesmeet_main_logo">
                                <img src={heroesmeetLogo} />
                            </div>
                        </div> 
                    </div>
                </div>
            </header>

            <section id="signup-screen">
            <div className="container">
    <div className="row">
      <div className="col-md-4">
      </div>
      <div className="text-left col-md-4">
        <p className="otp">Hey John! What is your profession?</p>

        <div className="input-group category">
          <div className="form-group">
          <select className="form-control" id="category">
            {
                this.state.category.map((data,index)=>{
                return <option key={`category${index}`} value={data.name}>{data.name}</option>
                })
            }
            </select>
          </div>

        </div>
        <div className="text-center">
          <a onClick={()=>this.props.history.push('/signupStepEight')} className="btn theme-color-them-btn btn-primary">Continue</a>
        </div>

          <div className="col-md-12 text-center">
         <a className="use-my-contact">Use Facebook Instead</a>
      </div>

      </div>
      <div className="col-md-4">
      </div>
    </div>
  </div>

</section>


<footer id="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-7">
        <div className="footer-logo">
          <img src={heroesmeetLogo} alt="User one" />
        </div>
      </div>
      <div className="col-md-4">
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
          <p> © 2020 Heroesmeet | All Rights Reserved | English (United Kingdom)</p>
        </div>
      </div>
    </div>
  </div>
</footer>

            </div>
          );
        
  }
}

export default withRouter(SignupStep9);
