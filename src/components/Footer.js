import React from "react";
import "../assets/styles/footer.scss";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
// import bannerImg from "../assets/images/balance.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-banner">
        <img src={bannerImg} alt="Balance Snapshot" />
      </div> */}
      <div className="footer-wrapper">
        <div className="container">
          <div className="rowy">
            <div className="footer-col">
              <h4>Our Company</h4>
              <ul className="nav-items">
                <li><a href="/about#more">&gt; About Us</a></li>
                <li><a href="/#services">&gt; Our Services</a></li>
                <li><a href="/privacy#policy">&gt; Privacy Policy</a></li>
                <li><a href="/terms#conditions">&gt; Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul className="nav-items">
                <li><a href="/pricing#info">&gt; Pricing</a></li>
                <li><a href="/faq#faq">&gt; FAQ</a></li>
                <li><a href="/practice-areas#list">&gt; Practice Areas</a></li>
                <li><a href="/procedures#list">&gt; Procedures</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="nav-items">
                <li className="contact-li">
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-a flex-center-a"
                  >
                    <MdLocationOn className="footer-icon" />
                    <i className="footer-info-i">
                      123 Business Park, Mumbai, India
                    </i>
                  </a>
                </li>
                <li className="contact-li">
                  <span className="footer-span contact-a flex-center-a">
                    <AiFillPhone className="footer-icon" />
                    <i className="footer-info-i">+91 12345 67890</i>
                  </span>
                </li>
                <li className="contact-li">
                  <a
                    href="mailto:info@startfinitynavigator.com"
                    className="contact-a flex-center-a"
                  >
                    <MdEmail className="footer-icon" />
                    <i className="footer-info-i">
                      info@startfinitynavigator.com
                    </i>
                  </a>
                </li>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/startfinitynavigator"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <BsFacebook className="fab fa-facebook" />
                  </a>
                </div>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Working Hours</h4>
              <ul className="nav-items">
                <li>
                  <span className="footer-span">Mon-Fri: 09:00-18:00</span>
                </li>
                <li>
                  <span className="footer-span">Sat-Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <i className="copyright-alert">
          All rights reserved &copy; 2023 | Startfinity Navigator Private Limited
        </i>
      </div>
    </footer>
  );
}
