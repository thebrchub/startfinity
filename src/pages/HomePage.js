import React from 'react';
import About from '../components/About';
import PracticeArea from '../components/PracticeArea';
import Contact from '../components/Contact';
import Quote from '../components/Quote';
import SEO from '../components/SEO';
// import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Startfinity Navigator Private Limited | Business Consultancy"
        description="Startfinity Navigator Private Limited provides comprehensive business consultancy services, empowering entrepreneurs and businesses to focus on growth while we manage legal, operational, and regulatory complexities."
        keywords="business consultancy, company registration, legal support, compliance, business growth, entrepreneurship"
        name="Startfinity Navigator Private Limited | Business Consultancy"
        type="website"
      />
      <About />
      <Quote />
      <PracticeArea />
      <Testimonials />
      <Contact />
      <br/>
      {/* <Blogs /> */}
    </>
  );
}
