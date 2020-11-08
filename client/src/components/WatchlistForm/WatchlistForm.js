import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Data from "../assets/allTickers.json";
import { AppContext } from "../../components/AppContext/AppContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const WatchlistForm = (props) => {
  const { t } = useTranslation();

  const { appUser } = useContext(AppContext);
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [display, setDisplay] = useState(false);

  const inputRef = useRef(null);

  let newData = Data;

  useEffect(() => {
    inputRef.current.focus();
  });

  //handle
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      setDisplay(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      //values pushed to firebase
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        email: appUser.email,
      });

      setInput("");
    }
  };

  const updateSearchBar = (selection) => {
    setInput(selection);
    setDisplay(false);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSubmit();
      setDisplay(false);
    }
  };

  //   console.log(Data); success
  if (input.length > 0) {
    newData = newData.filter((stock) => {
      const lowerStockName = stock.name.toLowerCase();
      const lowerStockTicker = stock.ticker.toLowerCase();
      return (
        lowerStockName.match(input.toLowerCase()) ||
        lowerStockTicker.match(input.toLowerCase())
      );
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="AddTicker"
          placeholder={t("AddTicker")}
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        ></input>
        <button onClick={handleSubmit}>{t("Add")}</button>
      </form>
      {display && (
        <div className="autoContainer">
          {newData.map((stock, index) => {
            return (
              <Display
                key={index}
                onClick={() => updateSearchBar(stock.ticker)}
              >
                {stock.ticker} - {stock.name}
              </Display>
            );
          })}
        </div>
      )}
    </>
  );
};

const Display = styled.div`
  width: 400px;

  padding: 2px;
`;

export default WatchlistForm;
