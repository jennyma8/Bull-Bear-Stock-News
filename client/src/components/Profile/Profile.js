import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";
import Watchlist from "../Watchlist/Watchlist";
import WatchlistForm from "../WatchlistForm/WatchlistForm";
import * as firebase from "firebase";

const db = firebase.database();

const Profile = () => {
  const { appUser } = useContext(AppContext);
  // console.log(appUser);

  const [watchlist, setWatchlist] = useState([]);

  //handle
  //push watchlist array in database
  const addStock = (stock) => {
    const newPostKey = db.ref(`watchlist`).push(stock).key;
    console.log(newPostKey);

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

  //remove ticker from firebase
  const removeTicker = (id) => {
    const removeArr = [...watchlist].filter((stock) => stock.id !== id);

    //this will remove everything but we don't want that

    setWatchlist(removeArr);
    // db.ref(`watchlist`).update(watchlist);
  };

  //fetch watchlist from firebase
  useEffect(() => {
    db.ref("watchlist").on("value", (snapshot) => {
      // console.log(snapshot.val());
      let data = [];

      snapshot.forEach((snap) => {
        data.push(snap.val());
        console.log(data);
      });

      setWatchlist(data);
    });
  }, []);
  // console.log(watchlist);

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
