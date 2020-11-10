import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import Logo from "../assets/LogoBBv2.jpg";

const Nav = () => {
  const { t } = useTranslation();

  // const changeLanguage = (lang) => {
  //   i18next.changeLanguage(lang);
  // };

  return (
    <>
      <Wrapper>
        <TitleContainer>
          <LogoSrc exact to="/">
            <img src={Logo} alt="Logo" style={{ height: 50, width: 50 }} />
          </LogoSrc>
          <Title>{t("Title.1")}</Title>
        </TitleContainer>
        <Bar>
          <StyledLink to="/">{t("Home.1")}</StyledLink>
          <StyledLink to="/stocks">{t("Stocks.1")}</StyledLink>
          <StyledLink to="/profile">{t("Profile.1")}</StyledLink>
          <StyledLink to="/about">{t("About.1")}</StyledLink>
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
