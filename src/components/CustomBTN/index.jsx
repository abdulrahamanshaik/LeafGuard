import React from "react";
import { Link } from "react-router-dom";

import { Button } from "./styled.jsx";

const CustomBTN = (props) => {
  const { text, url, auto } = props;
  return (
    <Link
      to={url}
      target="_blank"
      style={{ display: "inline", textDecoration: "none" }}
    >
      <Button auto={auto}>{text}</Button>
    </Link>
  );
};

export default CustomBTN;
