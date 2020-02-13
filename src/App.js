import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './component/index';
import signupStep1 from './component/signup/signupStep1';
import signupStep2 from './component/signup/signupStep2';
import signupStep3 from './component/signup/signupStep3';
import signupStep4 from './component/signup/signupStep4';
import signupStep5 from './component/signup/signupStep5';
import signupStep6 from './component/signup/signupStep6';
import signupStep7 from './component/signup/signupStep7';
import signupStep8 from './component/signup/signupStep8';
import signupStep9 from './component/signup/signupStep9';
import getStarted from './component/login/getStarted';
import loginUser from './component/login/loginUser';
import userPassword from './component/login/userPassword';
import Dashboard from './component/Dashboard';
import userAcccountSettings from './component/userAcccountSettings';
import privacyPolicy from './component/privacy-policy';
import FAQ from './component/FAQ';
import Careers from './component/Careers';
import ContactUs from './component/ContactUs';
import Events from './component/Events';
import Guidelines from './component/Guidelines';
import Stories from './component/Stories';
import TermConditions from './component/TermConditions';
import Aboutus from './component/Aboutus';


function App() {
  return (

    <Router>
    <div className='App'>
    <Switch>
    <Route path="/" exact component={AppIndex} />
    <Route path="/Privacy-Policy" exact component={privacyPolicy} />
    <Route path="/signupStepOne" component={signupStep1} />
    <Route path="/signupStepTwo" component={signupStep2} />
    <Route path="/signupStepThree" component={signupStep3} />
    <Route path="/signupStepFour" component={signupStep4} />
    <Route path="/signupStepFive" component={signupStep5} />
    <Route path="/signupStepSix" component={signupStep6} />
    <Route path="/signupStepSeven" component={signupStep7} />
    <Route path="/signupStepEight" component={signupStep8} />
    <Route path="/signupStepNine" component={signupStep9} />
    <Route path="/getStarted" component={getStarted} />
    <Route path="/loginUser" component={loginUser} />
    <Route path="/UserLoginPassword" component={userPassword} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/userAccountSetting" component={userAcccountSettings} />
    <Route path="/Aboutus" component={Aboutus} />
    <Route path="/FAQ" component={FAQ} />
    <Route path="/Careers" component={Careers} />
    <Route path="/ContactUs" component={ContactUs} />
    <Route path="/Events" component={Events} />
    <Route path="/Guidelines" component={Guidelines} />
    <Route path="/Stories" component={Stories} />
    <Route path="/TermConditions" component={TermConditions} />
     </Switch>
    </div>
 
  </Router>
  );
}

export default App;
