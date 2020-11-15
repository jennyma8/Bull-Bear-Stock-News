import React from "react";
import styled from "styled-components";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <>
      <Wrapper>
        <Profile>
          <h1>Product Manager / Full Stack Web Developer</h1>
          <p>
            Hi, I'm Jenny! I'm currently studying the Concordia Full Stack Web
            Developer Bootcamp. Having 10 years of experience in Finance, I
            choose to explore a complete different world that has always
            triggered my curiosity which is Coding. My endeavours are to make
            this world a more creative and efficient place.
          </p>{" "}
          <div>
            <a href="https://github.com/jennyma8">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/jenny-ma-70636576/">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/JennyMaMTL">
              <FiTwitter />
            </a>
          </div>
          <div>
            <strong>Bachelor in Finance at HEC Montreal</strong>
          </div>
          <div>
            <strong>Front-End:</strong> Html, CSS, JavaScript, React, Redux
          </div>
          <div>
            <strong>Back-End:</strong> Node, Express, MongoDB, Firebase
          </div>
        </Profile>
        <br></br>
        <br></br>
        <strong>Credits to:</strong>
        <div>AlphaVantage for stock quotes and company description</div>
        <div>StockNewsAPI for stock news</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  background: linear-gradient(to bottom right, #3d5a80 0%, #ccffff 100%);
  font-size: 20px;
  padding: 15px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  p {
    width: 600px;
  }

  a {
    padding: 15px;
  }
`;
export default About;
