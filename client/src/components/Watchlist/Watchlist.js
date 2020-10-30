import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import WatchlistForm from "../WatchlistForm/WatchlistForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

const Watchlist = ({ watchlist, removeTicker, updateTicker }) => {
  let history = useHistory();

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //handle
  const submitUpdate = (value) => {
    updateTicker(edit.id, value);
    setEdit({
      id: null,
      value: "",
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
        Consult Quote and News
      </button>
      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => removeTicker(stock.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: stock.id, value: stock.text })}
          className="edit-icon"
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
  width: 100px;
  padding: 5px;
`;
export default Watchlist;