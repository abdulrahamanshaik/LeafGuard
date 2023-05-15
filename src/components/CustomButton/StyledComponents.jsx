import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.fillParent ? "100%" : "auto")};
  background-color: #b24612;
  padding: 8px 1rem;
  border: 0;
  color: #fff;
  cursor: pointer;
`;
