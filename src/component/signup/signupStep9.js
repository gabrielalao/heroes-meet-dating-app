import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        { name: 'Police Officer' },
        { name: 'Peace Officer' },
        { name: 'FBI Agent' },
        { name: 'US Secret Service Agent' },
        { name: 'US Marshal' },
        { name: 'ATF Agent' },
        { name: 'State Coordinator' },
        { name: 'County Coordinator' },
        { name: 'Town Coordinator' },
        { name: 'Ladies Auxiliary' },
        { name: 'Fire fighter' },
        { name: 'Deputy Sheriff' },
        { name: 'Special Deputy Sheriff' },
        { name: 'Sheriff' },
        { name: 'Under Sheriff' },
        { name: 'Campus Security' },
        { name: 'Security Guard' },
        { name: 'Fire Marshal' },
        { name: 'Harbor Patrol' },
        { name: 'Harbor Police' },
        { name: 'Emergency Medical Technician' },
        { name: 'Doctor' },
        { name: 'Nurse' },
        { name: 'Physician Assistant' },
        { name: 'Dog Warden' },
        { name: 'Constable' },
        { name: 'Court Officer' },
        { name: 'Investigator' },
        { name: 'CERT Member' },
        { name: 'Public Information Officer' },
        { name: 'Animal Control Officer' },
        { name: 'SPCA Officer' },
        { name: 'Correction Officer' },
        { name: 'Warden' },
        { name: 'Inspector' },
        { name: 'Military Police' },
        { name: 'Environmental Police' },
        { name: 'K-9 Officer' },
        { name: 'Auxiliary Police' },
        { name: 'Park Police' },
        { name: 'Life Guard' },
        { name: 'TSA Officer' },
        { name: 'Special Police' },
        { name: 'Paramedic' },
        { name: 'AEMT' },
        { name: 'Tow trucker driver/operator' },
        { name: 'Park Ranger National Seashore Officer' },
        { name: 'Bridge and Tunnel Officer' },
        { name: 'Conservation Officer' },
        { name: 'Diplomatic Security' },
        { name: 'DEA Agent' },
        { name: 'Fish and Wildlife Officer' },
        { name: 'DEC Official' },
        { name: 'Emergency Medical Professional' },
        { name: 'FEMA Official' },
        { name: 'Private Investigator' },
        { name: 'Citizens Police Academy Graduate' },
        { name: 'Police Explorer' },
        { name: 'Corporate Security Officer' },
        { name: 'Insurance Investigator' },
        { name: 'Homeland Security Agent' },
        { name: 'Air National Guard Soldier' },
        { name: 'US Army' },
        { name: 'US Navy' },
        { name: 'US Air Force' },
        { name: 'US Coast Guard' },
        { name: 'Public Safety Official' },
        { name: 'Dispatcher' },
        { name: 'Coroner' },
        { name: 'US Marine Air Marshal' },
        { name: 'Civil Air Patrol' },
        { name: 'Game Warden' },
        { name: 'Postal Inspector' },
        { name: 'Transit Police' },
        { name: 'Red Cross Member' },
        { name: 'AmeriCorps' },
        { name: 'EPA Officer' },
        { name: 'ICE Agent' },
        { name: 'Border Patrol' },
        { name: 'District Attorney' },
        { name: 'Assistant District Attorney' },
        { name: 'Probation Officer' },
        { name: 'Elected Official' },
        { name: 'Air Traffic Controller' },
        { name: 'University Police' },
        { name: 'Parole Officer' },
        { name: 'Fire Commissioner' },
      ]
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
                <p className="otp">Hey John! What is your profession?</p>
                <div className="input-group category">
                  <div className="form-group">
                    <select className="form-control" id="category">
                      {
                        this.state.category.map((data, index) => {
                          return <option key={`category${index}`} value={data.name}>{data.name}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <a onClick={() => this.props.history.push('/signupStepEight')} className="btn theme-color-them-btn btn-primary">Continue</a>
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
