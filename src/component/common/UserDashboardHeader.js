import React, { Component } from 'react';
import heroesmeetLogo from '../../assets/images/heroesmeet-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import menuLogo from "../../assets/images/menu_logo.png";

class UserDashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            womenClicked: false
        };

        this.state = {
            accountSetting: true
        };

    }
    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div>
                <header id="user-dashboard-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="heroesmeet_main_logo">
                                    <a onClick={() => this.props.history.push('/')}><img src={heroesmeetLogo} /></a>
                                </div>
                                <span id="mobile-toogle-opner" style={{ "font-size": 30, "cursor": 'pointer' }} onClick={() => this.openNav()}>&#9776;</span>
                            </div>

                            <div className="menubar col-md-9">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <div className="collapse navbar-collapse" id="site-main-bar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fas fa-user" /> Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fas fa-bell" /> Notification</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div id="mySidenav" className="sidenav">
                                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                                <div className="menu-logo">
                                    <img src={menuLogo} alt="User one" />
                                </div>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fas fa-user" /> Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fas fa-bell" /> Notification</a>
                                    </li>
                                </ul>
                                <footer id="menu-footer">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-android"></i> Get HeroesMeet</a>

                                            <a href="#" className="btn theme-color-btn btn-primary" data-toggle="modal" data-target="#login-modal"><i className="fab fa-apple"></i> Get HeroesMeet</a>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="footer-social-icon">
                                                <ul>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-pinterest-square"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default UserDashboardHeader;
