import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../AppContext/AppContext";
require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API;

const StockNews = () => {
  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  React.useEffect(() => {
    //ticker params
    //company news

    fetch(
      `https://stocknewsapi.com/api/v1?tickers=${ticker}&items=50&token=${apiKey}`
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          // console.log(data);
          setdata(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, [ticker]);

  if (!data) {
    return <h1>loading</h1>;
  }

  //format: array of object
  return (
    <>
      <Wrapper>
        <h1>Recent News</h1>
        {Object.values(data["data"]).map((news, index) => {
          return (
            <NewsContainer key={index}>
              <div>{news.date}</div>
              <img src={news.image_url} alt="news"></img>

              <div>Source: {news.source_name}</div>
              <div>{news.title}</div>
              <div>Summary: {news.text}</div>
              <a href={news.news_url}>Read more...</a>
            </NewsContainer>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsContainer = styled.div`
  padding: 10px;
`;

export default StockNews;
