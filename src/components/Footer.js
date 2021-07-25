import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <h3 className="text-center">sunnyside</h3>
      <ul className="footer-items d-flex justify-content-center">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>

      <ul className="social-icons d-flex justify-content-center">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaPinterest />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
