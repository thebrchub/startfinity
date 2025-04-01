/* eslint-disable comma-dangle */
import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-awesome-reveal';
import { AiFillPhone, AiOutlineGlobal } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import '../assets/styles/new_form.scss';
import SEO from './SEO';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      mobile,
      message,
    };

    try {
      const response = await fetch(
        'https://email-service-ytdv.onrender.com/send/mail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success(
        'Your email was sent successfully. Expect a response within 24 hours.',
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    } catch (error) {
      toast.error(
        'Something went wrong. Please try again later. If the issue persists, contact us directly at startfinitynavigator@gmail.com',
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };

  return (
    <Zoom triggerOnce>
      <div className="container-form" id="contact-form">
        <SEO
          title="Startfinity Navigator Private Limited | Contact | Business Consultancy"
          keywords="contact, business consultancy, company registration, strategic advisory, business support"
          description="Contact Startfinity Navigator Private Limited for comprehensive business consultancy services. We assist with company registration, compliance, and strategic planning."
          name="Startfinity Navigator Private Limited | Business Consultancy"
          type="website"
        />
        <h1 className="brand">CONTACT FORM</h1>
        <div className="wrapper">
          <div className="company-info">
            <h3 className="new-form-h3">Information</h3>
            <ul>
              <li>
                <p className="form-col-one">
                  <span>
                    <MdLocationOn />
                  </span>
                </p>
                <p className="form-col-two">
                  <i>Address: </i>
                  565/43, Gokulchand Kastur, Chandni, Navi Chali, Civil Hospital, Ahmedabad, Ahmadabad City, Gujarat, India, 380016
                </p>
              </li>
              <li>
                <p className="form-col-one">
                  <span>
                    <AiFillPhone />
                  </span>
                </p>
                <p className="form-col-two">
                  <i>Phone: </i>
                  +91 91571 42657
                </p>
              </li>
              <li>
                <p className="form-col-one">
                  <span>
                    <MdEmail />
                  </span>
                </p>
                <p className="form-col-two">
                  <i>Email: </i>
                  <a className="new-form-href" href="mailto:startfinitynavigator@gmail.com">
                    startfinitynavigator@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="form-col-one">
                  <span>
                    <AiOutlineGlobal />
                  </span>
                </p>
                <p className="form-col-two">
                  <i>Web: </i>
                  <a className="new-form-href" href="https://www.startfinitynavigator.com">
                    www.startfinitynavigator.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3 className="new-form-h3">Send Email</h3>
            <form ref={form} onSubmit={sendEmail}>
              <p>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </p>
              <p>
                <input
                  type="email"
                  name="user_email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </p>
              <p className="full">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile No."
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  required
                />
              </p>
              <p className="full">
                <textarea
                  name="message"
                  rows="5"
                  id="contact-message"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </p>
              <p className="full-flex-center">
                <button type="submit" className="control-btn">
                  Send
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
