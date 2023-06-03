import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PushPinIcon from '@mui/icons-material/PushPin';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  height: 100%;
  border-right: 1px solid var(--line-color);
  background-color: #fff;
  position: fixed;
  left: 34px;
  z-index: 100;
  @media screen and (max-width:768px) {
    visibility: hidden;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3em;
  font-weight: 800;
  cursor: pointer;
  padding: 15px 18px 15px 12px;
  text-decoration: none;
  color: var(--text-color);
  &:hover {
    color: var(--hover-extra-color);
  }
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo />
        <ul className="navbar__menu">
          <StyledLink to="/">
            <HomeIcon
              sx={{ fontSize: "2.3rem" }} />
            <p>홈</p>
          </StyledLink>
          <StyledLink to="/event">
            <ExploreIcon 
              sx={{ fontSize: "2.3rem" }} />
            <p>지역 행사</p>
          </StyledLink>
          <StyledLink to="/write">
            <PushPinIcon
              sx={{ fontSize: "2.3rem" }} />
            <p>핀 만들기</p>
          </StyledLink>
          <StyledLink to="/membership">
            <CreditCardIcon
              sx={{ fontSize: "2.3rem" }} />
            <p>멤버십</p>
          </StyledLink>
          <StyledLink to="/contact">
            <QuestionAnswerIcon
              sx={{ fontSize: "2.3rem" }} />
            <p>고객센터</p>
          </StyledLink>
          <StyledLink to="/view">
            <QuestionMarkIcon
              sx={{ fontSize: "2.3rem" }} />
            <p>임시 뷰 페이지</p>
          </StyledLink>
        </ul>
      </Container>
    </>
  );
}

export default Navbar;