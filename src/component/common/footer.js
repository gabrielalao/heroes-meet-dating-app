import React, { Component } from 'react';

import heroesmeetLogo from '../../assets/images/heroesmeet-logo.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class Footer extends Component {

  render() {
    return (

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
            <li><a onClick={()=>this.props.history.push('FAQ')}>FAQ</a></li>
            <li><a onClick={()=>this.props.history.push('Events')}>Events</a></li>
            <li><a onClick={()=>this.props.history.push('ContactUs')}>Contact Us</a></li>
            <li><a onClick={()=>this.props.history.push('Guidelines')}>Guidelines</a></li>
            <li><a onClick={()=>this.props.history.push('TermConditions')}>Term & Conditions</a></li>
            <li><a onClick={()=>this.props.history.push('Privacy-Policy')}>Privacy Policy</a></li>
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
          );
        
  }
}

export default withRouter(Footer);
