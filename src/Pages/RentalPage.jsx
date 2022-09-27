import React from "react";
import styled from "styled-components";
import SearchResultForm from "../components/SearchResultForm";

function RentalPage() {
  return (
    <Container>
      <HeaderTag>Green Rental, Let's Go</HeaderTag>
      <span> </span>
      <SearchResultForm />
    </Container>
  );
}

export default RentalPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  span {
    width: 100vw;
    height: 10vh;
  }
`;

const HeaderTag = styled.h1`
  margin-left: 7vw;
  text-align: left;
`;
