import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <p>Copyright @cocoadrinker</p>
      <p>Tel : 010-3446-8039</p>
      <p>Address : Seoul, Daejeon</p>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
