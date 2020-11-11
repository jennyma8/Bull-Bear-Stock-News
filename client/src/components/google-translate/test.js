import React from "react";
import styled from "styled-components";
const translate = require("@vitalets/google-translate-api");

const Test = () => {
  translate("Ik spreek Engels", { to: "en" })
    .then((res) => {
      console.log(res.text);
      //=> I speak English
      console.log(res.from.language.iso);
      //=> nl
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 300px;
`;

export default Test;
