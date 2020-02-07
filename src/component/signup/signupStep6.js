import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_day:'',
      date_mth:'',
      date_year:'',
      selectDay:false,
      selectMonth:false,
      // birthday: new Date()
    };

    const year = (new Date()).getFullYear();
    this.years = Array.from(new Array(50), (val, index) => year - index);
  }

  updateDay(evt) {
    this.setState({
      date_day: evt.target.value
    },()=>{
      this.postUpdate()
    });
  }

  updateMonth(evt) {
    this.setState({
      date_mth: evt.target.value
    },()=>{
      this.postUpdate()
    });
  }

  updateYear(evt) {
    this.setState({
      date_year: evt.target.value
    },()=>{
      this.postUpdate()
    });
  }

  postUpdate(){
    let newDate = new Date(this.state.date_year, this.state.date_mth, this.state.date_day);
    this.setState({ birthday : newDate });
  }

  submit(){
    // // Get the existing data
    var existing = window.localStorage.getItem('signupData');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : {};

    // Add new data to localStorage Array
    existing['birthday'] = this.state.birthday;

    // Save back to localStorage
    window.localStorage.setItem('signupData', JSON.stringify(existing));



    // let retrievedObject = window.localStorage.getItem('signupData');

    // console.log('retrievedObject: ', JSON.parse(window.localStorage.getItem('signupData')).birthday, this.state.date_day);

    if(this.state.date_day == ''){
      alert('Please enter your birth day')
    }else if(this.state.date_mth == ''){
      alert('Please enter your birth month')
    }else if(this.state.date_year == ''){
      alert('Please enter your birth year')
    }else{
      // console.log('inside else ***** ')
      this.props.history.push('signupStepSeven')
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
                <p className="otp">Hey John! When’s your birthday?</p>
                <div className="input-group dob">
                  <div className="form-group">
                    <select className="form-control" id="dob_month" onChange={(e)=>this.updateDay(e)}>
                      <option>Month</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select className="form-control" id="dob_day" onChange={(e)=>this.updateMonth(e)}>
                      <option>Day</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select className="form-control" id="dob_year" onChange={(e)=>this.updateYear(e)}>
                      <option>Year</option>
                      {
                        this.years.map((year, index) => {
                          return <option key={`year${index}`} value={year}>{year}</option>
                        })
                      }
                    </select>
                  </div>

                </div>
                <p className="text-center">You must be at 18 years old to use HeroesMeet</p>

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

export default withRouter(SignupStep6);
