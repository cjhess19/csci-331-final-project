import './App.css';
import React from 'react';
import './App.css';

const Footer = () => {
	return (

        <div class="footer footer-margin fixed-bottom">
        <footer class="card-footer footer-font-style text-muted footer-position" style={{minHeight:'230px'}}>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-10 bg-white">
                        <div class="row gx-0">
                            <div class="col-sm-3">
                                <div class="card shadow" style={{width: '12rem'}}>
                                    <img src="images/bridgerbowl.png" class="card-img-top" alt="..."
                                        style={{width: '11.9rem'}}/>
                                    <div class="card-body" style={{height:'78px'}}>
                                        <h7 class="card-title">Bridger Bowl      </h7>
                                        <button class="btn-sm">Let's go</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card shadow" style={{width: '12rem'}}>
                                    <img src="images/bigsky.png" class="card-img-top" alt="..." style={{width: '11.9rem'}}/>
                                    <div class="card-body" style={{height:'78px'}}>
                                        Big Sky Resort
                                        <button class="btn-sm">Let's go</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card shadow" style={{width: '12rem'}}>
                                    <img src="images/whitefish.png" class="card-img-top" alt="..."
                                        style={{width: '11.9rem'}}/>
                                    <div class="card-body" style={{height:'78px'}}>
                                        Whitefish Mountain
                                        <button class="btn-sm">Let's go</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 resorts fs-6">
                                <h5 class="h7">Recommended Resorts</h5>
                                <p class="sm">Don't know where to go? Scroll through some of Montana's most popular Ski
                                    Destinations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 socialmedia">
                        <i class="fa fa-facebook-f icon-style"></i>
                        <i class="fa fa-twitter icon-style"></i>
                        <i class="fa fa-instagram icon-style"></i>
                        <div class="footer_logo">
                            <img src="images/footer.png" style={{height:'90px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
     );
  };