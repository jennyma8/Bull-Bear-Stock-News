import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";
import Watchlist from "../Watchlist/Watchlist";
import WatchlistForm from "../WatchlistForm/WatchlistForm";
import * as firebase from "firebase";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CompanyLogos from "../assets/Companylogos.png";

const db = firebase.database();

const Profile = () => {
  const { t } = useTranslation();

  const { appUser } = useContext(AppContext);
  // console.log(appUser.email);

  const { watchlist, setWatchlist } = useContext(AppContext);

  let currentUser = appUser.email;
  // console.log(currentUser);

  //handle
  //push watchlist array in database
  const addStock = (stock) => {
    console.log(stock); //includes stock.company
    const newPostKey = db.ref(`watchlist`).push(stock).key;
    // console.log(newPostKey);

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
    console.log(removeArr);
    setWatchlist(removeArr);
    db.ref(`watchlist`).set(removeArr);
  };

  //fetch watchlist from firebase

  useEffect(() => {
    if (appUser.email) {
      db.ref("watchlist").on("value", (snapshot) => {
        // console.log(snapshot.val());
        let data = [];

        snapshot.forEach((snap) => {
          data.push(snap.val());
          // console.log(data);
        });

        setWatchlist(data);
      });
    }
  }, [appUser]);

  // console.log(watchlist);
  //filter watchlist with currentUser email
  let currentWatchlist = watchlist.filter(
    (stock) => stock.email === appUser.email
  );
  // console.log(currentWatchlist);

  return (
    <>
      <Wrapper>
        {appUser.displayName ? (
          <WrapperProfile>
            <WrapperTop>
              <div>
                <div>
                  {t("Hi.1")} {appUser.displayName}!
                </div>
                <h1>{t("Profile.1")}</h1>
                <div>Name: Jenny Ma</div>
                <div>
                  {t("Email.1")}: {appUser.email}
                </div>
                <div>Preferred Language: English</div>
                <div>Location: Montreal, Quebec</div>
                <h1 className="watchlist-component">{t("Watchlist.1")}: </h1>
                <WatchlistForm onSubmit={addStock} />
                <Watchlist
                  removeTicker={removeTicker}
                  updateTicker={updateTicker}
                />
              </div>

              <img
                src={CompanyLogos}
                alt="Logo"
                style={{ height: 500, width: 600 }}
              />
            </WrapperTop>
          </WrapperProfile>
        ) : (
          "Please sign in to access your profile."
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  color: white;
  padding: 50px;

  min-height: 450px;

  background: linear-gradient(to bottom right, #3d5a80 0%, #ccffff 100%);
`;

const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-top: 60px;
  }
`;
const WrapperProfile = styled.div``;

export default Profile;
