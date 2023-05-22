import React from "react";
import "./index.css";

import AnimSecFeature from "../AnimSection-Features";

const AnimSection = () => {
  const scroll = (e) => {
    console.log(e);
  };
  return (
    <div className="anim-sec-wrapper" onScroll={scroll}>
      <div className="features-wrapper">
        <AnimSecFeature
          url={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-01/features-icon-1.png"
          }
          text={"No Clogging"}
        />

        <AnimSecFeature
          url={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/features-icon.png"
          }
          text={"No Cleaning"}
        />
      </div>
      <video
        src="https://www.leafguard.com/sites/default/files/2020-09/nutty-animation.mp4"
        muted
        autoPlay={"autoplay"}
        // preLoad="auto"
        loop
      >
        {" "}
      </video>

      <div className="features-wrapper">
        <AnimSecFeature
          url={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-01/features-icon-2.png"
          }
          text={"No Leaking"}
        />

        <AnimSecFeature
          url={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/features-icon-4.png"
          }
          text={"No Water Damage"}
        />
      </div>
    </div>
  );
};

export default AnimSection;
