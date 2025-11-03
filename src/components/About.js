/* eslint-disable jsx-quotes */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../assets/styles/about.scss';

export default function About() {
  return (
    <section id="about-section">
      <div className="about-wrapper">
        <div className="inner-container">
          <h2>ABOUT US</h2>
          <Fade triggerOnce duration={1500}><h3>Startfinity Navigator Private Limited</h3></Fade>
          <Fade triggerOnce duration={1500}>
            <p className="text">
              {`Startfinity Navigator Private Limited is a premier business consultancy firm dedicated to empowering entrepreneurs and enterprises across India. Our mission is to simplify the complexities of business operations—handling registrations, compliance, taxation, and strategic advisory—so that you can focus on expanding your vision. We offer a comprehensive suite of services tailored to meet the unique needs of startups, SMEs, and large enterprises alike. With a commitment to professionalism, innovation, and personalized support, we work relentlessly to help your business succeed in a competitive market.`.substring(0, 480)}
              <a
                href="/about"
                className="read-more-btn"
                style={{
                  color: 'chocolate',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
              >
                ...Read More
              </a>
            </p>
          </Fade>
          <Fade triggerOnce duration={1500}>
            <div className="skills">
              <span>Professionalism</span>
              <span>Expertise</span>
              <span>Approachability</span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
