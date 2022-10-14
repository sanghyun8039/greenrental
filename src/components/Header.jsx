import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [burgerStatus, setBurgerStatus] = useState(false);
  const changeBackground = () => {
    if (window.pageYOffset >= 400) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  const handleMenu = () => {
    setBurgerStatus(true);
  };

  const handleClose = () => {
    setBurgerStatus(false);
  };
  useEffect(() => {
    console.log(headerBackground);
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <Wrapper setBgColor={headerBackground ? "White" : "Transparent"}>
      <HeaderLeft>
        <img src={Logo} alt="" />
      </HeaderLeft>
      <HeaderCenter>
        <a href="/">
          <span>서비스소개</span>
        </a>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <a href="/Rent">
          <span>대여</span>
        </a>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <a href="https://greenlabs.co.kr/">
          <span>기업소개</span>
        </a>
      </HeaderCenter>
      <HeaderRight>
        <a>
          <PhoneIcon />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <p> 문의하기</p>
        </a>

        <a>
          <LoginIcon />
          <span>&nbsp;&nbsp;&nbsp;</span>
          <p> 로그인</p>
        </a>
      </HeaderRight>
      <CustomMenuIcon onClick={handleMenu} />
      <BurgerNav show={burgerStatus}>
        <CloseWapper>
          <CutomCloseIcon onClick={handleClose} />
        </CloseWapper>
        <li>
          <a href="#" />
          문의하기
        </li>
        <li>
          <a href="#" />
          로그인
        </li>
      </BurgerNav>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.setBgColor};
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  min-height: 60px;
  z-index: 1;
`;
const HeaderLeft = styled.div`
  margin-top: 20px;
  img {
    height: 10vh;
    width: 10vw;
    z-index: auto;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  a {
    display: block;
    position: relative;
    padding: 16px 18px;
    font-size: 3vh;
    font-family: "SUIT";
    font-weight: bold;
    cursor: pointer;
    justify-content: space-around;
    text-decoration: none;
    span {
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      color: #000000;
      &::before {
        background-color: black;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    padding-right: 15px;
    font-family: "SUIT";
    font-size: 2vh;
    cursor: pointer;
    p {
      color: #000000;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none !important;
  }
`;
const CutomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 200px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
