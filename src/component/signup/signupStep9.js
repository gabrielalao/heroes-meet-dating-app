import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { name: 'Select Category', value:0 },
        { name: 'Police Officer', value:1 },
        { name: 'Peace Officer', value:2 },
        { name: 'FBI Agent', value:3 },
        { name: 'US Secret Service Agent', value:4 },
        { name: 'US Marshal', value:5 },
        { name: 'ATF Agent', value:6 },
        { name: 'State Coordinator', value:7 },
        { name: 'County Coordinator', value:8 },
        { name: 'Town Coordinator', value:9 },
        { name: 'Ladies Auxiliary', value:10 },
        { name: 'Fire fighter', value:11 },
        { name: 'Deputy Sheriff', value:12 },
        { name: 'Special Deputy Sheriff', value:13 },
        { name: 'Sheriff', value:14 },
        { name: 'Under Sheriff', value:15 },
        { name: 'Campus Security', value:16 },
        { name: 'Security Guard', value:17 },
        { name: 'Fire Marshal', value:18 },
        { name: 'Harbor Patrol', value:19 },
        { name: 'Harbor Police', value:20 },
        { name: 'Emergency Medical Technician', value:21 },
        { name: 'Doctor', value:22 },
        { name: 'Nurse', value:23 },
        { name: 'Physician Assistant', value:24 },
        { name: 'Dog Warden', value:25 },
        { name: 'Constable', value:26 },
        { name: 'Court Officer', value:27 },
        { name: 'Investigator', value:28 },
        { name: 'CERT Member', value:29 },
        { name: 'Public Information Officer', value:30 },
        { name: 'Animal Control Officer', value:31 },
        { name: 'SPCA Officer', value:32 },
        { name: 'Correction Officer', value:33 },
        { name: 'Warden', value:34 },
        { name: 'Inspector', value:35 },
        { name: 'Military Police', value:35 },
        { name: 'Environmental Police', value:37 },
        { name: 'K-9 Officer', value:38 },
        { name: 'Auxiliary Police', value:39 },
        { name: 'Park Police', value:40 },
        { name: 'Life Guard', value:41 },
        { name: 'TSA Officer', value:42 },
        { name: 'Special Police', value:43 },
        { name: 'Paramedic', value:44 },
        { name: 'AEMT', value:45 },
        { name: 'Tow trucker driver/operator', value:46 },
        { name: 'Park Ranger National Seashore Officer', value:47 },
        { name: 'Bridge and Tunnel Officer', value:48 },
        { name: 'Conservation Officer', value:49 },
        { name: 'Diplomatic Security', value:50 },
        { name: 'DEA Agent', value:51 },
        { name: 'Fish and Wildlife Officer', value:52 },
        { name: 'DEC Official', value:53 },
        { name: 'Emergency Medical Professional', value:54 },
        { name: 'FEMA Official', value:55 },
        { name: 'Private Investigator', value:56 },
        { name: 'Citizens Police Academy Graduate', value:57 },
        { name: 'Police Explorer', value:58 },
        { name: 'Corporate Security Officer', value:59 },
        { name: 'Insurance Investigator', value:60 },
        { name: 'Homeland Security Agent', value:61 },
        { name: 'Air National Guard Soldier', value:62 },
        { name: 'US Army', value:63 },
        { name: 'US Navy', value:64 },
        { name: 'US Air Force', value:65 },
        { name: 'US Coast Guard', value:66 },
        { name: 'Public Safety Official', value:67 },
        { name: 'Dispatcher', value:68 },
        { name: 'Coroner', value:69 },
        { name: 'US Marine Air Marshal', value:70 },
        { name: 'Civil Air Patrol', value:71 },
        { name: 'Game Warden', value:72 },
        { name: 'Postal Inspector', value:73 },
        { name: 'Transit Police', value:74 },
        { name: 'Red Cross Member', value:75 },
        { name: 'AmeriCorps', value:76 },
        { name: 'EPA Officer', value:77 },
        { name: 'ICE Agent', value:78 },
        { name: 'Border Patrol', value:79 },
        { name: 'District Attorney', value:80 },
        { name: 'Assistant District Attorney', value:81 },
        { name: 'Probation Officer', value:82 },
        { name: 'Elected Official', value:83 },
        { name: 'Air Traffic Controller', value:84 },
        { name: 'University Police', value:85 },
        { name: 'Parole Officer', value:86 },
        { name: 'Fire Commissioner', value:87 },
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
                <div className="col-md-12 text-center">
                  <a className="use-my-contact">Use Facebook Instead</a>
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

export default withRouter(SignupStep9);
