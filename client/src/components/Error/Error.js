import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <>
      <Wrapper>
        <h1>Error 404</h1>
        <div>Page does not exist</div>
        <div>Sorry, we can't find a page with that URL.</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Error;
