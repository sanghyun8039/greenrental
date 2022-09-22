import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrapper bgColor={props.bgColor}>
      <ItemText>
        <h1>{props.title}</h1>
      </ItemText>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
