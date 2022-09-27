import { React, useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Search from "./Search";

function SearchResultForm() {
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
      <CustomBox>
        <SelectWhere>
          <h1>어디에서 빌리시나요?</h1>
          <InputContainer>
            <CustomInput></CustomInput>

            <SearchIcon />
          </InputContainer>
        </SelectWhere>

        <SelectWhat>
          <h1>무엇을 빌리시나요?</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">기계</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Device"
            >
              <MenuItem>트렉터</MenuItem>
              <MenuItem>컴바인</MenuItem>
              <MenuItem>이양기</MenuItem>
            </Select>
          </FormControl>
        </SelectWhat>

        <SelectWhen>
          <h1>언제까지 빌리시나요?</h1>
          <Search />
        </SelectWhen>
      </CustomBox>
    </Wrapper>
  );
}

export default SearchResultForm;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CustomBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  height: 40vh;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;
`;

const SelectWhere = styled.div``;
const InputContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 5px;
`;
const CustomInput = styled(InputBase)`
  border: none;
  padding: 5px;
`;
const SelectWhat = styled.div``;
const CustomSelect = styled.div``;
const SelectWhen = styled.div``;
