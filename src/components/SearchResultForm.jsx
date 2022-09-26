import React from "react";
import styled from "styled-components";
function SearchResultForm() {
  return (
    <Wrapper>
      <input
        type="text"
        id="pickup-location"
        name="pickupLocation"
        autocorrect="off"
        autocomplete="off"
        value=""
      />
    </Wrapper>
  );
}

export default SearchResultForm;

const Wrapper = styled.div``;
