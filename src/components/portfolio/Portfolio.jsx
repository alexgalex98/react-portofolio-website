import React from "react";
import "./portfolio.css";
import robofriends from "../../assets/robofriends.png";
import startup from "../../assets/startup.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: robofriends,
    title: "Robofriends",
    github: "https://github.com/alexgalex98/robofriends",
    demo: "http://alexgabor.me/robofriends/",
  },
  {
    id: 2,
    image: startup,
    title: "Startup",
    github: "https://github.com/alexgalex98/startup",
    demo: "http://alexgabor.me/startup/",
  },
];

const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
