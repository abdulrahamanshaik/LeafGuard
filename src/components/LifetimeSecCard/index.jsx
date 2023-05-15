import React from "react";
import CustomBTN from "../CustomBTN/index.jsx";
import CustomButton from "../CustomButton/index.jsx";
import { LTSC } from "./styled.jsx";

const LifetimeSecCard = (props) => {
  const { title, bgUrl, content } = props.data;
  return (
    <LTSC url={bgUrl}>
      <div>
        <h1>{title}</h1>
        {content}
        <CustomBTN text={"Learn More"} />
      </div>
    </LTSC>
  );
};

export default LifetimeSecCard;
