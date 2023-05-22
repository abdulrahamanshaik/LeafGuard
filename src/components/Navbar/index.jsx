import React, { useState } from "react";
import "./index.css";
import { BiSearchAlt2, BiMenu } from "react-icons/bi";
import { BsTelephoneFill, BsSearch, BsChevronRight } from "react-icons/bs";
import { Drawer } from "antd";

import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [issearchOpen, setIssearchOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [mobSublinks, setMobSublinks] = useState("PRODUCTS");

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
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = (e) => {
    setMobSublinks(e.target.textContent);
    setChildrenDrawer(true);
    console.log(linksData[e.target.textContent]);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
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
          <BiMenu onClick={showDrawer} className="mobile-menu" />
          <Drawer
            title="Multi-level drawer"
            width={"90%"}
            onClose={onClose}
            open={open}
            // zIndex={999999999999999999999999999999999999999999}
          >
            <ol className="mobile-ol">
              <h1 className="close-drawer" onClick={onClose}>
                x
              </h1>
              {navLinks.map((n) => (
                <li
                  key={`1+${n}`}
                  onClick={(e) => {
                    if (linksData[n] !== "") {
                      showChildrenDrawer(e);
                    }
                  }}
                >
                  {n}
                  {linksData[n] !== "" && <BsChevronRight />}
                </li>
              ))}
            </ol>
            <Drawer
              title="Two-level Drawer"
              width={"90%"}
              onClose={onChildrenDrawerClose}
              open={childrenDrawer}
            >
              <h1 className="close-drawer" onClick={onChildrenDrawerClose}>
                x
              </h1>
              <h2 className="mob-submenu-title">{mobSublinks}</h2>
              <ol className="mobile-ol">
                {linksData[mobSublinks].map((n) => (
                  <li key={`1+${n}`}>{n}</li>
                ))}
              </ol>
            </Drawer>
          </Drawer>
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
