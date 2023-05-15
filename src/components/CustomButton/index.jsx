import React from "react";
import { Button } from "./StyledComponents";
import { Link } from "react-router-dom";


const CustomButton = (props) => {
  const { fillParent, text } = props;

  return <Link to={'https://www.leafguard.com/'} target={'_blank'}><Button fillParent={fillParent}>{text}</Button></Link>;
};

export default CustomButton;
