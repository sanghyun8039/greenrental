import React from "react";
import styled from "styled-components";
import Trackter from "../images/trackter.png";
import HeaderSection from "../components/HeaderSection";
import SectionRightImg from "../components/SectionRightImg";
import SectionLeftImg from "../components/SectionRightImg";
function ServicePage() {
  return (
    <Container>
      <HeaderSection bgImage={Trackter} />
      <SectionLeftImg bgColor="pink" title="1" />
      <SectionRightImg bgColor="red" title="2" />
      <SectionLeftImg bgColor="white" title="3" />
      <SectionRightImg bgColor="yellow" title="4" />
    </Container>
  );
}

export default ServicePage;

const Container = styled.div`
  height: 100vh;
`;
