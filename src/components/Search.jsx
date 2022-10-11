import { React, useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useDispatch } from "react-redux";
import { setleftDay } from "../features/daySlice";
function Search(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [diffDate, setDiffDate] = useState("");
  const dispatch = useDispatch();
  const handleSelectEndDate = () => {
    props.setPickerValue(false);
    setDiffDate(Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24) + 1));
  };

  useEffect(() => {
    dispatch(
      setleftDay({
        leftdays: diffDate,
      })
    );
  }, [diffDate, dispatch]);

  return (
    <DateWrapper>
      <DateLayout>
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
        <EndDate color={props.pickerErrorDisplay ? "#d32f2f" : "Black"}>
          <h3>이까지</h3>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            locale={ko} // 한글로 변경
            dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onCalendarClose={handleSelectEndDate}
            placeholderText="Select Date"
          />
        </EndDate>
      </DateLayout>

      {props.pickerErrorDisplay && (
        <ErrorMessage>{props.pickerHelperText}</ErrorMessage>
      )}
    </DateWrapper>
  );
}

export default Search;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateLayout = styled.div`
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
  border: 1px solid;
  border-color: ${(props) => props.color};
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
