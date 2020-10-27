import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";

const Profile = () => {
  const { appUser } = useContext(AppContext);
  console.log(appUser);
  return (
    <>
      <Wrapper>
        <div>Hi {appUser.displayName}!</div>
        <h1>My profile</h1>
        <div>Email address: {appUser.email}</div>
        <div>Watchlist: </div>

        <div>Language: </div>
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
