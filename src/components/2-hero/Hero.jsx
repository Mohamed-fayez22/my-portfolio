import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="hero">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/images/me-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front end Developer
        </motion.h1>

        <p className="sub-title">
          I’m Mohamed Fayez, Front-end Developer, I'm a motivated and
          detail-oriented professional with a passion for building user-friendly
          and responsive web applications. Skilled in front-end and UI
          technologies such as React, HTML5, CSS3, Bootstrap, and JavaScript , I
          am seeking an opportunity to contribute to innovative projects and
          further develop my skills as a Frontend Developer.
        </p>

        <div className="all-icons flex">
          <a href="https://github.com/Mohamed-fayez22" target="_blank">
            <div className="icon icon-github" />
          </a>
          <a href="www.linkedin.com/in/mohamed-fayez-59156a252" target="_blank">
            <div className="icon icon-linkedin" />
          </a>
          <a href="https://www.instagram.com/mo_fayez_10/" target="_blank">
            <div className="icon icon-instagram" />
          </a>
          <a href="tel:+201157201406" target="_blank">
          
            <div className="icon icon-whatsapp" />
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
