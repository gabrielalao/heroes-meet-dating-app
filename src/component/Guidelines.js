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
import { withRouter } from 'react-router-dom';
import MainHeader from './common/MainHeader';
import Footer from './common/footer';


class Guidelines extends Component {
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
                  <h3>Guidelines</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="privacy-policy-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left">
                <h3> HeroesMeet Privacy Policy </h3>
                <p> Welcome to the HeroesMeet Privacy Policy ("Policy")! This explains how we collect, store, protect, and share your information, and with whom we share it. We suggest you read this in conjunction with our brilliant Terms and Conditions of Use. Whilst you're enjoying the HeroesMeet mobile application ("App"), we collect some information about you. In addition, you may choose to use the App to share information with other HeroesMeetrs, including your friends and contacts ("Users"). We may also need to share your information sometimes.
                HeroesMeet is a global app, and your information will be sent to and used in the United States regardless of the country you reside in. This Policy explains how we protect your personal data when we transfer it overseas, so please read very carefully!
                If you have any questions or comments about this Policy, please feel free to contact us at feedback@team.HeroesMeet.com.
      </p>

                <h3>1. COLLECTION OF INFORMATION.</h3>
                <p>When you download the App and create an account ("Account"), we may collect certain information ("Registration Information") about you, such as:
      </p>
                <ul className="text-left">
                  <li> Name; </li>
                  <li> Username; </li>
                  <li> Email address; </li>
                  <li> Mobile number; </li>
                  <li> Gender identity; </li>
                  <li> Date of birth; </li>
                  <li> Sexual preference; </li>
                  <li> Photographs; </li>
                  <li> Location; and </li>
                  <li> Login information and friend lists for social media accounts that you connect to your HeroesMeet Account (this could include, for example, your Facebook and Instagram accounts ("Social Media Accounts").
 </li>
                </ul>
                <p>You will also be required to create a password in connection with the registration of your Account. Once you register, you will be able to review and change this information at any time by accessing your “Profile” page! You control your user profile and are able to correct or update (other than your email address, mobile number, date of birth, gender and location (which is automatically updated)) your information at any time by just logging in to HeroesMeet.  </p>
                <p> The information we collect helps to enhance the App and verify our Users (robots are not welcome!!). Registration Information such as your name and username may be visible to the public on your profile page.  </p>
              
                <h3> Additional Information </h3>
               <p> We may ask you to provide your full name, address and email address. Such details may be shared with third parties for purposes relating to, for example, any of our loyalty programmes, sending gifts or delivery of merchandise. </p>
               <p> We may also collect additional information in connection with your use of HeroesMeet, for example if you use our super cool electronic messaging function. </p>
               <p> If you contact our Customer Support team, we will receive your email address, and may track your IP address as well as the information you send to us to help resolve your query. We will keep records of our communications with you, including any complaints that we receive from you about other Users (and from other Users about you). </p>
               <p> We recommend and encourage you (and all our members) to think carefully about the information you disclose about yourself. We also do not recommend that you put email addresses, URLs, instant messaging details, phone numbers, full names or addresses, credit card details, national identity numbers, drivers' licence details and other sensitive information on your profile which is open to abuse and misuse. </p>
               <p> Please be careful about posting sensitive details about yourself on your profile such as your religious denomination and health details. You may also choose to add sensitive information about yourself when you add certain HeroesMeet Badges to your profile, such as your religion and political leanings. While you may voluntarily provide this information to us when you create your profile, including your sexual preferences, there is no requirement to do so. Please remember that photographs that you post on HeroesMeet may reveal information about yourself as well. Where you do upload and choose to tell us sensitive information about yourself, including through adding certain Badges to your profile, you are explicitly consenting to our processing of your information and making this public to other users. </p>
               <p> When you post information about yourself or use the messaging function, the amount of personal information you share is at your own risk. Please see Section 4 below for more information on who can access what you post on HeroesMeet. If you post anything that is inconsistent with our Terms and Conditions of Use, we reserve the right to terminate your Account - we really don't want to have to do this so please play by the rules! </p>
               <p> For safety and security and to ensure you have the best possible user experience, we require users to verify their accounts and might ask for your phone number. We want to make sure you are not a robot! And we also want to avoid fake HeroesMeet accounts being created which can be used for malicious activities and cybercrime – they threaten the HeroesMeet network and spoil things for everyone. We use a third party provider for account verification who will keep your phone number for up to 90 days for fraud identification purposes. We collect and use your phone number on the basis of our legitimate interests identified in section 11 below and for the prevention of fraud. </p>

               <p> It is your responsibility to ensure that your account details are kept up to date. If your phone number changes, please ensure that you update this in your account. </p>

               <p> To prevent abuse of the app/site, HeroesMeet uses automated decisions to block accounts as part of its anti-spam procedures. In order to do this, our systems check accounts and messages for content that indicates breaches of our Terms and Conditions of Use. If an account or message meets certain criteria that demonstrate that the Terms and Conditions of Use are likely to have been breached, the relevant account will automatically be blocked. All users of accounts that have been blocked will be notified that their account has been blocked and affected users can contact HeroesMeet to contest the decision.</p>

               <p> HeroesMeet also uses automated decisions to prevent fraudulent payment transactions being processed as part of its anti-fraud procedures. In order to do this, our systems check payment transactions for behaviour that indicates breaches of our Terms and Conditions of Use. If a transaction meets certain criteria that demonstrate that the Terms and Conditions of Use are likely to have been breached and the transaction is likely to be fraudulent, the relevant transaction may automatically be blocked. Where a transaction is blocked, the user will be notified that their transaction cannot be processed and affected users can contact HeroesMeet to contest the decision. </p>

               <p> Please note that if your account is blocked, any account(s) that you have on our other group platforms/applications may also be blocked as part of our anti-spam and anti-fraud procedures. </p>

               <p> If you decide to purchase any of our premium services, we will process your payment information and retain this securely for the prevention of fraud and for audit/tax purposes. </p>

               <p> We process some limited data (demographics and information that you have optionally provided us with via HeroesMeet Badges) to drive targeted advertising in our legitimate interest, via promo cards and ads on our App. We also process limited data (device identifiers) and share this with third party advertising networks which host our ads. You can stop targeted advertising within the “Contact & FAQ” page accessible via your profile. If you opt-out of targeted advertising you will still see adverts though they will be less relevant to you. Through your device’s security settings you also have the option to prevent or limit device identifiers being shared with third party advertisers and what use is made of the device identifiers. If you would like more information about this practice and to know your choices about not having this information used by these companies, please visit this page. </p>

               <p> Finally, we want to keep in touch with you to make sure you know about the great promotions and offers we have available. If you’ve told us it’s OK, we will use your email address and phone number to send you information on these. You can withdraw this consent at any time via Settings in the App. </p>

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

export default withRouter(Guidelines);
