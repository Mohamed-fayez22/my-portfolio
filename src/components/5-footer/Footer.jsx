import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
      <li>
            <a href="#hero">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
      </ul>

      <p>© 2025 Mohamed fayez.</p>
    </footer>
  );
};

export default Footer;
