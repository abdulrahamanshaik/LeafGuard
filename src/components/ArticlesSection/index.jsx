import React from "react";
import "./index.css";
import Article from "../Article";

import { Link } from "react-router-dom";

const articleInfo = [
  {
    imgUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/blog/images/seamless-gutters-101-benefits-seamless-gutters.jpg",
    title: "Gutters 101: Benefits of Seamless Gutters",
    disc: "Learn the solution to the age-old problem of water diversion",
    reUrl: "https://www.leafguard.com/blog/seamless-gutters",
  },
  {
    imgUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/blog/images/gutters-guards-101-which-gutter-guard-best.jpg",
    title: "Gutters 101: Which Gutter Guard is Best?",
    disc: "See the comparison of the different gutter guards on the market",
    reUrl: "https://www.leafguard.com/blog/gutter-guards",
  },
  {
    imgUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/blog/images/new-homeowners-guide-gutters_0.jpg",
    title: "The New Homeowner’s Guide to Gutters",
    disc: "A few things to consider when deciding whether you need gutters.",
    reUrl: "https://www.leafguard.com/blog/why-your-home-needs-gutters",
  },
];

const Articles = () => {
  return (
    <div className="articles-section">
      <div className="articles-wrapper">
        <h1>LeafGuard Articles</h1>
        <div className="articles">
          {articleInfo.map((article) => (
            <Article info={article} key={article.title} />
          ))}
        </div>
        <div className="also-of-intrest">
          <div>ALSO OF INTEREST:</div>
          <Link className="also-of-intrest-links">Installation Process</Link>
          <Link className="also-of-intrest-links">Blog</Link>
          <Link className="also-of-intrest-links">LeafGuard Cost</Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
