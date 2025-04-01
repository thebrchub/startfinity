/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import React, { useState, useRef } from "react";
import {
  ToastContainer,
  toast
} from "react-toastify";
import { AttentionSeeker } from "react-awesome-reveal";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/contact.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
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
        "https://email-service-ytdv.onrender.com/send/mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success(
        "Your email was sent successfully. Expect a response within 24 hours.",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <section id="contact-section">
      <h2>Have questions? Send us an email</h2>
      <AttentionSeeker delay={300} triggerOnce>
        <Tabs id="tabs" selectedTabClassName="active-tab">
          <TabList>
            <Tab>
              <h5 className="header-h5">CONTACT</h5>
            </Tab>
            <Tab>
              <h5 className="header-h5">LOCATION</h5>
            </Tab>
          </TabList>
          <TabPanel className="tab-panel">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="row">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <input
                type="text"
                name="mobile"
                className="form-control full"
                placeholder="Mobile No."
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                required
              />
              <textarea
                name="message"
                rows="3"
                className="form-control full"
                id="contact-message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button type="submit" className="form-control control-btn">
                Send
              </button>
              <ToastContainer />
            </form>
          </TabPanel>
          <TabPanel className="tab-panel">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.242706039029!2d72.60034557963974!3d23.051561925402087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e841a8fb6688b%3A0x74c28945e5a91979!2sCivil%20Hospital%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1742738071779!5m2!1sen!2sin"
                title="Google Maps"
                width="100%"
                height="375"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </TabPanel>
        </Tabs>
      </AttentionSeeker>
    </section>
  );
}
