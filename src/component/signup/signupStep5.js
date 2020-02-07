import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep5 extends Component {
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
    var existing = window.localStorage.getItem('signupData');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};

    // Add new data to localStorage Array
    existing['name'] = this.state.inputValue;

    // Save back to localStorage
    window.localStorage.setItem('signupData', JSON.stringify(existing));



    // let retrievedObject = window.localStorage.getItem('signupData');

    // console.log('retrievedObject: ', JSON.parse(window.localStorage.getItem('signupData')));

    if(this.state.inputValue == '' && !this.state.inputValue.trim()){
      alert('Please enter your name')
    }else{
      this.props.history.push('signupStepSix')
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
                <p className="otp">Nice one! So, what do you like to be called?</p>

                <div className="input-group mb-3">
                  <input type="text" name="name" value={this.state.inputValue} onChange={(e)=>this.updateInputValue(e)} className="form-control" placeholder="Your Name" required />
                </div>
                <p className="text-center">This is how you’ll appear on HeroesMeet</p>

                <div className="text-center">
                  <a onClick={() => this.submit()} className="btn theme-color-them-btn btn-primary">Continue</a>
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
