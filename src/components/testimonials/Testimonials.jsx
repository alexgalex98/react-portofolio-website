import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Product Manager",
    review:
      "Alex brings a strong ownership mindset and keeps quality high while moving quickly from idea to release.",
  },
  {
    avatar: AVTR2,
    name: "Engineering Lead",
    review:
      "Reliable, collaborative, and detail-oriented. Great at turning unclear requirements into clear technical solutions.",
  },
  {
    avatar: AVTR3,
    name: "Startup Founder",
    review:
      "Communication and execution were excellent. The delivered features were thoughtful, polished, and easy to maintain.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What people say</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide key={name} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`${name} avatar`} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
