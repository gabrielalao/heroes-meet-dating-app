import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import userProfile from "../assets/images/user-profile.png";
import findUser from "../assets/images/find-user.png";
import menuLogo from "../assets/images/menu_logo.png";
import findmatchplaceholder from "../assets/images/placeholder.jpg";
import userPhotosGallery from "../assets/images/team-1.png";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from './common/footer';
import UserDashboardHeader from './common/UserDashboardHeader';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      womenClicked: false,
      accountSetting: true
    };
  }

 openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




  render() {

    let UserData = JSON.parse(window.localStorage.getItem('userData'));
    console.log('***** user data',UserData);



    return (
      <div>
        <UserDashboardHeader history={this.props.history} />
        <section id="user-message-box">
          <div className="container">
            <div className="row">
              <div className="col-md-4 user-message-box-colum">
                <div className="row">
                  <div className="col-md-12">
                    <div className="user-profile-tag">
                      <div className="user-imgae">
                        <a onClick={() => this.setState({ shown: !this.state.shown })}> <img src={userProfile} /> </a>
                      </div>
                      <div className="user-name">
    <a onClick={() => this.setState({ shown: !this.state.shown })}>  <h3>{UserData.full_name}</h3></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {this.state.shown ?
                      <div className="user-message-body-colum">
                        <div className="AccountSettingNav">
                          <ul>
                            <li className="activeSpotlight"> <a href="#">Activate Spotlight </a></li>
                            <li className="activeManageBoost"> <a href="#">Manage your Boost</a></li>
                            <li> <a href="#">Edit profile</a></li>
                            <li> <a href="#">Settings</a></li>
                            <li> <a href="#">Contact & FAQs</a></li>
                            <li> <a href="#">Logout</a></li>
                          </ul>
                        </div>
                      </div> :
                      <div class="user-message-body-colum">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="find-you-matches-here">
                              <img src={findmatchplaceholder} />
                              <h3> Find your matches here
Start discovering people to get matches. </h3>
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>
                </div>

              </div>
              {this.state.shown ?
                <div className="col-md-8 userDashboardSetting user-message-body-colum">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="userDashboardTitle"> Date profile </h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="userPhotosGallery">
                        <ul>
                          <li> <a href="#"> <img src={userPhotosGallery} /> </a> </li>
                          <li> <a href="#"> <img src={userPhotosGallery} /> </a> </li>
                          <li> <a href="#"> <img src={userPhotosGallery} /> </a> </li>
                          <li> <a href="#"> <img src={userPhotosGallery} /> </a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            Click me!
    </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me!
    </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  </div>

                </div> :
                <div className="col-md-8 user-message-body-colum">
                  {this.state.womenClicked ?
                    <div className="row">
                      <div className="col-md-12">
                        <div className="find-heroes">
                          <h2>HeroesMeet Match</h2>
                          <img src={findUser} />
                        </div>
                      </div>
                    </div> :
                    <div class="row">

                      <div class="col-md-12">
                        <h2>Let’s get HeroesMeet</h2>
                        <p>And who are you interested in?</p>
                        <button type="button" class="col-md-12 btn theme-color-them-btn btn-primary">Men</button>
                      </div>
                      <div class="col-md-12">

                        <button type="button" onClick={() => this.setState({ womenClicked: true })}
                          class="col-md-12 btn theme-color-them-btn btn-primary">Women</button>
                      </div>
                      <div class="col-md-12">
                        <button type="button" class="col-md-12 btn theme-color-them-btn btn-primary">Everyone</button>

                      </div>
                    </div>}

                </div>}

            </div>
          </div>
        </section>
        <Footer />


      </div>



    );
  }
}

export default Dashboard;
