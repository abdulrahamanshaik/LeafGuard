import styled from "styled-components";

export const Card = styled.div`
  width: calc(100 / 3);
  margin: 20px;
  box-shadow: 0 0 6px 2px #e8e8e8;
`;

export const Thumbnail = styled.div`
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  height: 190px;
  position: relative;
`;

export const BlogBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 2rem;
  background-color: #222432;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const ArticleInfoDiv = styled.div`
  padding: 1rem 2rem;

  h3 {
    width: 80%;
    color: #000;
    font-size: 21px;
    margin-bottom: 1rem;
  }
  p {
    color: #212529;
    font-size: 16px;
    margin-bottom: 1rem;
  }
`;
