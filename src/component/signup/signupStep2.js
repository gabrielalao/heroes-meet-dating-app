import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  goToOTP(event){
    event.preventDefault();
    console.log('phone number ****** ',this.state.inputValue)

    const url = 'https://secure-earth-47635.herokuapp.com/users/sendOtp';

    if(this.state.inputValue == '' && !this.state.inputValue.trim()){
      alert('Please enter your phone number')
    }else{
      fetch(url, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNum: this.state.inputValue
        })
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result ******* ',result)
          if(result.statusCode == 200){
            this.props.history.push('/signupStepThree')
            let item = {phoneNum:this.state.inputValue,otp: result.data.otp};
            window.localStorage.setItem('signupData',JSON.stringify(item))
          }else{
            alert(result.message.phoneNum.message)
          }
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      )
    }
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
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
                  <input type="tel" className="form-control" placeholder="Mobile Number" aria-label="Username" name="phone" value={this.state.inputValue} onChange={(e)=>this.updateInputValue(e)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>

                <div className="text-center">
                  <a onClick={(e) => this.goToOTP(e)} href="" className="btn theme-color-them-btn btn-primary">Continue</a>
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
