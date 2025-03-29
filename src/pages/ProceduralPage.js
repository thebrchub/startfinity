/* eslint-disable quotes */
import React from "react";
import { Fade } from "react-awesome-reveal";
import SEO from "../components/SEO";
import "../assets/styles/style-pages/practice_page.scss";
import procOne from "../assets/images/procedural-1.jpg";
import procTwo from "../assets/images/procedural-2.jpg";
import procThree from "../assets/images/procedural-3.jpg";
import procFour from "../assets/images/procedural-4.jpg";
import procFive from "../assets/images/procedural-5.jpg";
import procSix from "../assets/images/procedural-6.jpg";
import procSeven from "../assets/images/procedural-7.jpg";
import procEight from "../assets/images/procedural-8.png";

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
        <h1 className="h1 text-center" id="pageHeaderTitle">BUSINESS PROCEDURES</h1>

        {/* Business Setup & Administrative Support */}
        <article className="postcard dark yellow" id="business-setup">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procOne}
              alt="Business Setup & Administrative Support"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">
              BUSINESS SETUP &amp;
              <br />
              ADMINISTRATIVE SUPPORT
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We help you lay a strong foundation by managing company registration, licensing, and essential documentation—ensuring your business is set up for success.
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

        {/* Contract Negotiation & Dispute Resolution */}
        <article className="postcard dark blue" id="contract-negotiation">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procTwo}
              alt="Contract Negotiation & Dispute Resolution"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">CONTRACT NEGOTIATION &amp; DISPUTE RESOLUTION</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Our experts assist in drafting, negotiating, and managing business contracts, and in resolving disputes effectively to safeguard your interests.
            </div>
            <Fade triggerOnce cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Contract Drafting</li>
                <li className="tag__item play blue">Negotiation Support</li>
                <li className="tag__item play blue">Dispute Resolution</li>
                <li className="tag__item play blue">Mediation Services</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Compliance & Risk Management */}
        <article className="postcard dark green" id="compliance-risk">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procThree}
              alt="Compliance & Risk Management"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">COMPLIANCE &amp; RISK MANAGEMENT</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Stay ahead of regulatory changes with our proactive compliance and risk management solutions, ensuring your business operations remain secure and efficient.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">Regulatory Compliance</li>
                <li className="tag__item play green">Risk Assessment</li>
                <li className="tag__item play green">Internal Audits</li>
                <li className="tag__item play green">Crisis Management</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Alternative Dispute Resolution & Mediation */}
        <article className="postcard dark yellow" id="alternative-dispute">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procFour}
              alt="Alternative Dispute Resolution & Mediation"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">ALTERNATIVE DISPUTE RESOLUTION &amp; MEDIATION</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              When litigation is not the best option, our alternative dispute resolution services help settle conflicts quickly and cost-effectively through mediation and negotiation.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Mediation</li>
                <li className="tag__item play yellow">Negotiation</li>
                <li className="tag__item play yellow">Arbitration Support</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Strategic Advisory & Crisis Management */}
        <article className="postcard dark red" id="strategic-advisory">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procFive}
              alt="Strategic Advisory & Crisis Management"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">STRATEGIC ADVISORY &amp; CRISIS MANAGEMENT</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              In challenging times, our strategic advisory and crisis management services provide actionable insights and effective support to help your business overcome obstacles and seize new opportunities.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">Market Analysis</li>
                <li className="tag__item play red">Business Strategy</li>
                <li className="tag__item play red">Crisis Response</li>
                <li className="tag__item play red">Turnaround Management</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Operational Efficiency & Cost Optimization */}
        <article className="postcard dark yellow" id="operational-efficiency">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procSix}
              alt="Operational Efficiency & Cost Optimization"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">OPERATIONAL EFFICIENCY &amp; COST OPTIMIZATION</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We analyze your business processes to identify cost-saving opportunities and streamline operations, ensuring sustainable growth and improved profitability.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Process Optimization</li>
                <li className="tag__item play yellow">Cost Reduction</li>
                <li className="tag__item play yellow">Efficiency Audits</li>
                <li className="tag__item play yellow">Operational Strategy</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Corporate Formation & Registration Services */}
        <article className="postcard dark green" id="corporate-formation">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procSeven}
              alt="Corporate Formation & Registration Services"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">CORPORATE FORMATION &amp; REGISTRATION SERVICES</h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Our comprehensive corporate formation services cover everything from legal entity registration to structuring your business for long-term success.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">Entity Registration</li>
                <li className="tag__item play green">Corporate Structuring</li>
                <li className="tag__item play green">Legal Documentation</li>
                <li className="tag__item play green">Compliance Setup</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* Restructuring & Insolvency Advisory */}
        <article className="postcard dark blue" id="restructuring-advisory">
          <div className="postcard__img_link">
            <img
              className="postcard__img"
              src={procEight}
              alt="Restructuring &amp; Insolvency Advisory"
            />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">
              RESTRUCTURING &amp; INSOLVENCY ADVISORY
            </h1>
            <div className="postcard__subtitle small">LEARN MORE...</div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Whether you are planning to restructure your business for growth or facing financial challenges, our advisory services provide clear strategies to manage restructuring and insolvency issues.
            </div>
            <Fade triggerOnce>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Business Restructuring</li>
                <li className="tag__item play blue">Insolvency Solutions</li>
                <li className="tag__item play blue">Turnaround Strategies</li>
                <li className="tag__item play blue">Stakeholder Protection</li>
              </ul>
            </Fade>
          </div>
        </article>
      </div>
    </section>
  );
}
