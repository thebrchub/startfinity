import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io"; // The arrow icon
import PropTypes from "prop-types";
import "../assets/styles/testimonials.scss";

const testimonialData = [
  // 12 Testimonials in total
  {
    id: "t1",
    title: "STARTUP INDIA CERTIFICATE",
    text: "Startfinity Navigator made obtaining our Startup India Certificate incredibly easy! Their team handled the documentation and compliance efficiently, saving us time and hassle. Congratulations on being part of STARTUP INDIA CERTIFICATE!",
    author: "Founder: Rajesh Mehta, InnovateTech Solutions",
    rating: 5,
  },
  {
    id: "t9",
    title: "Effortless GST Returns & Compliance Management",
    text: "We struggled with GST filings and regulatory compliances until we reached out to Startfinity Navigator. Their GST Return service is accurate, quick, and hassle-free!",
    author: "Founder: Shivanand Burli, Blazing Render Creation Hub LLP",
    rating: 5,
  },
  {
    id: "t2",
    title: "STARTUP INDIA CERTIFICATE",
    text: "We were struggling with the Startup India registration process until we found Startfinity Navigator. Their expert assistance made our journey seamless, and now we're proudly recognized as a startup. Congratulations on being part of STARTUP INDIA CERTIFICATE!",
    author: "CEO Pooja Sharma, GreenTech Ventures",
    rating: 5,
  },
  {
    id: "t3",
    title: "STARTUP INDIA SEED FUND",
    text: "Raising Startup India Seed Funding seemed overwhelming until we partnered with Startfinity Navigator. Their guidance helped us secure the grant smoothly and quickly! Congratulations on being part of STARTUP INDIA SEED FUND!",
    author: "Amit Verm, NewGen Technologies",
    rating: 5,
  },
  {
    id: "t4",
    title: "STARTUP INDIA CERTIFICATE",
    text: "Startfinity Navigator played a crucial role in helping us secure Startup India Funding. Their strategic guidance, business plan support, and investor connections were instrumental in our success. Congratulations on being part of STARTUP INDIA CERTIFICATE!",
    author: "Founder: Rajesh Suri, EcoSphere Innovations",
    rating: 5,
  },
  {
    id: "t5",
    title: "HER STARTUP 4.0",
    text: "Startfinity Navigator made our Her Startup 4.0 journey effortless! Their guidance was invaluable, from documentation to pitch decks. We feel more confident about our growth now. Congratulations on being part of HER STARTUP 4.0!",
    author: "CEO Pooja Sharma, FemTech Innovations",
    rating: 5,
  },
  {
    id: "t6",
    title: "HER STARTUP 4.0",
    text: "With Startfinity Navigator's seamless assistance, we successfully launched Her Startup 4.0 and accessed our funding. They guided us at every step, ensuring no detail was overlooked. Congratulations on being part of HER STARTUP 4.0!",
    author: "Founder: Priya Mehta, GreenWay Ventures",
    rating: 5,
  },
  {
    id: "t7",
    title: "MSME LOAN APPROVAL",
    text: "Getting an MSME loan felt complicated until we approached Startfinity Navigator. Their professional guidance, precise documentation, and persistence made the process a breeze.",
    author: "Founder: Rakesh Malhotra, SwitchHack Industries",
    rating: 5,
  },
  {
    id: "t8",
    title: "Smooth & Fast Company Registration!",
    text: "Startfinity Navigator made our company registration process incredibly easy. They handled all legal formalities, paperwork, and compliance, leaving us hassle-free!",
    author: "CEO Amar Sandhu, CHINA Land Apparel Pvt Ltd",
    rating: 5,
  },
  {
    id: "t10",
    title: "Seamless Tax Exemption Certificate Process",
    text: "We were unsure about the Tax Exemption Certificate process until we encountered Startfinity Navigator. Their team explained everything step by step!",
    author: "Founder: Rajesh Suri, EcoSphere Innovations",
    rating: 5,
  },
  {
    id: "t11",
    title: "Expert Guidance for Business Growth!",
    text: "Startfinity Navigator made securing our PMEGP loan incredibly easy. Their expert guidance ensured that every requirement was fulfilled, boosting our business growth!",
    author: "Founder: Rajeev Tandon, GreenVista Enterprises",
    rating: 5,
  },
  {
    id: "t12",
    title: "The Best Trademark Experts!",
    text: "With Startfinity Navigator's seamless assistance, we got a trademark secured and Her Startup 4.0 also launched successfully. Truly the best brand experts around!",
    author: "Founder: Rahul Mehta, BrandCrafter Solutions",
    rating: 5,
  },
];

// A StarRating component that uses react-icons
const StarRating = ({ rating, maxRating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = maxRating - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <AiFillStar key={`filled-${rating}-${i}`} color="#f39c12" size={20} />
      ))}
      {halfStar && (
        <AiTwotoneStar key={`half-${rating}`} color="#f39c12" size={20} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <AiOutlineStar key={`outline-${rating}-${i}`} color="#f39c12" size={20} />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

StarRating.defaultProps = {
  maxRating: 5,
};

export default function Testimonials() {
  // Toggle state to show either 6 or all 12
  const [showAll, setShowAll] = useState(false);

  // Display first 6 if not showing all
  const visibleTestimonials = showAll
    ? testimonialData
    : testimonialData.slice(0, 6);

  const handleToggleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShowAll((prev) => !prev);
    }
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="heading-2">WHAT OUR CLIENTS SAY</h2>
      <Zoom triggerOnce delay={300} duration={1500}>
        <div className="testimonial-cards">
          {visibleTestimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="testimonial-card-content">
                <h3 className="testimonial-title">{item.title}</h3>
                <div className="testimonial-divider" />
                <p className="testimonial-text">{item.text}</p>
                <StarRating rating={item.rating} />
                <p className="testimonial-author">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </Zoom>

      {/* Toggle arrow/button to show/hide extra testimonials */}
      <div
        className="show-more-arrow"
        role="button"
        tabIndex="0"
        onClick={() => setShowAll((prev) => !prev)}
        onKeyDown={handleToggleKeyDown}
      >
        {showAll ? (
          <span>
            Show Less{" "}
            <IoIosArrowDown style={{ transform: "rotate(180deg)" }} />
          </span>
        ) : (
          <span>
            Show More <IoIosArrowDown />
          </span>
        )}
      </div>
    </section>
  );
}
