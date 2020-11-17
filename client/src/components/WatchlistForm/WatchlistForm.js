import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Data from "../assets/allTickers.json";
import { AppContext } from "../../components/AppContext/AppContext";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

const WatchlistForm = (props) => {
  const { t } = useTranslation();

  const { appUser } = useContext(AppContext);
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [stockName, setStockName] = useState("");
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
        company: stockName,
      });

      setInput("");
    }
  };

  const updateSearchBar = (stockTicker, stockName) => {
    setInput(stockTicker);
    setStockName(stockName);
    console.log(stockName);
    setDisplay(false);
  };

  // const handleKeyPress = (event) => {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     handleSubmit();
  //     setDisplay(false);
  //   }
  // };

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
        <Input
          type="text"
          id="AddTicker"
          placeholder={t("AddTicker")}
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        ></Input>
        <Button onClick={handleSubmit}>+{t("Add")}</Button>
      </form>
      {display && (
        <div className="autoContainer">
          {newData.map((stock, index) => {
            // console.log(stock);
            return (
              <Display
                key={index}
                onClick={() => updateSearchBar(stock.ticker, stock.name)}
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

const Input = styled.input`
  height: 30px;
`;
const Button = styled.button`
  outline: none;
  background: #70e000;
  color: white;
  height: 35px;
  width: 75px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background: white;
    border: 1px solid #70e000;
    color: black;
  }
`;
const Display = styled.div`
  width: 400px;

  padding: 2px;
  :hover {
    background: grey;
    cursor: pointer;
  }
`;

export default WatchlistForm;
