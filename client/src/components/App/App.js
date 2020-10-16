import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

import { AppContext } from "../../components/AppContext/AppContext";
import StockQuote from "../../components/StockQuote/StockQuote";
import StockNews from "../StockNews/StockNews";
import Search from "../../components/Search/Search";
import Nav from "../../components/Nav/Nav";

const App = () => {
  const { appUser, signInWithGoogle, handleSignOut, message } = useContext(
    AppContext
  );

  return (
    <StyledPageWrapper>
      <StyledHeader>
        {appUser && appUser.email ? (
          <StyledUserContainer>
            <Avatar src={appUser.photoURL} />
            <p>
              {appUser.displayName} ({appUser.email})
            </p>
            <button onClick={handleSignOut}>Sign Out</button>
          </StyledUserContainer>
        ) : (
          <button onClick={signInWithGoogle}>Sign In</button>
        )}
      </StyledHeader>
      <StyledContainer>Hi {appUser.displayName}!</StyledContainer>
      <Nav />
      <Search />
      <StockQuote />
      <StockNews />
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.nav`
  background: #eaeaea;
  padding: 6px 14px;
  min-height: 48px;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  padding: 14px;
`;

export default App;
