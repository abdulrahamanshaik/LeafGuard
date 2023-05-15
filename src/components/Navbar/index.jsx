import React, { useState } from "react";
import "./index.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsTelephoneFill, BsSearch } from "react-icons/bs";

import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [issearchOpen, setIssearchOpen] = useState(false);

  const navLinks = [
    "OFFERS",
    "PRODUCTS",
    "COMPANY",
    "PROCESS",
    "RESOURCES",
    "REVIEWS",
    "BLOG",
  ];

  const linksData = {
    OFFERS: "",
    PRODUCTS: ["How it works", "Compare Gutters", "Good Housekeeping"],
    COMPANY: ["Our Story", "Locations", "Careers", "Contact Us"],
    PROCESS: ["Financing", "Installation", "Warranty", "Cost"],
    RESOURCES: [
      "Resource Center",
      "Photo Gallery",
      "FAQ",
      "Home Protection 101",
    ],
    REVIEWS: "",
    BLOG: "",
  };

  return (
    <nav>
      <div className="nav-content">
        <img
          src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/themes/custom/leafguard_theme/lg-logo.png"
          alt="logo"
        />
        <ul>
          {navLinks.map((i) => {
            if (linksData[i] === "") {
              return <li key={i}>{i}</li>;
            }
            return (
              <li className="nav-links" key={i}>
                {i}
                <div className="nav-sub-links">
                  <ul>
                    {linksData[i].map((j) => (
                      <li key={j}>{j}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="search">
          <div className={`search-bar ${issearchOpen && "open-search"}`}>
            <input type="text" placeholder="Search" />
            <BsSearch className="close-search" />
            <RxCross1
              className="close-search"
              onClick={() => setIssearchOpen(!issearchOpen)}
            />
          </div>
          <BiSearchAlt2
            className="search-icon"
            onClick={() => setIssearchOpen(!issearchOpen)}
          />
        </div>
        <div className="call-wrapper">
          <BsTelephoneFill className="tel-icon" />
          <a href="tel:1.800.LeafGuard">
            <span className="span-1">1.800.LeafGuard </span>
            <br />
            <span className="span-2">Call for a free estimate</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
