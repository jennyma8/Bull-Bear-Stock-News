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
        <Title>Bull and Bear Stock Market News</Title>
        <FiSearch />
        <span>Search</span>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: yellow;
`;
const Title = styled.div``;
const LogoSrc = styled.div``;

const LinkName = styled.div;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default Nav;
