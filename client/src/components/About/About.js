import React, { useEffect } from "react";
import styled from "styled-components";

const About = () => {
  // useEffect((req, res) => {
  //   fetch("/speechtranslator", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     translated: JSON.stringify({}),
  //   }).then((res) => res.json());
  // }, []);
  return (
    <>
      {/* <div class="container">
        <h1 class="text-center">Speech Translator Online</h1>
        <form action="/speechtranslator" method="post">
          <div class="form-group">
            <label for="speech">Write Text:</label>
            <textarea
              class="form-control"
              name="speech"
              required
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="format">Select Language of Voice:</label>
            <select class="form-control" name="language" id="">
              <option value="zh">Chinese</option>

              <option value="en" selected>
                English
              </option>

              <option value="fr">French</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-danger btn-block">Translate</button>
          </div>
          <div class="form-group">
            <label for="translated">Translated Text:</label>
            <textarea
              class="form-control"
              name="translated"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
      </div> */}
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
