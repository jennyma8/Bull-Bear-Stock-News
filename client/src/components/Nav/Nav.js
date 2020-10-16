import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <LogoSrc exact to="/">
          Logo
          {/* <img src={Logo} alt="Logo" style={{ height: 70, width: 70 }} /> */}
        </LogoSrc>
        <Title>earabology</Title>

        <StyledLink exact to="/">
          <LinkName>Home</LinkName>
        </StyledLink>

        <StyledLink exact to="/about">
          <LinkName>About Us</LinkName>
        </StyledLink>
        <StyledLink exact to="/search">
          <LinkName>
            <FiSearch />
            <span>Search</span>
          </LinkName>
        </StyledLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
const Title = styled.div``;
const LogoSrc = styled.div``;

const LinkName = styled.div;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default Nav;
