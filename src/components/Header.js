import React, { useState, useEffect } from "react";
import { Slide, Bounce } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Hamburger from "hamburger-react";
import "../assets/styles/header.scss";
import logo from "../assets/images/test-orig.png";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState("hidden");
  const [burgerMenuColor, setBurgerMenuColor] = useState("transparent");

  const handleClick = () => {
    if (!isOpen) {
      setBurgerMenuColor("black");
      setMenuVisibility("visible");
    } else {
      setBurgerMenuColor("transparent");
      setMenuVisibility("hidden");
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("prevent-scroll", isOpen);
  }, [isOpen]);

  return (
    <header id="header">
      <div id="banner">
        <p>
          Let Startfinity Navigator Private Limited handle the formalities while you focus on growing your vision.
        </p>
      </div>
      <div id="burger-logo-wrapper" className={`${burgerMenuColor}`}>
        <Hamburger toggled={isOpen} onToggle={handleClick} />
        <a href="/">
          <img src={logo} alt="Startfinity Navigator Private Limited Logo" />
        </a>
      </div>
      <nav id="nav">
        <ul className={`nav-items ${menuVisibility}`}>
          <li id="user-logo">
            <a href="/">
              <img src={logo} alt="Startfinity Navigator Private Limited Logo" />
            </a>
          </li>
          <li style={{ "--animation-order": 1 }}>
            <NavLink
              to="/"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              HOME
            </NavLink>
          </li>
          <li style={{ "--animation-order": 2 }}>
            <NavLink
              to="/o-meni#opsirnije"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              ABOUT US
            </NavLink>
          </li>
          {/* <li style={{ "--animation-order": 3 }}>
            <NavLink
              to="/blogovi#blog-lista"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              BLOG
            </NavLink>
          </li> */}
          <li style={{ "--animation-order": 4 }}>
            <NavLink
              to="/pravne-oblasti#lista-oblasti"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              SERVICES
            </NavLink>
          </li>
          <li style={{ "--animation-order": 5 }}>
            <NavLink
              to="/pravni-postupci#lista-postupaka"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              PROCESS
            </NavLink>
          </li>
          {/* <li style={{ "--animation-order": 6 }}>
            <NavLink
              to="/tarifa#tarifa-info"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              PRICING
            </NavLink>
          </li> */}
          <li style={{ "--animation-order": 7 }}>
            <NavLink
              to="/kontakt#kontakt-forma"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              CONTACT
            </NavLink>
          </li>
          <li style={{ "--animation-order": 8 }}>
            <NavLink
              to="/lokacija#lokacija-mapa"
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "active mobile-li" : "inactive mobile-li")}
            >
              LOCATION
            </NavLink>
          </li>

          <li style={{ "--animation-order": 1 }}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              HOME
            </NavLink>
          </li>
          <li style={{ "--animation-order": 2 }}>
            <NavLink
              to="/o-meni#opsirnije"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              ABOUT US
            </NavLink>
          </li>
          {/* <li style={{ "--animation-order": 3 }}>
            <NavLink
              to="/blogovi#blog-lista"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              BLOG
            </NavLink>
          </li> */}
          <li style={{ "--animation-order": 4 }}>
            <NavLink
              to="/pravne-oblasti#lista-oblasti"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              SERVICES
            </NavLink>
          </li>
          <li style={{ "--animation-order": 5 }}>
            <NavLink
              to="/pravni-postupci#lista-postupaka"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              PROCEDURES
            </NavLink>
          </li>
          {/* <li style={{ "--animation-order": 6 }}>
            <NavLink
              to="/tarifa#tarifa-info"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              PRICING
            </NavLink>
          </li> */}
          <li style={{ "--animation-order": 7 }}>
            <NavLink
              to="/kontakt#kontakt-forma"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              CONTACT
            </NavLink>
          </li>
          <li style={{ "--animation-order": 8 }}>
            <NavLink
              to="/lokacija#lokacija-mapa"
              className={({ isActive }) => (isActive ? "active desktop-li" : "inactive desktop-li")}
            >
              LOCATION
            </NavLink>
          </li>
        </ul>
      </nav>

      <Slide triggerOnce duration={1500}>
        <h1 id="hero-infos">
          <span id="hero-title">
            <br />
          </span>
          <a href="/kontakt#kontakt-forma" className="consultation-btn">
            SCHEDULE A CONSULTATION
          </a>
          <hr className="hor-linez" />
        </h1>
      </Slide>

      <Bounce triggerOnce>
        <div id="nav-footer">
          <div>
            <h2>Mumbai, India</h2>
            <i>
              <MdLocationOn className="icon" />
              Location
            </i>
          </div>
          <div>
            <h2>+91 12345 67890</h2>
            <i>
              <AiFillPhone className="icon" />
              Contact
            </i>
          </div>
        </div>
      </Bounce>
    </header>
  );
}
