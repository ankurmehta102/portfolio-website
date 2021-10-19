import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

function HeroSection({ heading1, heading2, img, imgStart, bgDark }) {
  return (
    <>
      <div
        className={bgDark ? "first-hero-section bg-dark" : "first-hero-section"}
      >
        <div className={imgStart ? "hero-container2" : "hero-container"}>
          <div className="text-wrapper">
            <div className="text-content">
              <h1>
                {heading1}

                <br />
                {heading2}
              </h1>
              {/* <h1>{heading2}</h1> */}
            </div>
          </div>
          <div className="image-wrapper">
            <div className="image-content image-animation">
              <img src={img} alt="hello"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;