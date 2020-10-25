import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <LogoSrc exact to="/">
            <AiOutlineStock size={32} />
            {/* <img src={Logo} alt="Logo" style={{ height: 70, width: 70 }} /> */}
          </LogoSrc>
          <Title>Bull and Bear Stock Market News</Title>
        </TitleContainer>
        <Bar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/stocks/AAPL">Stocks</StyledLink>
          <StyledLink to="/profile">Profile</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Bar>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* position: fixed;
  z-index: 500; */
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 40px;
`;
const LogoSrc = styled.div`
  padding: 5px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #6b45e7;
  padding: 20px;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

const Bar = styled.div``;
export default Nav;
