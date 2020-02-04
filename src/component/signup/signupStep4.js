import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep4 extends Component {
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
                <p className="otp">Almost there! Just set a password</p>

                <div className="input-group mb-3">
                  <input type="password" name="password" className="form-control" placeholder="New Password" required />
                </div>
                <p className="text-center">Your password must be at least  5 characters</p>

                <div className="text-center">
                  <a onClick={() => this.props.history.push('signupStepFive')} className="btn theme-color-them-btn btn-primary">Continue</a>
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

export default withRouter(SignupStep4);
