import React from "react";
import "./index.css";
import LGASCard from "../LGASCard";
import { Link } from "react-router-dom";

const LGAdvantageSection = () => {
  return (
    <div className="LGAdvantage">
      <div className="lg-advantages-wrapper">
        <h1>The LeafGuard Advantage</h1>
        <LGASCard
          num={1}
          vidId={"414749209?h=37ffeba40b"}
          bgUrl={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/video_thumbnails/414749209.jpg"
          }
        />
        <div className="transcript-wrapper">
          <Link
            className="transcript-text"
            to="https://www.leafguard.com/transcript/11"
          >
            Transcript
          </Link>
        </div>
        <LGASCard
          vidId={"414748729?h=9d3d25367b"}
          bgUrl={
            "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/video_thumbnails/414748729.jpg"
          }
          invert
        />
      </div>
    </div>
  );
};

export default LGAdvantageSection;
