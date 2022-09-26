import React from "react";
import styled from "styled-components";
import SearchResultForm from "../components/SearchResultForm";
function RentalPage() {
  return (
    <Container>
      <SearchResultForm />
    </Container>
  );
}

export default RentalPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;
