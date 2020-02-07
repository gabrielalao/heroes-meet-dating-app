import React, { Component } from 'react';
import uploadImage from "../../assets/images/upload_images_mannual.png"
import facebookUpload from "../../assets/images/facebook_upload.png"
import instagramUpload from "../../assets/images/instagram_upload.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Footer from '../common/footer';
import SingupHeader from '../common/SingupHeader';


class SignupStep8 extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({ files })
    };
    this.state = {
      files: []
    };
    console.log('localstorage ****** ',JSON.parse(window.localStorage.getItem('signupData')))
  }

  createUser(event){
    event.preventDefault();

    let reqObj = JSON.parse(window.localStorage.getItem('signupData'));

    const url = 'https://secure-earth-47635.herokuapp.com/users/signup';

    if(this.state.files.length < 6){
      alert('Please add atleast 6 pictures')
    }else{
      fetch(url, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "full_name": reqObj.name,
          "dob": reqObj.birthday,
          "phoneNum": reqObj.phoneNum,
          "password": reqObj.password,
          "verified": 0,
          "gender": reqObj.gender,
          "category": reqObj.category
        })
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result ******* ',result)
          if(result.statusCode == 200){
            window.localStorage.setItem('userData',JSON.stringify(result.data))
            this.props.history.push('/dashboard')
            alert(result.message)
          }else{
            alert(result.message)
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

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        <img src={file.name} />
        {file.name}
      </li>
    ));

    return (
      <div>
        <SingupHeader />
        <section id="signup-screen">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              </div>
              <div className="text-left col-md-4">
                <p className="otp">Now it’s time to upload some photos</p>
                <p className="text-center">Adding photos is a great way to show off more about yourself! you can drag your photos right from you desktop
        </p>
                <div className="upload_images">
                  <p>We accept JPGs and PNGs of at least 500x500px </p>

                  <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="container">
                        <div class="uploaded_images">
                          <ul class="upload_images">
                            {files}
                          </ul>
                        </div>
                        <div className='drag-photos'>
                          <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <div className="drag-photos-colum">
                              <p>Drag and drop photos here or click here</p>
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  <ul className="upload_images">
                    <li><a href="#">
                      <img src={facebookUpload} alt="User one" />
                    </a></li>
                    <li><a href="#"><img src={instagramUpload} alt="User one" /> </a></li>
                    <li><a href="#"> <img src={uploadImage} alt="User one" /> </a></li>
                  </ul>
                  <div className="text-center">
                    <a onClick={(e) => this.createUser(e)} className="btn theme-color-them-btn btn-primary">Continue</a>
                  </div>
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

export default withRouter(SignupStep8);
