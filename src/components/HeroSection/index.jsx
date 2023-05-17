import React from "react";
import "./index.css";

import HeroVid from "../../assets/HeroVid.mp4";
import Form from "../Form";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <video className="bgVid" src={HeroVid} autoPlay muted loop />
      <div className="hero-blur"></div>
      <div className="container">
        <h1>Goodbye Gutter Clogging… Forever!</h1>
        <p className="p1">
          LeafGuard is the seamless gutter system guaranteed to never clog*.
        </p>
        <p className="p2">
          *Guaranteed not to clog, or we will clean your gutters for free.
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Hero;
