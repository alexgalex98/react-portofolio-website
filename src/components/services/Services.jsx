import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const serviceGroups = [
  {
    title: "Frontend Engineering",
    items: [
      "Responsive, accessible interfaces",
      "Component architecture in React",
      "State handling and form UX",
      "Performance-focused UI delivery",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "REST API design and integration",
      "Authentication and authorization",
      "Data modeling and SQL",
      "Node.js services and automation",
    ],
  },
  {
    title: "Product Collaboration",
    items: [
      "Requirement breakdown and planning",
      "Agile delivery and iteration",
      "Code reviews and quality standards",
      "Monitoring and post-release improvements",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>How I Can Help</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {serviceGroups.map(({ title, items }) => (
          <article key={title} className="service">
            <div className="service__head">
              <h3>{title}</h3>
            </div>
            <ul className="service__list">
              {items.map((item) => (
                <li key={item}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
