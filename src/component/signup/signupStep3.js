import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  submit(){
    // // Get the existing data
    // var existing = localStorage.getItem('signupData');

    // // If no existing data, create an array
    // // Otherwise, convert the localStorage string to an array
    // existing = existing ? JSON.parse(existing) : {};

    // // Add new data to localStorage Array
    // existing['otp'] = this.state.inputValue;

    // // Save back to localStorage
    // localStorage.setItem('signupData', JSON.stringify(existing));



    let retrievedObject = window.localStorage.getItem('signupData');

    // console.log('retrievedObject: ', JSON.parse(retrievedObject).otp, this.state.inputValue);

    if(this.state.inputValue != JSON.parse(retrievedObject).otp){
      alert('Please enter correct OTP')
    }else{
      this.props.history.push('/signupStepFour')
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
                <p className="otp">Next, please enter the 4-digit code we just sent you </p>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" value={this.state.inputValue} onChange={(e)=>this.updateInputValue(e)} placeholder="Enter Code" aria-label="Username" />
                </div>
                <div className="text-center">
                  <a onClick={() => this.submit()} href="#" className="btn theme-color-them-btn btn-primary">Continue</a>
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

export default withRouter(SignupStep3);
