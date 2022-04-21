import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Name1",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem expedita commodi beatae amet sed cumque itaque dicta. Aliquid, rerum fugiat.",
  },
  {
    avatar: AVTR2,
    name: "Name2",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident voluptatum consequuntur obcaecati sit voluptates nemo culpa ipsam soluta neque.",
  },
  {
    avatar: AVTR3,
    name: "Name3",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident voluptatum consequuntur obcaecati sit voluptates nemo culpa ipsam soluta neque.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
