import React from "react";
import "./index.css";
import LifetimeSecCard from "../LifetimeSecCard";

const LFSCData = [
  {
    title: "Lifetime No Clog Warranty",
    bgUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/block/background/Lifetime-No-Clog-Warranty.jpg",
    content: (
      <p>
        Guaranteed for the Life of Your Home or LeafGuard will clean it out for
        free.
      </p>
    ),
  },
  {
    title: "Limited Lifetime Paint Finish Warranty",
    content: (
      <ul>
        <li>Exclusive ScratchGuard® Paint Finish</li>
        <li>No Chipping, peeling or cracks</li>
      </ul>
    ),
    bgUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/block/background/Limited-Lifetime-Paint-Finish-Warranty.jpg",
  },
];

const LifetimeSection = () => {
  return (
    <div className="lifetimesection">
      {LFSCData.map((card) => (
        <LifetimeSecCard data={card} key={card.title} />
      ))}
    </div>
  );
};

export default LifetimeSection;
