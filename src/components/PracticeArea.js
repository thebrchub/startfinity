import React from "react";
import { Zoom } from "react-awesome-reveal";
import "../assets/styles/practice_area.scss";
import ReadMoreOrLess from "./ReadMoreOrLess";
import cardImg1 from "../assets/images/card-img-1.png";
import cardImg2 from "../assets/images/card-img-2.jpg";
import cardImg3 from "../assets/images/card-img-3.jpg";
import cardImg4 from "../assets/images/card-img-4.jpg";
import cardImg5 from "../assets/images/card-img-5.jpg";
import cardImg6 from "../assets/images/card-img-6.jpg";

export default function PracticeArea() {
  return (
    <section className="practice-area-section" id="moje-usluge">
      <h2 className="heading-2">OUR OFFERING</h2>
      <Zoom triggerOnce delay={300} duration={1500}>
        <div className="cards">
          {/* Card 1: Kick Start Your Business */}
          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg1} alt="Kick Start Your Business" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                KICK START YOUR BUSINESS
              </h3>
              <ReadMoreOrLess limit={56}>
                We provide comprehensive support to launch your venture—from company registration and trademark filing to annual compliances, BIS certification, and Make in India guidance.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#kick-start-your-business" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 2: Funding Consultation */}
          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg2} alt="Funding Consultation" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                FUNDING CONSULTATION
              </h3>
              <ReadMoreOrLess limit={56}>
                Our experts help you access government grants &amp; loans, Startup India SEED Fund, MSME loans, state schemes, and connect with venture capital and angel investors.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#funding-consultation" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 3: Certification */}
          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg3} alt="Certification Services" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                CERTIFICATION
              </h3>
              <ReadMoreOrLess limit={56}>
                Obtain essential certifications including Startup India, Tax Exemption, MSME Registration, GEM Registration, and compliance with ZED, ISO &amp; IEC standards.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#certification" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 4: Digital Marketing Solutions */}
          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg4} alt="Digital Marketing Solutions" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                DIGITAL MARKETING SOLUTIONS
              </h3>
              <ReadMoreOrLess limit={56}>
                Enhance your online presence with our digital marketing services, including social media marketing, SEO &amp; SEM, Google Ads, content creation, and competitive analysis.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#digital-marketing" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 5: Strategic Advisory */}
          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg5} alt="Strategic Advisory" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                STRATEGIC ADVISORY
              </h3>
              <ReadMoreOrLess limit={56}>
                Our strategic advisory services provide actionable insights and tailored strategies to drive growth, innovation, and long-term success.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#strategic-advisory" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 6: Operations & Optimization */}
          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg6} alt="Operations & Optimization" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                OPERATIONS & OPTIMIZATION
              </h3>
              <ReadMoreOrLess limit={56}>
                We analyze and streamline your business processes to enhance efficiency, reduce costs, and maximize overall performance.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#operations-optimization" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}
