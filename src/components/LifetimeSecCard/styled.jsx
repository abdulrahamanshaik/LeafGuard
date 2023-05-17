import styled from "styled-components";

export const LTSC = styled.div`
  background: #000 url(${(props) => props.url}) no-repeat center center;
  height: 370px;
  width: 590px;
  margin: 2rem 1rem;

  div {
    height: 100%;
    width: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: left;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1 {
      font-size: 1.625rem;
      margin: 1rem 0;
    }
    p,
    li {
      font-size: 1.125rem;
      margin: 0.5rem 0;
    }
  }

  @media screen and (width <= 900px) {
    height: auto;
    width: auto;
    margin: 1rem;
  }
`;
