import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
function ServicePage() {
  return (
    <Container>
      <Section bgColor="pink" title="1" />
      <Section bgColor="red" title="2" />
      <Section bgColor="white" title="3" />
      <Section bgColor="yellow" title="4" />
    </Container>
  );
}

export default ServicePage;

const Container = styled.div`
  height: 100vh;
`;
