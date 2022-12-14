import { React, useState } from "react";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Search from "./Search";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectleftDay } from "../features/daySlice";
import FormHelperText from "@mui/material/FormHelperText";
import { useEffect } from "react";
import db from "../firebase";
import { useParams } from "react-router-dom";
function SearchResultForm() {
  const [device, setDevice] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const leftDay = useSelector(selectleftDay);
  const [locationHelperText, setLocationHelperText] = useState("");
  const [locationErrorDisplay, setLocationErrorDisplay] = useState(false);
  const [deviceHelperText, setDeviceHelperText] = useState("");
  const [deviceErrorDisplay, setDeviceErrorDisplay] = useState(false);
  const [pickerHelperText, setPickerHelperText] = useState("");
  const [pickerErrorDisplay, setpickerErrorDisplay] = useState(false);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    // db.collection("locations")
    //   .doc(id)
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc.data());
    //     } else console.log("no such Document");
    //   })
    //   .catch((error) => {
    //     console.log("Error getting document : ", error);
    //   });

    db.collection("locations").onSnapshot((snapshot) =>
      setLocations(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  function handleSearch() {
    if (locationValue === "" || device === "" || leftDay === "") {
      if (locationValue === "") {
        setLocationHelperText("????????? ???????????????.");
        setLocationErrorDisplay(true);
      }

      if (device === "") {
        setDeviceErrorDisplay(true);
        setDeviceHelperText("????????? ???????????????.");
      }

      if (leftDay === "") {
        setpickerErrorDisplay(true);
        setPickerHelperText("????????? ???????????????.");
      }
      return;
    } else {
      setOpenModal(true);
      return;
    }
  }

  function handleChange(event) {
    setDevice(event.target.value);
    setDeviceErrorDisplay(false);
  }

  function handlelocationChange(event) {
    setLocationValue(event.target.value);
    setLocationErrorDisplay(false);
  }

  return (
    <Wrapper>
      <HeaderTag>Green Rental, Let's Go</HeaderTag>
      <span> </span>

      <CustomBox>
        <SelectSection id="SelectSection">
          <SelectWhere>
            <h1>???????????? ????????????????</h1>
            <InputContainer>
              <CustomTextField
                error={locationErrorDisplay ? true : false}
                value={locationValue}
                onChange={handlelocationChange}
                helperText={locationErrorDisplay ? locationHelperText : ""}
              ></CustomTextField>

              <SearchIcon />
            </InputContainer>
          </SelectWhere>

          <SelectWhat>
            <h1>????????? ????????????????</h1>
            <FormControl fullWidth error={deviceErrorDisplay}>
              <InputLabel id="demo-simple-select-label">??????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Device"
                onChange={handleChange}
                value={device}
              >
                {locations.map(({ id, data: { location } }) => (
                  <MenuItem value="tracker">{location}</MenuItem>
                ))}
                {/* <MenuItem value="tracker">?????????</MenuItem>
                <MenuItem value="combine">?????????</MenuItem>
                <MenuItem value="test">?????????</MenuItem> */}
              </Select>
              {deviceErrorDisplay && (
                <FormHelperText>{deviceHelperText}</FormHelperText>
              )}
            </FormControl>
          </SelectWhat>

          <SelectWhen>
            <h1>???????????? ????????????????</h1>
            <Search
              pickerHelperText={pickerHelperText}
              pickerErrorDisplay={pickerErrorDisplay}
              setPickerValue={setpickerErrorDisplay}
            />
          </SelectWhen>
        </SelectSection>
        <ButtonSection>
          <Button onClick={() => handleSearch()}> ?????? </Button>
        </ButtonSection>
      </CustomBox>

      {openModal && (
        <Modal
          closeModal={() => setOpenModal(!openModal)}
          location={locationValue}
          device={device}
          leftDays={leftDay}
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
  flex-direction: column;
`;
const HeaderTag = styled.h1`
  margin-top: 80px;
  margin-left: 7vw;
  width: 100vw;
  text-align: left;
`;

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 85vw;
  height: 40vh;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;

  @media (max-width: 768px) {
    align-items: center;
    width: 85vw;
    height: 75vh;
  }
`;

const SelectWhere = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: fit-content;
  }
`;

const SelectWhen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7vh;
  width: 80vw;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0;
  }
`;
const ButtonSection = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: flex-end;
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
