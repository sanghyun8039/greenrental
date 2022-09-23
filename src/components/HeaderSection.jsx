import React from "react";
import styled from "styled-components";
function HeaderSection(props) {
  return (
    <Wrapper bgImage={props.bgImage}>
      <ItemText>
        <h1>농기계의 새로운 소유</h1>
        <h2>갖지 않는 가치</h2>
        <p>필요할 때, 원하는 시간에, 빌려드립니다.</p>
        <p>농기계가 필요할땐 그린렌탈</p>
      </ItemText>
    </Wrapper>
  );
}

export default HeaderSection;

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.div`
  text-align: right;
  position: absolute;
  width: 100vw;
  padding-right: 8vh;
  padding-top: 50vh;
  h1 {
    font-size: 6vh;
    font-family: "SUIT";
    color: white;
  }
  h2 {
    font-size: 5vh;
    font-family: "SUIT";
    color: white;
  }
  p {
    font-size: 2vh;
    font-family: "SUIT";
    color: white;
  }
`;
