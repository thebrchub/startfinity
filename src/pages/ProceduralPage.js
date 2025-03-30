import React from "react";
import { Fade } from "react-awesome-reveal";
import SEO from "../components/SEO";
import "../assets/styles/style-pages/practice_page.scss";
import procOne from "../assets/images/procedural-1.jpg";
import procTwo from "../assets/images/procedural-2.jpg";
import procThree from "../assets/images/procedural-3.jpg";
import procFour from "../assets/images/procedural-4.jpg";

export default function ProceduralPage() {
  return (
    <section className="practice-page-section dark" id="lista-postupaka">
      <SEO
        title="Startfinity Navigator Private Limited | Business Procedures | Global Advisory"
        keywords="business procedures, company setup, contract negotiation, compliance, risk management, corporate formation, restructuring, advisory services"
        description="Explore the range of business procedures and consultancy services offered by Startfinity Navigator Private Limited, including business setup, contract negotiation, compliance management, and strategic advisory."
        name="Startfinity Navigator Private Limited | Business Consultancy"
        type="website"
      />
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">
          BUSINESS PROCEDURES
        </h1>

        {/* Article 1: Select Your Plan */}
        <article className="postcard dark yellow" id="select-your-plan">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procOne}
              alt="Select Your Plan"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">
              Select Your &amp;
              <br />
              Plan
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Explore our service plans tailored to your business needs and growth stage.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Company Registration</li>
                <li className="tag__item play yellow">License Acquisition</li>
                <li className="tag__item play yellow">Document Management</li>
                <li className="tag__item play yellow">Operational Setup</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Article 2: Connect with an Expert */}
        <article className="postcard dark blue" id="connect-with-expert">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procTwo}
              alt="Connect with an Expert"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">
              Connect with &amp;
              <br />
              An Expert
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Schedule a consultation with our Business Consultant to align on goals and support.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Consultation Scheduling</li>
                <li className="tag__item play blue">Goal Alignment</li>
                <li className="tag__item play blue">Expert Support</li>
                <li className="tag__item play blue">Ongoing Guidance</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Article 3: Customize Your Strategy */}
        <article className="postcard dark green" id="customize-your-strategy">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procThree}
              alt="Customize Your Strategy"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">
              Customize Your &amp;
              <br />
              Strategy
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Refine and finalize your plan to ensure it meets your objectives.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">Plan Refinement</li>
                <li className="tag__item play green">Objective Setting</li>
                <li className="tag__item play green">Detailed Analysis</li>
                <li className="tag__item play green">Implementation Roadmap</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Article 4: Archieve Success */}
        <article className="postcard dark red" id="archieve-success">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procFour}
              alt="Archieve Success"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">
              Archieve &amp;
              <br />
              Success
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Leverage our solutions to drive your business forward with expert support.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">Business Acceleration</li>
                <li className="tag__item play red">Expert Guidance</li>
                <li className="tag__item play red">Long-Term Growth</li>
                <li className="tag__item play red">Strategic Partnerships</li>
              </ul>
            </Fade>
          </div>
        </article>
      </div>
    </section>
  );
}
