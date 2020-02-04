import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep2 extends Component {
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
                <p className="otp">Please enter your mobile number</p>

                <div className="input-group mb-3">
                  <input type="tel" className="form-control" placeholder="Mobile Number" aria-label="Username" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>

                <div className="text-center">
                  <a onClick={() => this.props.history.push('/signupStepThree')} href="" className="btn theme-color-them-btn btn-primary">Continue</a>
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

export default withRouter(SignupStep2);
