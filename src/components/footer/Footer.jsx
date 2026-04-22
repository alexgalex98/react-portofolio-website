import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Gabor Alexandru-Gabriel
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/alexgbr6" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/alexgalex5" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="https://github.com/alexgalex98" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandru-gabriel-gabor-3b1b791b2/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Gabor Alexandru-Gabriel. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
