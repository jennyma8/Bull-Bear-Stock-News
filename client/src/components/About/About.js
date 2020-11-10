import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <div>Finance background: HEC Montreal</div>
        <div>Front-End: Html, CSS, JavaScript, React, Redux</div>
        <div>Back-End: Node, Express, MongoDB, Firebase</div>
        <h1>Credits to</h1>
        <div>AlphaVantage for stock quotes and company description</div>
        <div>StockNewsAPI for stock news</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 300px;
`;
export default About;
