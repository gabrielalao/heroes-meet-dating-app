import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';
import FacebookLogin from 'react-facebook-login';

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

  responseFacebook(response) {
    console.log('response fb ****** ',response)
    if(response.accessToken){
      this.props.history.push('/dashboard')
      window.localStorage.setItem('signupData',JSON.stringify(response))
    }else{
      alert('An error occured during registeration. Please check your credentials')
    }
  }

  // fbLogin = (e) => {
  //   e.preventDefault();
  //   console.log('inside fb login  ******* ')
  //   return(
  //     <FacebookLogin
  //       appId="1844922302311752"
  //       autoLoad={true}
  //       callback={this.responseFacebook}
  //     />
  //   )
  // }

  render() {
    return (

      <div>

        <SingupHeader />
        <section id="signup-screen">

          <div class="container">
            <div class="row">
              <div class="text-center col-md-12">
                <h2 class="get-started">Welcome! How do you want to <br /> get started? </h2>
                {/* <a href="" onClick={this.fbLogin} class="facebook btn btn-primary">Use Facebook</a> */}
                <FacebookLogin
                  appId="776885439465346"
                  cssClass="facebook btn btn-primary"
                  textButton='Use Facebook'
                  autoLoad={false}
                  callback={(e)=>this.responseFacebook(e)}
                />
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
