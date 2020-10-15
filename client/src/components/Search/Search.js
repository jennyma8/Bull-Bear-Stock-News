import React from "react";
import styled from "styled-components";

require("dotenv").config();

const Search = () => {
  const [data, setdata] = React.useState();

  React.useEffect(() => {
    //input keywords
    //INTRADAY 5MIN
    fetch(
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=process.env.ALPHA_API"
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
          //   console.log(data);
          setdata(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <div>Search</div>
      <div>
        {Object.values(data["bestMatches"]).map((stock) => {
          return (
            <>
              <div>{stock["1. symbol"]}</div>
              <div>{stock["2. name"]}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
