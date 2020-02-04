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
  }

  setGender(event) {
    console.log(event.target.value);
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
                    <a onClick={() => this.props.history.push('/dashboard')} className="btn theme-color-them-btn btn-primary">Continue</a>
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
