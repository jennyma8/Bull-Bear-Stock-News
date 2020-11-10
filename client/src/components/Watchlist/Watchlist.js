import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../components/AppContext/AppContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import WatchlistForm from "../WatchlistForm/WatchlistForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { TiEdit } from "react-icons/ti";

const Watchlist = ({ removeTicker, updateTicker }) => {
  const { t } = useTranslation();

  let history = useHistory();

  const { appUser } = useContext(AppContext);
  const { watchlist, setWatchlist } = useContext(AppContext);
  let currentUser = appUser.email;
  // console.log(currentUser);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    email: "",
    company: "",
  });

  //handle
  const submitUpdate = (value) => {
    updateTicker(edit.id, value, edit.email);
    setEdit({
      id: null,
      value: "",
      email: "",
      company: "",
    });
  };

  const handleHistory = (text) => {
    history.push(`/stocks/${text}`);
    console.log(text);
  };

  React.useEffect(() => {
    return () => {};
  }, [appUser]);

  if (edit.id) {
    return (
      <>
        <WatchlistForm edit={edit} onSubmit={submitUpdate} />
      </>
    );
  }
  // console.log(watchlist);

  //filter watchlist with currentUser email
  let currentWatchlist = watchlist.filter(
    (stock) => stock.email === appUser.email
  );
  // console.log(currentWatchlist);

  //watchlist with link to stockpage
  //autocomplete search bar from all tickers local json file
  return currentWatchlist.map((stock, index) => (
    <Wrapper key={index}>
      <WatchStock key={stock.id}>
        {stock.text} - {stock.company}
      </WatchStock>
      <button type="button" onClick={() => handleHistory(stock.text)}>
        {t("Consult.1")}
      </button>
      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => removeTicker(stock.id)}
          className="delete-icon"
        />
      </div>
    </Wrapper>
  ));
};

const Wrapper = styled.div`
  display: flex;
`;

const WatchStock = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 400px;
  padding: 5px;
`;
export default Watchlist;
