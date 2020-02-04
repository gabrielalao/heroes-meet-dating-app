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

  setGender(event) {
    console.log(event.target.value);
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
                <p className="otp">And how do you identify?</p>
                <div onChange={(e) => this.setGender(e)}>
                  <div className="input-group gender-select">
                    <div className="input-group-text">
                      <input type="radio" value="FEMALE" name="gender" aria-label="Radio button for following text input" /> <h3>&nbsp; Woman</h3>
                    </div>
                  </div>
                  <div className="input-group gender-select">
                    <div className="input-group-text">
                      <input type="radio" value="MALE" name="gender" aria-label="Radio button for following text input" /> <h3>&nbsp; Man</h3>
                    </div>
                  </div>
                  <div className="input-group gender-select">
                    <div className="input-group-text">
                      <input type="radio" value="OTHER" name="gender" aria-label="Radio button for following text input" /> <h3>&nbsp; Other</h3>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a onClick={() => this.props.history.push('/signupStepNine')} className="btn theme-color-them-btn btn-primary">Continue</a>
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

export default withRouter(SignupStep5);
