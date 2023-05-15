import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  const titles = [
    //"HOME",
    "PRODUCT",
    "COMPANY",
    "PROCESS",
    "RESOURCES",
    // "REVIEWS",
    // "BLOG",
  ];

  const data = [
    {
      titles: ["How it works", "Compare Gutters", "Good Housekeeping"],
      urls: [
        "https://www.leafguard.com/how-it-works",
        "https://www.leafguard.com/compare-gutters",
        "https://www.leafguard.com/good-housekeeping",
      ],
    },
    {
      titles: ["Our Story", "Locations", "Careers", "Contact Us"],
      urls: [
        "https://www.leafguard.com/our-story",
        "https://www.leafguard.com/locations",
        "https://www.leafguard.com/careers",
        "https://www.leafguard.com/contact",
      ],
    },
    {
      titles: ["Financing", "Installation", "Warranty", "Cost"],
      urls: [
        "https://www.leafguard.com/financing",
        "https://www.leafguard.com/installation",
        "https://www.leafguard.com/warranty",
        "https://www.leafguard.com/cost",
      ],
    },
    {
      titles: [
        "Resource Center",
        "Photo Gallery",
        "FAQ",
        "Home Protection 101",
      ],
      urls: [
        "https://www.leafguard.com/resources",
        "https://www.leafguard.com/resources/photo-gallery",
        "https://www.leafguard.com/resources/faq",
        "https://www.leafguard.com/home-protection-101",
      ],
    },
  ];

  const footerSec2Data = [
    "Privacy Policy",
    "Sitemap",
    "Accessibility",
    "Cookie list",
    "Cookie Preferences",
  ];
  const linkStyles = { textDecoration: "none", color: "#fff" };
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-sec1">
            <div className="footer-sec1-links">
              <Link
                className="main-links"
                to={"https://www.leafguard.com/offers"}
                style={linkStyles}
              >
                OFFERS
              </Link>
              <ul className="footer-sec-1-links">
                {titles.map((item, i) => (
                  <div className="links-wrapper" key={item}>
                    <li className="main-links">{item}</li>
                    <ul>
                      {data[i].titles.map((e, j) => (
                        <li className="sub-links" key={e}>
                          <Link
                            to={data[i].urls[j]}
                            style={{ textDecoration: "none" }}
                          >
                            {e}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="links-wrapper">
                  <Link
                    className="main-links"
                    to={"https://www.leafguard.com/reviews-testimonials"}
                    style={linkStyles}
                  >
                    REVIEWS
                  </Link>
                  <Link
                    className="main-links"
                    to={"https://www.leafguard.com/blog"}
                    style={linkStyles}
                  >
                    BLOG
                  </Link>
                </div>
              </ul>
            </div>

            <div className="footer-spacer"></div>

            <div className="connect-with-us">
              <h2>Connect With Us</h2>
              <div className="footer-social-links">
                <Link
                  target={"_blank"}
                  to={"http://www.facebook.com/leafguardgutters"}
                  className="social-links"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  target={"_blank"}
                  to={"https://twitter.com/leafguardgutter"}
                  className="social-links"
                >
                  <FaTwitter />
                </Link>
                <Link
                  target={"_blank"}
                  to={"http://www.youtube.com/leafguardgutters"}
                  className="social-links"
                >
                  <FaYoutube />
                </Link>
                <Link
                  target={"_blank"}
                  to={"https://www.instagram.com/englertleafguard/"}
                  className="social-links"
                >
                  <FaInstagram />
                </Link>
                <Link
                  target={"_blank"}
                  to={"http://pinterest.com/leafguard/"}
                  className="social-links"
                >
                  <FaPinterestP />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sec2">
        <p>2023 LeafGuard © All Rights Reserved.</p>
        <ul className="footer-sec2-ul">
          {footerSec2Data.map((item, k) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
