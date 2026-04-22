import React from "react";
import "./about.css";
import ME from "../../assets/meBV.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Gabor" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years in software development</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed and shipped</small>
            </article>
          </div>
          <p>
            I build modern, user-focused web applications with clean code and
            strong fundamentals. I enjoy turning complex requirements into
            maintainable products that are fast, accessible, and easy to evolve.
            My current focus is React ecosystems, scalable backend services, and
            practical product engineering.
          </p>
          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
