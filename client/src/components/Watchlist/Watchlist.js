import React, { useState, useContext } from "react";
import { AppContext } from "../../components/AppContext/AppContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import WatchlistForm from "../WatchlistForm/WatchlistForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { TiEdit } from "react-icons/ti";

const Watchlist = ({ removeTicker, updateTicker }) => {
  const { t } = useTranslation();

  let history = useHistory();

  const { appUser } = useContext(AppContext);
  const { watchlist, setWatchlist } = useContext(AppContext);

  // const appUserEmail = appUser.email;
  // console.log(appUserEmail);

  // let logWatchlist = watchlist.map((stock) => {
  //   let list = {
  //     email: stock.email,
  //     text: stock.text,
  //   };
  //   if (stock.email === appUser.Email) {
  //     list["text"] = stock.text;
  //   }

  //   return list;
  // });
  // console.log(logWatchlist);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    email: "",
  });

  //handle
  const submitUpdate = (value) => {
    updateTicker(edit.id, value, edit.email);
    setEdit({
      id: null,
      value: "",
      email: "",
    });
  };
  const handleHistory = (text) => {
    history.push(`/stocks/${text}`);
    console.log(text);
  };

  if (edit.id) {
    return (
      <>
        <WatchlistForm edit={edit} onSubmit={submitUpdate} />
      </>
    );
  }

  //watchlist with link to stockpage
  //autocomplete search bar from all tickers local json file
  return watchlist.map((stock, index) => (
    <Wrapper key={index}>
      <WatchStock key={stock.id}>{stock.text}</WatchStock>
      <button type="button" onClick={() => handleHistory(stock.text)}>
        {t("Consult.1")}
      </button>
      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => removeTicker(stock.id)}
          className="delete-icon"
        />
        {/* added an edit button but found it useless in the end so I uncomment it for now*/}
        {/* <TiEdit
          onClick={() => setEdit({ id: stock.id, value: stock.text })}
          className="edit-icon"
        /> */}
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
  width: 100px;
  padding: 5px;
`;
export default Watchlist;
