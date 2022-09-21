import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
function Header() {
  return (
    <Wrapper>
      <HeaderLeft>
        <img src={Logo} alt="" />
      </HeaderLeft>
      <HeaderCenter>
        <a>
          <span>서비스소개</span>
        </a>
        <a>
          <span>대여</span>
        </a>
        <a>
          <span>기업소개</span>
        </a>
      </HeaderCenter>
      <HeaderRight>
        <a>
          <PhoneIcon />
          <p> 문의하기</p>
        </a>

        <a>
          <LoginIcon />
          <p> 로그인</p>
        </a>
      </HeaderRight>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 15px;
`;
const HeaderLeft = styled.div`
  img {
    height: 10vh;
    width: 10vw;
    z-index: auto;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    padding: 0 12px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`;
