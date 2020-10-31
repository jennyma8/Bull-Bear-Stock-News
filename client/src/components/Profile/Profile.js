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
  const [newWatchlist, setNewWatchlist] = useState([]);
  //handle
  //push watchlist array in database
  const addStock = (stock) => {
    db.ref(`watchlist`).push(stock);
    //create your own endpoint with`db.ref("watchlist").child(id).setValue({stock})`

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

  //fetch watchlist from firebase
  useEffect(() => {
    // fetch("/watchlist", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setWatchlist(json);
    //   });

    db.ref("watchlist").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        let data = [];
        data.push(snap.val());
        console.log(data);
        setNewWatchlist(data); //not working
        console.log(newWatchlist); //empty
      });
    });
  }, []);

  return newWatchlist.map((stock, index) => (
    <>
      <Wrapper>
        <div>Hi {appUser.displayName}!</div>
        <h1>My profile</h1>
        <div>Email address: {appUser.email}</div>
        <h1 className="watchlist-component">Watchlist: </h1>
        {/* <div>{stock.text}</div> */}

        <WatchlistForm onSubmit={addStock} />
        <Watchlist
          watchlist={watchlist}
          removeTicker={removeTicker}
          updateTicker={updateTicker}
        />
      </Wrapper>
    </>
  ));
};

const Wrapper = styled.div`
  margin-top: 200px;
  margin-left: 50px;
  min-height: 500px;
`;

export default Profile;
