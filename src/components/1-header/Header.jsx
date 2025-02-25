import { useEffect, useState } from "react";
import "./header.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu flex "
      >
     <IoMenuOutline  className="icon-menu"/>

        {" "}
      </button>
      <div />

      <nav>
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
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span> <FaRegMoon  className="icon-moon"/></span>
        ) : (
          <span><LuSun className="icon-sun"/> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
           
                 <IoCloseOutline     onClick={() => {
                  setshowModal(false);
                }} className="icon-close" />
            </li>
            <li>
            <a href="#hero">About</a>
          </li>
            <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
