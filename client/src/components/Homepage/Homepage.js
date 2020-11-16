import React from "react";
import styled from "styled-components";
import Spinner from "../assets/CircularSpinner";
import FX from "../FX/FX";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import RBC from "../assets/RBC1.jpg";

require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API;

const Homepage = () => {
  const [data, setdata] = React.useState();

  const { t } = useTranslation();

  React.useEffect(() => {
    //global news

    fetch(
      `https://stocknewsapi.com/api/v1/category?section=general&items=50&token=${apiKey}`
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
  }, []);

  if (!data) {
    return <Spinner />;
  }

  //format: array of object
  return (
    <>
      <Wrapper>
        <FX />

        <GlobalTitle>{t("GlobalMarketNews.1")}</GlobalTitle>
        <NewsWrapper>
          {Object.values(data["data"]).map((news, index) => {
            return (
              <NewsContainer key={index}>
                <Title key={index}>{news.title}</Title>
                <div>{news.date}</div>
                <img src={news.image_url} alt="news"></img>

                <div>
                  {t("Source.1")}: {news.source_name}
                </div>

                <div>
                  {t("Summary.1")}: {news.text}
                </div>
                <a href={news.news_url}>{t("ReadMore.1")}...</a>
              </NewsContainer>
            );
          })}
        </NewsWrapper>
      </Wrapper>{" "}
      <Advertisement>
        <div>{t("Advertisement.1")}</div>

        <div>
          <a href="https://www.rbcroyalbank.com/services/mortgages/combo-home-buyers-s-or.html?codeid=12012015MSEM&utm_dc=ks_SEG_69734072_101146847171_419514270959_kwd-297933406781_c&gclid=Cj0KCQiAwMP9BRCzARIsAPWTJ_FuiXoRyG7ADyB0e-YS9N-LRFsaQ8cizmRfz_laYsxThku6jCvapG8aAtpUEALw_wcB">
            <img src={RBC} style={{ width: 300, height: 200 }}></img>
          </a>
        </div>
      </Advertisement>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const GlobalTitle = styled.h1`
  position: fixed;
  z-index: 503;
  margin-top: 120px;
  align-items: center;
  text-align: center;
  width: 100%;
  background: white;
`;
const NewsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewsContainer = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;

  margin-bottom: 15px;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Advertisement = styled.div`
  position: fixed;
  margin-top: 150px;
  padding-top: 50px;
  right: 15px;
  width: 310px;
  height: 100%;

  background: #f7f7f7;
  border-radius: 15px;

  text-align: center;

  div {
    padding: 10px;
  }
`;
export default Homepage;
