import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  submit(){
    // // Get the existing data
    var existing = window.localStorage.getItem('signupData');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};

    // Add new data to localStorage Array
    existing['gender'] = this.state.inputValue;

    // Save back to localStorage
    window.localStorage.setItem('signupData', JSON.stringify(existing));



    // let retrievedObject = window.localStorage.getItem('signupData');

    // console.log('retrievedObject: ', JSON.parse(window.localStorage.getItem('signupData')), this.state.inputValue);

    if(this.state.inputValue == ''){
      alert('Please enter your gender')
    }else{
      console.log('inside console else statement ***** ',this.state.inputValue)
      this.props.history.push('signupStepNine')
    }
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
                <div onChange={(e) => this.updateInputValue(e)}>
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
                  <a onClick={() => this.submit()} className="btn theme-color-them-btn btn-primary">Continue</a>
                </div>

                {/* <div className="col-md-12 text-center">
                  <a href="#" className="use-my-contact">Use Facebook Instead</a>
                </div> */}
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
