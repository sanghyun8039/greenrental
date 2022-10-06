import { React, useState } from "react";
import styled from "styled-components";
import { Box, Button, StyledEngineProvider } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Search from "./Search";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { selectRental } from "../features/rentalSlice";

function SearchResultForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showSearch, setShowSearch] = useState(false);
  const [device, setDevice] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleSearch() {
    setOpenModal(true);
  }

  function handleChange(event) {
    setDevice(event.target.value);
  }
  return (
    <Wrapper>
      <CustomBox>
        <SelectSection id="SelectSection">
          <SelectWhere>
            <h1>어디에서 빌리시나요?</h1>
            <InputContainer>
              <CustomTextField
                value={locationValue}
                onChange={(newValue) => setLocationValue(newValue.target.value)}
              ></CustomTextField>

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
                onChange={handleChange}
                value={device}
              >
                <MenuItem value="tracker">트렉터</MenuItem>
                <MenuItem value="combine">컴바인</MenuItem>
                <MenuItem value="test">이양기</MenuItem>
              </Select>
            </FormControl>
          </SelectWhat>

          <SelectWhen>
            <h1>언제까지 빌리시나요?</h1>
            <Search />
          </SelectWhen>
        </SelectSection>
        <ButtonSection>
          <Button onClick={() => handleSearch()}> 검색 </Button>
        </ButtonSection>
      </CustomBox>
      {openModal && (
        <Modal
          closeModal={() => setOpenModal(!openModal)}
          location={locationValue}
          device={device}
        />
      )}
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  height: 40vh;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;
`;

const SelectWhere = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 5px;
`;
const CustomTextField = styled(TextField)`
  border: none;
  padding: 5px;
`;
const SelectWhat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SelectWhen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SelectSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7vh;
  width: 80vw;
`;
const ButtonSection = styled.div`
  width: 80vw;
  height: 7vh;
  display: flex;
  align-items: center;
  Button {
    width: 100%;
    height: 100%;
    background-color: #63af5c;
    font-size: 30px;
    color: yellow;
    span {
      width: 100%;
      height: 100%;
    }
    &:hover {
      background-color: #5b5b5b;
      color: white;
    }
  }
`;
