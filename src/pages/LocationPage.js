import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import '../assets/styles/style-pages/location_page.scss';
import SEO from '../components/SEO';

export default function LocationPage() {
  return (
    <Zoom triggerOnce>
      <section className="loc-cont" id="lokacija-mapa">
        <SEO
          title="Startfinity Navigator Private Limited | Location | Business Consultancy"
          keywords="Startfinity Navigator, business consultancy, location, contact, corporate solutions"
          description="Discover the location of Startfinity Navigator Private Limited – your trusted business consultancy partner dedicated to seamless support and expert guidance."
          name="Startfinity Navigator Private Limited | Business Consultancy"
          type="website"
        />
        <h1>LOCATION</h1>
        <div className="loc-wrap">
          <div className="loc-img" />
          <div className="loc-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d776.9615983569755!2d72.67632590057767!3d23.069672669483204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA0JzExLjkiTiA3MsKwNDAnMzUuNSJF!5e0!3m2!1sen!2sin!4v1743486362282!5m2!1sen!2sin"
              title="Startfinity Navigator Private Limited Location"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Zoom>
  );
}
