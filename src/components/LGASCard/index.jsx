import React from "react";
import "./index.css";
import { VideoWrapper } from "./styled";
import CustomBTN from "../CustomBTN";
import Model from "../Model";

const LGASCard = (props) => {
  const { bgUrl, invert, vidId, num } = props;
  return (
    <div className="LG-card">
      <VideoWrapper url={bgUrl} invert={invert}>
        <div className="blur">
          <Model vidId={vidId} />
        </div>
      </VideoWrapper>
      {num === 1 ? (
        <div className="LGA-cc">
          <h3>LeafGuard Keeps Out</h3>
          <div className="dis">
            <div className="">
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/Leaves-of-tree.png"
                alt="Leaves"
              />
              <p>Leaves</p>
            </div>
            <div>
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/Insect-on-leaves.png"
                alt="Leaves"
              />
              <p>Insects</p>
            </div>
            <div>
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/pollen-of-leaves.png"
                alt="Leaves"
              />
              <p>Pollen</p>
            </div>
          </div>
          <strong>LeafGuard eliminates ladder-related accidents</strong>
          <div className="dis">
            <div>
              <h1>630,000</h1>
              <p>non-occupational ladder falls per year</p>
            </div>
            <div>
              <h1>59%</h1>
              <p>fall fatalities (age 65-74)</p>
            </div>
            <div>
              <h1>10 feet</h1>
              <p>av. height of fall</p>
            </div>
          </div>
          <div className="custom-btn-wrapper">
            <CustomBTN
              text={"Learn More"}
              url={"https://www.leafguard.com/how-it-works"}
            />
          </div>
        </div>
      ) : (
        <div className="LGA-cc LGA-cc2">
          <h3>LeafGuard Prevents Water Related Damage to Your Home</h3>
          <p>
            All gutters carry water away from your home, but only LeafGuard does
            it with a patented, debris shedding design that is better than any
            other gutter guard on the market today. No other gutter system is
            designed to provide LeafGuard’s level of quality protection,
            eliminating the problems homeowners worry most about:
          </p>
          <div>
            <ul>
              <li>Rotting fascia and soffit </li>
              <li>Damaged foundation</li>
              <li>Basement flooding</li>
              <li>Damaged driveway</li>
            </ul>
            <ul>
              <li>Landscape erosion</li>
              <li>Damaged roof</li>
              <li>Mold and mildew</li>
              <li>Insects and pests</li>
            </ul>
          </div>
          <div className="custom-btn-wrapper">
            <CustomBTN
              text={"SEE THE DIFFERENCE"}
              url={"https://www.leafguard.com/how-it-works"}
              auto
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LGASCard;
