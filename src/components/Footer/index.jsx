import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGooglePlay,
} from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

import "./index.css";
import { SiHuawei } from "react-icons/si";
import { useUserContext } from "../../context/user/user.provider";
import { LANGUAGE_MAP } from "../../constants";

const Footer = () => {
  const { language } = useUserContext();
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="social-icons">
            <h3>{LANGUAGE_MAP[language]["Find Our Socials"]}</h3>
            <ul className="social-icons-list">
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="social-icon" size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="social-icon" size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter className="social-icon" size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div className="download-icons">
            <h3>{LANGUAGE_MAP[language]["Download Our App"]}</h3>
            <ul className="download-icons-list">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.nike.omega&hl=en&gl=US&pli=1">
                  <FaGooglePlay className="google-play-icon" size={30} />
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/nike-shoes-apparel-stories/id1095459556">
                  <GrAppleAppStore className="social-icon" size={30} />
                </a>
              </li>
              <li>
                <a href="https://consumer.huawei.com/pk/mobileservices/appgallery/">
                  <SiHuawei className="social-icon" size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
