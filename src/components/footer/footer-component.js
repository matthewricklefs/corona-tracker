import React from "react";
import '../../styles/footer.css'
import img4 from '../../images/img4.png'

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={img4}></img>
      </div>

      <div className="footer-phone-hours">
        <span className="phone">
          555 555 5555
        </span>
        <span className="hours">
          Updates based upon Daily Statistics
        </span>
        <div className="links-wrapper">
          <div className="footer-links">
            <a href="">Home</a>
          </div>
          <div className="footer-links">
            <a href="">Menu</a>
          </div>
          <div className="footer-links">
            <a href="">Statistics</a>
          </div>
        </div>
      </div>
      <div className="social-media-icons-wrapper">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#"></a>
      </div>
      <div className="copyright-wrapper">
        &copy; 2021 Bottega University &#124; All rights reserved
      </div>
    </div>
  );
};

export default FooterComponent;
