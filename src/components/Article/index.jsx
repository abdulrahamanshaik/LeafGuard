import React from "react";
import { Card, Thumbnail, BlogBadge, ArticleInfoDiv } from "./styled.jsx";
import "./index.css";

import CustomBTN from "../CustomBTN";

const Article = (props) => {
  const { imgUrl, title, disc, reUrl } = props.info;
  return (
    <Card>
      <Thumbnail url={imgUrl}>
        <BlogBadge>Blog</BlogBadge>
      </Thumbnail>
      <ArticleInfoDiv className="article-info-wrapper">
        <h3>{title}</h3>
        <p>{disc}</p>
        <CustomBTN text={"Learn More"} url={reUrl} />
      </ArticleInfoDiv>
    </Card>
  );
};

export default Article;
