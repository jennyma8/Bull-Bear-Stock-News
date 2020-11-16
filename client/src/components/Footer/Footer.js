import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      {" "}
      <small>&copy; Copyright 2020, Bull and Bear Stock Market News</small>{" "}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: #d8dee5;
`;

export default Footer;
