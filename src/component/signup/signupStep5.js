import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SingupHeader />
        <section id="signup-screen">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              </div>
              <div className="text-left col-md-4">
                <p className="otp">Nice one! So, what do you like to be called?</p>

                <div className="input-group mb-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <p className="text-center">This is how you’ll appear on HeroesMeet</p>

                <div className="text-center">
                  <a onClick={() => this.props.history.push('signupStepSix')} className="btn theme-color-them-btn btn-primary">Continue</a>
                </div>

              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );

  }
}

export default withRouter(SignupStep5);
