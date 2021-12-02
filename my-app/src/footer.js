import './App.css';
import React from 'react';
import './App.css';

const Footer = () => {
	return (
        <div class="footer footer-margin fixed-bottom">
        <footer class="card-footer footer-font-style text-muted footer-position" />
        <div class="col-1" style={{ minWidth: "400px;" }}>
          <i class="fa fa-facebook-f fab"></i>
          <i class="fa fa-twitter fab"></i>
          <i class="fa fa-instagram fab"></i>
          <div class="footer_logo">
            <img
              src="images/footer.png"
              style={{ height: "90px;", marginRight:'-50px'}}
              class="footerLogo"
            />
          </div>
        </div>
      </div>
     );
  };