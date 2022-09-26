import React from "react";
import styled from "styled-components";
import Daedong from "../images/daedongmark.png";
import asiatec from "../images/asiatec.png";
import johndeere from "../images/johndeere.png";
import LsMtron from "../images/lsmtron.png";
function FooterSection() {
  return (
    <Wrapper>
      <h1>With Us</h1>
      <ImageList>
        <Wrap>
          <a href="https://ko.daedong.co.kr/">
            <img src={Daedong} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="http://www.asiakor.com/">
            <img src={asiatec} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.deere.com/en/index.html">
            <img src={johndeere} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.lsmtron.co.kr/">
            <img src={LsMtron} alt="" />
          </a>
        </Wrap>
      </ImageList>
    </Wrapper>
  );
}

export default FooterSection;

const Wrapper = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #b8edb8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 5vh;
    font-family: "SUIT";
    text-align: center;
    margin-top: 20px;
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 10vh;
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 20vw;
  height: 10vw;
  img {
    inset: 0px;
    height: 100%;
    opacity: 1;
    width: 100%;
    z-index: 1;
  }
`;
