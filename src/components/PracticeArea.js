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
      <h2 className="heading-2">OUR SERVICES</h2>
      <Zoom triggerOnce delay={300} duration={1500}>
        <div className="cards">
          {/* Card 1 */}
          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg1} alt="Business Setup & Asset Management" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                KICK START YOUR BUSINESS
              </h3>
              <ReadMoreOrLess limit={56}>
                We assist you in establishing your business from the ground up, managing company registration, licensing, and initial asset management to build a strong foundation.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#imovinsko-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg2} alt="Contract Negotiation & Legal Advisory" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                CONTRACT NEGOTIATION & LEGAL ADVISORY
              </h3>
              <ReadMoreOrLess limit={56}>
                Our expert team provides support in drafting, reviewing, and negotiating contracts to safeguard your business interests.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#obligaciono-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg3} alt="Family Business & Succession Planning" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                FAMILY BUSINESS & SUCCESSION PLANNING
              </h3>
              <ReadMoreOrLess limit={56}>
                We offer strategic advisory for family-owned businesses, guiding leadership transitions and helping preserve your business legacy.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#porodicno-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card card1">
            <div className="practice-area-container">
              <img src={cardImg4} alt="Corporate Structuring & Business Strategy" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                CORPORATE STRUCTURING & BUSINESS STRATEGY
              </h3>
              <ReadMoreOrLess limit={56}>
                We help optimize your business model by aligning your operations and strategy with market demands to ensure sustainable growth.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#privredno-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card card2">
            <div className="practice-area-container">
              <img src={cardImg5} alt="Employment & HR Consulting" />
            </div>
            <div className="details">
              <h3 className="details-h3 mg-set">
                EMPLOYMENT & HR CONSULTING
              </h3>
              <ReadMoreOrLess limit={56}>
                Our HR experts provide comprehensive solutions covering recruitment, compliance, and employee engagement to build a productive workforce.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#radno-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card card3">
            <div className="practice-area-container">
              <img src={cardImg6} alt="Immigration & International Business Advisory" />
            </div>
            <div className="details">
              <h3 className="details-h3 margin-none">
                IMMIGRATION & INTERNATIONAL BUSINESS ADVISORY
              </h3>
              <ReadMoreOrLess limit={56}>
                We support foreign investors and international businesses by managing regulatory and administrative processes for market entry and expansion.
              </ReadMoreOrLess>
              <a href="/pravne-oblasti#imigraciono-pravo" className="card-button">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </Zoom>
    </section>
  );
}
