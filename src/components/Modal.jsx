import { Button, IconButton } from "@mui/material";
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
        <BodyLayout>
          {props.location}
          {props.device}
        </BodyLayout>
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

const BodyLayout = styled.div``;
