import React from "react";
import "./portfolio.css";
import robofriends from "../../assets/robofriends.png";
import startup from "../../assets/startup.png";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: robofriends,
    title: "RoboFriends",
    github: "https://github.com/alexgalex98/robofriends",
    demo: "https://alexgalex98.github.io/robofriends/",
  },
  {
    id: 2,
    image: startup,
    title: "Startup Landing Page",
    github: "https://github.com/alexgalex98/startup",
    demo: "https://alexgalex98.github.io/startup/",
  },
  {
    id: 3,
    image: portfolio4,
    title: "Portfolio Website v1",
    github: "https://github.com/alexgalex98/react-portofolio-website",
    demo: "https://alexgalex98.github.io/react-portofolio-website",
  },
  {
    id: 4,
    image: portfolio5,
    title: "UI Design Playground",
    github: "https://github.com/alexgalex98",
    demo: "https://github.com/alexgalex98",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
