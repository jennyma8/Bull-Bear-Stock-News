import React, { useContext } from "react";
import styled from "styled-components";
import Spinner from "../assets/CircularSpinner";
import { AppContext } from "../AppContext/AppContext";
// import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import { addHours, format, subHours } from "date-fns";

require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API;

const StockNews = () => {
  const { t } = useTranslation();

  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  const options = {
    timeZone: "Canada/Central",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    seconds: "numeric",
  };

  React.useEffect(() => {
    //ticker params
    //company news
    if (ticker !== "") {
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
            console.log(data.date);
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    }
  }, [ticker]);

  if (!data) {
    if (ticker === "") {
      return <></>;
    } else {
      return <Spinner />;
    }
  }

  //format: array of object
  return (
    <>
      <Wrapper>
        <h1>{t("RecentNews.1")}</h1>
        {Object.values(data["data"]).map((news, index) => {
          return (
            <NewsContainer key={index}>
              <div>{news.date}</div>
              <h1>{news.title}</h1>
              <img src={news.image_url} alt="news"></img>

              <div>
                {t("Source.1")}: {news.source_name}
              </div>

              <div>
                <strong>{t("Summary.1")}</strong>: {news.text}
              </div>
              <a href={news.news_url}>{t("ReadMore.1")}...</a>
            </NewsContainer>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const NewsContainer = styled.div`
  padding: 30px;
  border: 1px solid lightgrey;
  margin-bottom: 20px;

  img {
    width: 500px;
  }
`;

export default StockNews;
