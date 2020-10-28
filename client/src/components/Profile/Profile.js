import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";
import Watchlist from "../Watchlist/Watchlist";
import WatchlistForm from "../WatchlistForm/WatchlistForm";

const Profile = () => {
  const { appUser } = useContext(AppContext);
  // console.log(appUser);
  const [watchlist, setWatchlist] = useState([]);

  const addStock = (stock) => {
    if (!stock.text || /^\s*$/.test(stock.text)) {
      return;
    }
    const newStock = [stock, ...watchlist];

    setWatchlist(newStock);
    console.log(stock, ...watchlist);
  };

  const updateTicker = (stockId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setWatchlist((prev) =>
      prev.map((item) => (item.id === stockId ? newValue : item))
    );
  };

  const removeTicker = (id) => {
    const removeArr = [...watchlist].filter((stock) => stock.id !== id);

    setWatchlist(removeArr);
  };

  return (
    <>
      <Wrapper>
        <div>Hi {appUser.displayName}!</div>
        <h1>My profile</h1>
        <div>Email address: {appUser.email}</div>
        <h1 className="watchlist-component">Watchlist: </h1>

        <WatchlistForm onSubmit={addStock} />
        <Watchlist
          watchlist={watchlist}
          removeTicker={removeTicker}
          updateTicker={updateTicker}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  margin-left: 50px;
  min-height: 500px;
`;

export default Profile;
//todo list , each link history .push /stock/ticker
