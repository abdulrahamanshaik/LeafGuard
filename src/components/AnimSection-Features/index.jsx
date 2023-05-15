import React from "react";
import "./index.css";

const AnimSecFeature = (props) => {
  const { url, text } = props;
  return (
    <div className="feature-wrapper">
      <div className="feature">
        <img src={url} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AnimSecFeature;
