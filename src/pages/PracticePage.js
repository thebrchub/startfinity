import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/practice_page.scss';
import cardImg1 from '../assets/images/card-img-1.png';
import cardImg2 from '../assets/images/card-img-2.jpg';
import cardImg3 from '../assets/images/corporate.jpg';
import cardImg4 from '../assets/images/card-img-4.jpg';
import cardImg5 from '../assets/images/card-img-5.jpg';
import cardImg7 from '../assets/images/card-img-7.jpg';

export default function PracticePage() {
  return (
    <section className="practice-page-section dark" id="lista-oblasti">
      <SEO
        title="Startfinity Navigator Private Limited | Practice Areas | Business Consultancy"
        keywords="business consultancy, company registration, corporate advisory, strategic planning, funding consultation, digital marketing, HR solutions"
        description="Discover the comprehensive range of services offered by Startfinity Navigator Private Limited, from business setup and corporate services to strategic advisory and global expansion support."
        name="Startfinity Navigator Private Limited | Business Consultancy"
        type="website"
      />
      <div className="container py-4">
        <h1 className="h1 text-center" id="pageHeaderTitle">OUR SERVICES</h1>

        <article className="postcard dark red" id="business-setup">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg1} alt="Business Setup & Asset Management" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">
              BUSINESS SETUP &<br />
              ASSET MANAGEMENT
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We assist in establishing your business and managing assets efficiently.
              Our services cover everything from company registration to strategic asset management,
              ensuring a strong and sustainable business foundation.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">Business Registration</li>
                <li className="tag__item play red">Corporate Structuring</li>
                <li className="tag__item play red">Asset Management Solutions</li>
                <li className="tag__item play red">Operational Efficiency</li>
                <li className="tag__item play red">Financial Planning</li>
                <li className="tag__item play red">Tax Advisory Services</li>
                <li className="tag__item play red">Compliance Consulting</li>
                <li className="tag__item play red">Risk Management Strategies</li>
                <li className="tag__item play red">Investment Planning</li>
                <li className="tag__item play red">Strategic Advisory</li>
                <li className="tag__item play red">Business Optimization</li>
                <li className="tag__item play red">Growth Strategy Development</li>
                <li className="tag__item play red">M&A Support</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue" id="contracts-compliance">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg2} alt="Contracts & Regulatory Compliance" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">CONTRACTS & REGULATORY COMPLIANCE</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We offer expert guidance on drafting, negotiating, and managing contracts while ensuring
              strict adherence to regulatory requirements. Our tailored solutions safeguard your business interests.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Contract Drafting</li>
                <li className="tag__item play blue">Negotiation Support</li>
                <li className="tag__item play blue">Regulatory Compliance</li>
                <li className="tag__item play blue">Risk Mitigation</li>
                <li className="tag__item play blue">Service Agreements</li>
                <li className="tag__item play blue">Partnership Contracts</li>
                <li className="tag__item play blue">Vendor Agreements</li>
                <li className="tag__item play blue">Non-Disclosure Agreements</li>
                <li className="tag__item play blue">Dispute Resolution</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark green" id="family-business">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg4} alt="Family Business & Succession Planning" />
          </div>
          <div className="postcard__text__long">
            <h1 className="postcard__title hov-green">FAMILY BUSINESS & SUCCESSION PLANNING</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We provide strategic advisory for family-owned businesses,
              assisting in leadership transition and succession planning.
              Our expert guidance helps preserve your business legacy for future generations.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">Succession Planning</li>
                <li className="tag__item play green">Leadership Transition</li>
                <li className="tag__item play green">Family Business Advisory</li>
                <li className="tag__item play green">Inheritance Strategy</li>
                <li className="tag__item play green">Legacy Management</li>
                <li className="tag__item play green">Estate Planning</li>
                <li className="tag__item play green">Governance Structures</li>
                <li className="tag__item play green">Conflict Resolution</li>
                <li className="tag__item play green">Continuity Planning</li>
                <li className="tag__item play green">Strategic Advisory</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow" id="hr-organization">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg5} alt="Human Resources & Organizational Development" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">HUMAN RESOURCES & ORGANIZATIONAL DEVELOPMENT</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We deliver comprehensive HR solutions that include workforce planning,
              organizational development, and effective labor relations strategies to create a thriving work environment.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Workforce Planning</li>
                <li className="tag__item play yellow">HR Policy Development</li>
                <li className="tag__item play yellow">Talent Acquisition</li>
                <li className="tag__item play yellow">Employee Engagement</li>
                <li className="tag__item play yellow">Training & Development</li>
                <li className="tag__item play yellow">Organizational Restructuring</li>
                <li className="tag__item play yellow">Labor Relations Consulting</li>
                <li className="tag__item play yellow">Performance Management</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue" id="company-formation">
          <div className="postcard__img_link">
            <img className="postcard__img" style={{ backgroundPosition: 'right' }} src={cardImg3} alt="Company Formation & Corporate Services" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">
              COMPANY FORMATION &<br />
              CORPORATE SERVICES
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We simplify the process of company formation and provide ongoing corporate services.
              From registration to strategic business advisory, we ensure your business is set up for success.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Company Registration</li>
                <li className="tag__item play blue">Corporate Structuring</li>
                <li className="tag__item play blue">Legal Entity Formation</li>
                <li className="tag__item play blue">Statutory Compliance</li>
                <li className="tag__item play blue">Business Licensing</li>
                <li className="tag__item play blue">Governance Advisory</li>
                <li className="tag__item play blue">Shareholder Agreements</li>
                <li className="tag__item play blue">Strategic Business Planning</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow" id="global-expansion">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg7} alt="Global Expansion & Foreign Business Advisory" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">
              GLOBAL EXPANSION &<br />
              FOREIGN BUSINESS ADVISORY
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We assist international entrepreneurs and businesses in navigating global markets.
              Our services include visa facilitation, establishing foreign subsidiaries, and strategic guidance for global expansion.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Visa & Work Permit Assistance</li>
                <li className="tag__item play yellow">Foreign Investment Advisory</li>
                <li className="tag__item play yellow">Global Market Entry</li>
                <li className="tag__item play yellow">International Consulting</li>
                <li className="tag__item play yellow">Cross-Border Tax Planning</li>
                <li className="tag__item play yellow">Subsidiary Formation</li>
                <li className="tag__item play yellow">Regulatory Guidance Abroad</li>
                <li className="tag__item play yellow">Global Expansion Strategy</li>
              </ul>
            </Fade>
          </div>
        </article>
      </div>
    </section>
  );
}
