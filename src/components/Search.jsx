import { React, useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button, StyledEngineProvider } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;
  Button {
  }
`;
const Header2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 559px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: 325px;
`;

const Input = styled.input`
  width: 539px;
  padding: 20px;
  position: absolute;
  left: 0;
  height: 30px;
  top: 395px;
  border: none;
  &:focus {
    outline-style: none;
  }
`;
const MyButton = styled(Button)`
  position: absolute;
  left: 0;
  top: 455px;
  background-color: #ff7779;
  color: white;
  text-transform: inherit !important;
  width: 579px;
  &:hover {
    background-color: white;
    color: #ff7779;
  }
`;

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <Wrapper>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      {/* <Header2>
        Number of guests
        <PeopleIcon />
      </Header2>
      <Input min={0} defaultValue={2} type="number" />
      <StyledEngineProvider injectFirst>
        <MyButton onClick={() => navigate("/search")}>Search AirBNB</MyButton>
      </StyledEngineProvider> */}
    </Wrapper>
  );
}

export default Search;
