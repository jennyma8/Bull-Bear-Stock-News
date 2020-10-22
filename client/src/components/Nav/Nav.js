import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <LogoSrc exact to="/">
          <AiOutlineStock size={32} />
          {/* <img src={Logo} alt="Logo" style={{ height: 70, width: 70 }} /> */}
        </LogoSrc>
        <Title>Bull and Bear Stock Market News</Title>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/stocks">Stocks</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 40px;
`;
const LogoSrc = styled.div``;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #6b45e7;
  padding: 20px;
`;
export default Nav;
