import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="" /> */}
          <h1 className="bhojan">BHOJAN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            dignissimos quas facilis neque iste eligendi dolores ipsam,
            asperiores esse, itaque assumenda officiis excepturi, et quibusdam
            ea? Dolorum deleniti repudiandae sunt.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 87656 66983</li>
            <li>contact.bhojan.in</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2024 Bhojan.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
