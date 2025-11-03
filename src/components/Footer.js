/* eslint-disable quotes */
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
                <li><a href="/about">&gt; About Us</a></li>
                <li><a href="/services">&gt; Our Services</a></li>
                <li><a href="/process">&gt; Process</a></li>
                {/* <li><a href="/privacy#policy">&gt; Privacy Policy</a></li>
                <li><a href="/terms#conditions">&gt; Terms of Service</a></li> */}
              </ul>
            </div>
            {/* <div className="footer-col">
              <h4>Navigation</h4>
              <ul className="nav-items">
                <li><a href="/pricing#info">&gt; Pricing</a></li>
                <li><a href="/faq#faq">&gt; FAQ</a></li>
                <li><a href="/practice-areas#list">&gt; Practice Areas</a></li>
                <li><a href="/Process#list">&gt; Process</a></li>
              </ul>
            </div> */}
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
                      565/43, Gokulchand Kastur, Chandni, Navi Chali, Civil Hospital, Ahmedabad, Gujarat, India, 380016
                    </i>
                  </a>
                </li>
                <li className="contact-li">
                  <span className="footer-span contact-a flex-center-a">
                    <AiFillPhone className="footer-icon" />
                    <i className="footer-info-i">+91 91571 42657</i>
                  </span>
                </li>
                <li className="contact-li">
                  <a
                    href="mailto:startfinitynavigator@gmail.com"
                    className="contact-a flex-center-a"
                  >
                    <MdEmail className="footer-icon" />
                    <i className="footer-info-i">
                      startfinitynavigator@gmail.com
                    </i>
                  </a>
                </li>
                <br/>

                {/* <div className="social-links">
                  <a
                    href="https://www.facebook.com/startfinitynavigator"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <BsFacebook className="fab fa-facebook" />
                  </a>
                </div> */}
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

        {/* Disclaimer Section */}
        <div className="footer-disclaimer">
          <p><strong>Disclaimer:</strong> We are a Start-up consultant in India and professionals in Start-up consultation and understand the requirements of today’s enterprises. We are merely a consultancy service-providing company and not in any affiliation/collaboration with any Government/Non-Government Agency / Institutions / Organization / Department.</p>
          
          <br/>
          <p><strong>Note:</strong> Payments for services are only accepted in the name of Startfinity Navigator Private Limited, and the type of account is solely “Current Account” via NEFT/IMPS/RTGS and digital payment wallets (Cash Free, Razor pay, Aggrepay) and we do not accept payments on personal accounts or under any other name.</p>
        </div>

        <i className="copyright-alert">
          All rights reserved &copy; 2025 | Startfinity Navigator Private Limited | This Website is Developed by <strong><a href="https://www.thebrchub.tech" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>BRC Hub LLP</a></strong>
        </i>
      </div>
    </footer>
  );
}

