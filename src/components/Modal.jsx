import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
function Modal(props) {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <Wrapper>
      <Container>
        <HeaderLayout>
          <p>It is Modal</p>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </HeaderLayout>
        <hr />
        <BodyLayout>
          <CustomTypography variant="h4">{props.location}</CustomTypography>
          <CustomTypography variant="body1">에서 </CustomTypography>
          <CustomTypography variant="h4">{props.device}</CustomTypography>
          <CustomTypography variant="body1">를 </CustomTypography>
          <CustomTypography variant="h4">{props.leftDays}</CustomTypography>
          <CustomTypography variant="body1">
            일간 빌리시겠습니까?
          </CustomTypography>
        </BodyLayout>
        <CustomButton onClick={closeModal}>확인</CustomButton>
      </Container>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 40vw;
  height: 40vh;
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

const BodyLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomTypography = styled(Typography)`
  padding-right: 10px;
`;

const CustomButton = styled(Button)`
  background-color: #63af5c !important;
  color: yellow !important;
  span {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #5b5b5b !important;
    color: white !important;
  }
`;
