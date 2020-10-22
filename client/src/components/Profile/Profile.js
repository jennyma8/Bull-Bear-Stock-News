import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";

const Profile = () => {
  const { appUser } = useContext(AppContext);
  return (
    <>
      <div>Hi {appUser.displayName}!</div>

      <div>Watchlist (add ticker with link)</div>
    </>
  );
};

export default Profile;
