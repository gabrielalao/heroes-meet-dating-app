import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { name: 'Select Religion', value:0 },
        { name: 'Christianity', value:1 },
        { name: 'Islam', value:2 },
        { name: 'Nonreligious (Secular/Agnostic/Atheist)', value:3 },
        { name: 'Hinduism', value:4 },
        { name: 'Chinese traditional religion', value:5 },
        { name: 'Buddhism', value:6 },
        { name: 'Primal-indigenous', value:7 },
        { name: 'County Coordinator', value:8 },
        { name: 'African traditional and Diasporic', value:9 },
      ],
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
    existing['category'] = this.state.inputValue;

    // Save back to localStorage
    window.localStorage.setItem('signupData', JSON.stringify(existing));



    // let retrievedObject = window.localStorage.getItem('signupData');

    // console.log('retrievedObject: ', JSON.parse(window.localStorage.getItem('signupData')), this.state.inputValue);

    if(this.state.inputValue == ''){
      alert('Please select a category')
    }else{
      // console.log('inside console else statement ***** ',this.state.inputValue)
      this.props.history.push('signupStepEight')
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
                <p className="otp">Hey John! What is your profession?</p>
                <div className="input-group category">
                  <div className="form-group">
                    <select onChange={(e)=>this.updateInputValue(e)} className="form-control" id="category">
                      {
                        this.state.category.map((data, index) => {
                          return <option key={`category${index}`} value={data.value}>{data.name}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <a onClick={() => this.submit()} className="btn theme-color-them-btn btn-primary">Continue</a>
                </div>
                {/* <div className="col-md-12 text-center">
                  <a className="use-my-contact">Use Facebook Instead</a>
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

export default withRouter(SignupStep9);
