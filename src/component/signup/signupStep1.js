import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

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

        <SingupHeader />
        <section id="signup-screen">

          <div class="container">
            <div class="row">
              <div class="text-center col-md-12">
                <h2 class="get-started">Welcome! How do you want to <br /> get started? </h2>
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

        <Footer />

      </div>
    );

  }
}

export default withRouter(SignupStep1);
