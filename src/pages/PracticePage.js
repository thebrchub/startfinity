import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/practice_page.scss';
import cardImg1 from '../assets/images/card-img-1.png';
import cardImg2 from '../assets/images/card-img-2.jpg';
// import cardImg3 from '../assets/images/corporate.jpg';
import cardImg4 from '../assets/images/card-img-3.jpg';
import cardImg5 from '../assets/images/card-img-4.jpg';
// import cardImg7 from '../assets/images/card-img-7.jpg';

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
              Kick Start Your Business<br />
              
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              We provide comprehensive support to launch your venture—from company registration and trademark filing to annual compliances, BIS certification, and Make in India guidance.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play red">Business Registration</li>
                <li className="tag__item play red">Trademark Registration</li>
                <li className="tag__item play red">Annual Compliances</li>
                <li className="tag__item play red">BIS Certification</li>
                <li className="tag__item play red">Make in India</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark blue" id="contracts-compliance">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg2} alt="Contracts & Regulatory Compliance" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">FUNDING CONSULTATION</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Our experts help you access government grants & loans, Startup India SEED Fund, MSME loans, state schemes, and connect with venture capital and angel investors.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play blue">Govt. Grants & Loans</li>
                <li className="tag__item play blue">Startup India SEED Fund</li>
                <li className="tag__item play blue">MSME Loans</li>
                <li className="tag__item play blue">State Schemes</li>
                <li className="tag__item play blue">Venture Capital</li>
                <li className="tag__item play blue">Angel Investors</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark green" id="family-business">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg4} alt="Family Business & Succession Planning" />
          </div>
          <div className="postcard__text__long">
            <h1 className="postcard__title hov-green">CERTIFICATION</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Obtain essential certifications including Startup India, Tax Exemption, MSME Registration, GEM Registration, and compliance with ZED, ISO & IEC standards.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play green">Startup India</li>
                <li className="tag__item play green">Tax Exemption</li>
                <li className="tag__item play green">MSME Registration</li>
                <li className="tag__item play green">GEM Registration</li>
                <li className="tag__item play green">ZED, ISO & IEC</li>
              </ul>
            </Fade>
          </div>
        </article>

        <article className="postcard dark yellow" id="hr-organization">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg5} alt="Human Resources & Organizational Development" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">DIGITAL MARKETING SOLUTIONS</h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Enhance your online presence with our digital marketing services, including social media marketing, SEO & SEM, Google Ads, content creation, and competitive analysis.
            </div>
            <Fade triggerOnce damping={0.1} cascade>
              <ul className="postcard__tagbox">
                <li className="tag__item play yellow">Social Media Marketing</li>
                <li className="tag__item play yellow">SEO & SEM</li>
                <li className="tag__item play yellow">Google Ads</li>
                <li className="tag__item play yellow">Content Creation</li>
                <li className="tag__item play yellow">Competitive Analysis</li>
              </ul>
            </Fade>
          </div>
        </article>

        {/* <article className="postcard dark blue" id="company-formation">
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
        </article> */}
      </div>
    </section>
  );
}
