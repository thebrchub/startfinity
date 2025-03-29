import React from 'react';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/practice_page.scss';
import cardImg1 from '../assets/images/card-img-1.png';
import cardImg2 from '../assets/images/card-img-2.jpg';
import cardImg3 from '../assets/images/corporate.jpg';
import cardImg4 from '../assets/images/card-img-4.jpg';

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
        <h1 className="h1 text-center" id="pageHeaderTitle">OUR OFFERING</h1>

        <article className="postcard dark red" id="kick-start-your-business">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg1} alt="Kick Start Your Business" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-red">
              KICK START YOUR BUSINESS
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Business Registration, Trademark Registration, Annual Compliances, BIS Certification, Make in India.
            </div>
          </div>
        </article>

        <article className="postcard dark blue" id="funding-consultation">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg2} alt="Funding Consultation" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-blue">
              FUNDING CONSULTATION
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Govt. Grants &amp; Loans, Startup India SEED Fund, MSME Loans, State Schemes, Venture Capital &amp; Angel Investors.
            </div>
          </div>
        </article>

        <article className="postcard dark green" id="certification">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg3} alt="Certification" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-green">
              CERTIFICATION
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Startup India, Tax Exemption, MSME Registration, GEM Registration, ZED, ISO &amp; IEC.
            </div>
          </div>
        </article>

        <article className="postcard dark yellow" id="digital-marketing">
          <div className="postcard__img_link">
            <img className="postcard__img" src={cardImg4} alt="Digital Marketing Solutions" />
          </div>
          <div className="postcard__text">
            <h1 className="postcard__title hov-yellow">
              DIGITAL MARKETING SOLUTIONS
            </h1>
            <div className="postcard__subtitle small">
              LEARN MORE...
            </div>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Social Media Marketing, SEO &amp; SEM, Google Ads, Content Creation, Competitive Analysis.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
