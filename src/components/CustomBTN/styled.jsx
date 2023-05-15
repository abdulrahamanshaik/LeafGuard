import styled from "styled-components";
export const BTN = styled.button`
  height: 24px;
  width: 200px;
  background-color: #b24612;
  color: #fff;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: #b24612;
  color: white;
  height: 44px;
  width: ${(props) => (props.fillParent ? "200px" : "auto")};
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #b24612bf;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

// ${(props) => theme[props.theme].hover}
