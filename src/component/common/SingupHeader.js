import React, { Component } from 'react';
import heroesmeetLogo from '../../assets/images/heroesmeet-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class SignupHeader extends Component {

  render() {
    return (

<header id="signup">
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="heroesmeet_main_logo">
            <a onClick={()=>this.props.history.push('/')}><img src={heroesmeetLogo} /></a>
            </div>
        </div> 
    </div>
</div>
</header>
          );
        
  }
}

export default withRouter(SignupHeader);
