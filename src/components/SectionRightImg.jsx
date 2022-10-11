import React from "react";
import styled from "styled-components";

function SectionRightImg(props) {
  return (
    <Wrapper>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <ItemImg>
        <img src={props.bgImage} alt="" />
      </ItemImg>
    </Wrapper>
  );
}

export default SectionRightImg;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;

    align-items: center;
    flex-direction: column-reverse;
  }
`;

const ItemText = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 30vh;
  margin-left: 10vh;
  white-space: pre-line;
  h1 {
    font-size: 7vh;
    font-family: "SUIT";
    margin-bottom: 7vh;
  }
  p {
    font-size: 4vh;
    font-family: "SUIT";
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
    margin-bottom: 6vh;
    margin-left: 0px;
  }
`;
const ItemImg = styled.div`
  position: relative;
  width: 50%;
  display: block;
  margin: 10vh;
  img {
    width: 50vw;
    height: 80vh;
  }
  @media (max-width: 768px) {
    margin: 10vh;
    width: 100%;
    display: block;
    position: relative;
    img {
      width: 100vw;
      height: 50vh;
    }
  }
`;
