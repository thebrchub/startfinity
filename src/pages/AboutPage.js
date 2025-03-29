import React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import '../assets/styles/style-pages/about_page.scss';

export default function AboutPage() {
  return (
    <section className="about-page-section" id="opsirnije">
      <SEO
        title="Startfinity Navigator Private Limited | About Us"
        name="Startfinity Navigator Private Limited | Business Consultancy"
        description="Startfinity Navigator Private Limited provides end-to-end business consultancy services, empowering entrepreneurs and businesses to focus on growth while we handle the legal, operational, and regulatory complexities."
        keywords="business consultancy, company registration, legal support, compliance, business growth, entrepreneurship"
        type="website"
      />
      <h1>ABOUT US</h1>

      <div id="about-page-wrapper">
        <div id="about-page-text">
          <Fade triggerOnce cascade damping={0.2}>
            <p>
              Startfinity Navigator Private Limited is a leading business consultancy firm dedicated to helping
              entrepreneurs and businesses navigate the complexities of today’s corporate landscape.
              We provide a comprehensive suite of services that simplify company registration, licensing,
              compliance, taxation, and more, so you can focus on growing your vision.
            </p>
            <p>
              Our experienced team offers personalized solutions tailored to the unique needs of startups, small businesses,
              and large enterprises. From strategic consultation to operational support, we work closely with our clients
              to ensure efficient, transparent, and innovative outcomes.
            </p>
            <p>
              At Startfinity Navigator Private Limited, our mission is to empower businesses by eliminating bureaucratic hurdles
              and delivering end-to-end solutions that foster growth, success, and innovation. Our core values of integrity,
              excellence, client-centricity, innovation, and reliability are at the heart of everything we do.
            </p>
            <p>
              Our vision is to be the most trusted business consultancy partner in the region, providing seamless and comprehensive
              support that drives entrepreneurial success. We continually strive to exceed expectations and build lasting relationships.
            </p>
            <p>
              Explore our wide range of services and discover how Startfinity Navigator Private Limited can help your business thrive.
              With our expert guidance, you can confidently focus on building your vision while we take care of the formalities.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
