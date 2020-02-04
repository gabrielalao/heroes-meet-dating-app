import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';

class SignupStep6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    const year = (new Date()).getFullYear();
    this.years = Array.from(new Array(50), (val, index) => year - index);
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
                    <select className="form-control" id="dob_month">
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
                    <select className="form-control" id="dob_day">
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
                    <select className="form-control" id="dob_year">
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
                  <a onClick={() => this.props.history.push('/signupStepSeven')} className="btn theme-color-them-btn btn-primary">Continue</a>
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
