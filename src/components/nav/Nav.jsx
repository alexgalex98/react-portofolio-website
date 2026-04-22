import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { MdOutlineReviews } from "react-icons/md";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  const links = [
    { href: "#home", icon: <AiOutlineHome />, label: "Home" },
    { href: "#about", icon: <AiOutlineUser />, label: "About" },
    { href: "#experience", icon: <BiBook />, label: "Experience" },
    { href: "#services", icon: <RiServiceLine />, label: "Services" },
    { href: "#portfolio", icon: <GoProject />, label: "Portfolio" },
    { href: "#testimonials", icon: <MdOutlineReviews />, label: "Testimonials" },
    { href: "#contact", icon: <BiMessageDots />, label: "Contact" },
  ];

  return (
    <nav>
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? "active" : ""}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
