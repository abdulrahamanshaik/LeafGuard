import styled from "styled-components";

export const CustomForm = styled.form`
  background-color: #222432;
  color: #fff;
  padding: 16px 3rem;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  max-width: 470px;
  position: absolute;
  right: 0;
  top: 0;
  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  span {
    display: block;
    span {
      color: red;
      display: inline;
    }
  }
  input {
    width: 100%;
    margin-bottom: 1rem;
    background-color: #b8bbae;
    height: 34px;
  }
  div {
    display: flex;
    input {
      height: 24px;
      margin-right: 8px;
    }
    p {
      margin-bottom: 1rem;
      font-size: 12px;
      font-weight: 600;
      color: #ccc;
    }
  }
  @media screen and (width <= 900px) {
    display: none;
  }
`;
