import React from "react";
import { Parallax } from "react-parallax";
import bg from "../assets/images/faculty-of-law.jpg";
import "../assets/styles/quote.scss";

const Quote = () => (
  <div className="parallax-wrapper">
    <Parallax strength={300} bgImage={bg} bgImageAlt="quote">
      <div className="parallax-content">
        <div className="parallax-text">
          &quot;Success is a journey fueled by vision and commitment&quot;
          <br />
          <i>Your trusted partner in achieving business excellence.</i>
        </div>
      </div>
    </Parallax>
  </div>
);

export default Quote;
