import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./index.css";

const MyCarousel = () => {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <div
        className={`arrowDiv ${isEdge && "lastSlide"}`}
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </div>
    );
  };

  const myDots = ({ pages, activePage, onClick }) => (
    <div style={{ display: "flex", margin: "2rem 0" }}>
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <div
            className={`dots ${isActivePage && "activeDot"}`}
            key={page}
            onClick={() => onClick(page)}
          ></div>
        );
      })}
    </div>
  );

  const data = [
    [
      "BRIAN SCHWEIKERT",
      "White haven, Pa",
      "Guys came in a day before New Year’s Eve an professionally knocked it out",
    ],
    [
      "Richard Scott",
      "Dayton, Oh",
      "I will and have recommend LeafGuard. The feedback I have received is in regard to cost. It's perceived as being too expensive.",
      "",
    ],
    ["Knox Beasley", "Raleigh, Nc", "Overall very satisfied."],
    [
      "Theodore & Hope Nugent",
      "Westerlo, Ny",
      "We had Leaf Guard put on our house and pole barn and we would recommend Leaf Guard and would not hesitate to show off the workmanship and quality.",
    ],
    [
      "Dorothy Wilson Yates",
      "Springfield, Oh",
      "I love your customer services",
      "",
    ],
    [
      "Mitchell Larson",
      "Grand bay, Al",
      "I would absolutely recommend LeafGuard to any one.I still remember a lot of the features and benefits. The system is very stout and well. Installed.I put a ladder up and looked. Sure enough, little…",
    ],
    [
      "Samuel Tyson",
      "Southern pines, Nc",
      "Timely and professional performance.",
    ],
    [
      "David Kranak",
      "Daphne, Al",
      "They work as advertised. I had no problem with them, even in pouring rain. This is the company from which to get gutter guards.",
      "",
    ],
    [
      "Richard Wilkinson",
      "Kennewick, Wa",
      "They have a great product with very fast and friendly service.",
    ],

    [
      "Chris Carney",
      "Sandy hook, Ct",
      "The salesperson was professional, and they did what they said they will do. I know of the product and they met my expectations.",
    ],
    ["Mike Most", "Foley, Al", "So far, so good.", ""],
    [
      "Bernadine Robinson",
      "Richmond hill, Ga",
      "LeafGuard of Columbia was very professional. I was very pleased with the way they conducted themselves and how quickly they worked.",
    ],
  ];
  const ind = [1, 4, 7, 10];
  return (
    <div className="mycarousel">
      <h1>Millions of Happy Family Members</h1>
      <Carousel
        itemsToShow={3}
        itemsToScroll={3}
        renderArrow={myArrow}
        renderPagination={myDots}
      >
        {data.map((item, i) => (
          <div
            className={`mydivs ${item.length > 3 && "myDivBorder"}`}
            key={item[0]}
          >
            <img
              src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/themes/custom/leafguard_theme/images/5-star.png"
              alt="ratings"
            />
            <h3>{item[0]}</h3>
            <p className="mycarosel-p1">{item[1]}</p>
            <p className="mycarosel-p2">{item[2]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
