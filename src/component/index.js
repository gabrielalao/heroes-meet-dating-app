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

import all from '../assets/font-awsome/css/all.css';
import sty from '../assets/css/style.css';
import bootstrapCss from '../assets/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';


class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props,"(((((((((((")
    return (

            <div>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <link rel="stylesheet" href={sty} />
              <link href={all} rel="stylesheet" /> 
              {/* Bootstrap CSS */}
              <link rel="stylesheet" href={bootstrapCss} />
              <title>Heroesmeet</title>
              <header>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="heroesmeet_main_logo">
                        <img src={heroesmeetLogo} />
                      </div>
                    </div>
                    <div class="menubar col-md-9">
                      <nav class="navbar navbar-expand-lg navbar-light">  
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-main-bar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="site-main-bar">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">STORIES</a>
                            </li>

                            <li class="nav-item">
                              <a class="nav-link" href="#">ABOUT US</a>
                            </li>

                            <li class="nav-item">
                              <a class="nav-link" href="#">CONTACT</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </header>

              <Carousel>
  <Carousel.Item>
  <div id="123" className="carousel-item active">
                      <img src={slider_banner} alt="Los Angeles1" width={1920} height={500} />
                      <div className="carousel-caption">
                        <h3>Are You Waiting For Dating?</h3>
                        <div className="slider-btn">
                          <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal">LOGIN</a>
                          <button className="btn theme-color-btn btn-primary" onClick={() => this.props.history.push('/signupStepOne')}>
        Signup
      </button>
                        </div>
                      </div>   
                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div id="456" className="carousel-item active">
                      <img src={slider_banner} alt="Chicago" width={1920} height={500} />
                      <div className="carousel-caption">
                        <h3>Are You Waiting For Dating?</h3>
                        <div className="slider-btn">
                          <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal">LOGIN</a>
                          <button className="btn theme-color-btn btn-primary" onClick={() => this.props.history.push('/signupStepOne')}>
        Signup
      </button>
                        </div>
                      </div>    
                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div id="789" className="carousel-item active">
                      <img src={slider_banner} alt="New York" width={1920} height={500} />
                      <div className="carousel-caption">
                        <h3>Are You Waiting For Dating?</h3>
                        <div className="slider-btn">
                          <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal">LOGIN</a>
                          <button className="btn theme-color-btn btn-primary" onClick={() => this.props.history.push('/dashboard')}>
        Signup
      </button>
                        </div>
                      </div>   
                    </div>
  </Carousel.Item>
</Carousel>
             
              <section id="security-tags">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="secure-tags">
                        <img src={verifiedLogo} alt="New York" />
                        <h3>100% Verified</h3>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="secure-tags">
                        <img src={mostSecure} alt="New York" />
                        <h3>100% Verified</h3>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="secure-tags">
                        <img src={privacyLogo} alt="New York" />
                        <h3>100% Verified</h3>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="secure-tags">
                        <img src={smartMatching} alt="New York" />
                        <h3>100% Verified</h3>
                      </div>
                    </div>
                  </div>
                </div>  
              </section>
              <section id="steps-to-finding-your-soul-mate">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="section-title">Steps to  Finding Your Soul Mate</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore e t dolore magna aliqua. </p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                      <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                        <h3 className=" text-light">CREATE PROFILE</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
              <section id="our-new-mambers">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="section-title">Our New Members</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore e t dolore magna aliqua. </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="photo">
                        <img src={team1} alt="User one" />
                        <div className="team-pic-overlay">
                          <img src={zoom} />
                        </div>
                        <div className="info">
                          <div className="name">Rohit Sharma</div>
                          <div className="degination">Director</div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="photo">
                        <img src={team2} alt="User one" />
                        <div className="team-pic-overlay">
                          <img src={zoom} />
                        </div>
                        <div className="info">
                          <div className="name">Rohit Sharma</div>
                          <div className="degination">Director</div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="photo">
                        <img src={team3} alt="User one" />
                        <div className="team-pic-overlay">
                          <img src={zoom} />
                        </div>
                        <div className="info">
                          <div className="name">Rohit Sharma</div>
                          <div className="degination">Director</div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="photo">
                        <img src={team1} alt="User one" />
                        <div className="team-pic-overlay">
                          <img src={zoom} />
                        </div>
                        <div className="info">
                          <div className="name">Rohit Sharma</div>
                          <div className="degination">Director</div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="why-heroesmeet">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="section-title">Our New Members</h2>
                      <p className="text-center">HeroesMeet was first founded to challenge the antiquated rules of dating. Now, heroesmet empowers users to connect with confidence Whether it’s dating, networking, or simply making friends online, We’ve shaken up outdated gender norms by making the first move optional for both men and women. to make the first move, shaking up outdated gender norms. We Prioritize kindness and respect, providing a safe online community for users to build new relationships.</p>
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
                      <h2 className="section-title">Follow @HeroesMeet</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore e t dolore magna aliqua. </p>
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
                    <div className="col-md-7">
                      <div className="footer-logo">
                        <img src={heroesmeetLogo} alt="User one" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer-social-icon">
                        <ul>
                          <li><a href="#"><i className="fab fa-instagram" /></a></li>
                          <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter-square" /></a></li>
                          <li><a href="#"><i className="fab fa-pinterest-square" /></a></li>
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
                          <li><a href="#">Term &amp; Conditions</a></li>
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
              {/* Modal */}
              <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope-open" /></span>
                                  </div>
                                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-unlock-alt" /></span>
                                  </div>
                                  <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <button type="button" className="btn theme-color-them-btn btn-primary">Get Started</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="row">
                            <div className="login-left">
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                              <h2>Find My Kind</h2>
                              <p>Why heroesmeet? Everyone wants someone to save them from the malady of being in the single dating lifestyle.  So as much as you are saving her from she's saving you too.</p>
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
