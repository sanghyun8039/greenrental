import React from "react";
import styled from "styled-components";

function SectionLeftImg(props) {
  return (
    <Wrapper>
      <ItemImg>
        <img src={props.bgImage} alt="" />
      </ItemImg>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
    </Wrapper>
  );
}

export default SectionLeftImg;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f5f5f7;
  position: relative;
  display: flex;
  justify-content: space-between;
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
`;

const ItemText = styled.div`
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 30vh;
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
`;
