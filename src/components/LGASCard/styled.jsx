import styled from "styled-components";

export const VideoWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;
  order: ${(props) => (props.invert ? 9999999 : 0)};
  @media screen and (width <= 900px) {
    height: 30vh;
    width: 100%;
  }
`;
