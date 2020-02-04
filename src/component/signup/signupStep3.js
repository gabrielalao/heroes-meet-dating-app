import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep3 extends Component {
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
                <p className="otp">Next, please enter the 4-digit code we just sent you </p>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter Code" aria-label="Username" />
                </div>
                <div className="text-center">
                  <a onClick={() => this.props.history.push('/signupStepFour')} href="#" className="btn theme-color-them-btn btn-primary">Continue</a>
                </div>
                <div className="col-md-12 text-center">
                  <a href="#" className="use-my-contact">Use Facebook Instead</a>
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

export default withRouter(SignupStep3);
