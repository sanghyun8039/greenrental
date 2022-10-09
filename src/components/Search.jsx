import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, StyledEngineProvider } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import { ko } from "date-fns/esm/locale";
import { useDispatch } from "react-redux";
import { setleftDay } from "../features/daySlice";
function Search() {
  const [startDate, setStartDate] = useState(new Date("2022/02/08"));
  const [endDate, setEndDate] = useState(new Date("2022/02/10"));
  const [diffDate, setDiffDate] = useState("");

  const dispatch = useDispatch();

  const diffDays = () => {};

  const handleSelectEndDate = () => {
    console.log(`startDate : ${startDate} // endDate : ${endDate}`);
    setDiffDate((endDate - startDate) / (1000 * 60 * 60 * 24) + 1);
  };

  useEffect(() => {
    dispatch(
      setleftDay({
        leftdays: diffDate,
      })
    );
  }, [diffDate]);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };
  return (
    <DateWrapper>
      <StartDate>
        <h3>이때부터</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale={ko} // 한글로 변경
          dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
          selectsStart
          showPopperArrow={false}
          startDate={startDate}
          endDate={endDate}
        />
      </StartDate>
      <EndDate>
        <h3>이까지</h3>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          locale={ko} // 한글로 변경
          dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
          selectsEnd
          showPopperArrow={false}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onCalendarClose={handleSelectEndDate}
        />{" "}
      </EndDate>
    </DateWrapper>
  );
}

export default Search;
const DateWrapper = styled.div`
  display: flex;
`;
const StartDate = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  margin-right: 10px;
`;
const EndDate = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
`;
