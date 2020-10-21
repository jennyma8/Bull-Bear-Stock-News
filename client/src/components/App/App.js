import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../components/AppContext/AppContext";
import StockPage from "../../components/StockPage/StockPage";

import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";
import Homepage from "../../components/Homepage/Homepage";
import Footer from "../../components/Footer/Footer";

const App = () => {
  const { appUser, signInWithGoogle, handleSignOut, message } = useContext(
    AppContext
  );

  return (
    <Router>
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

        <Switch>
          <Nav>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/stocks/aapl">
              <StockPage />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Nav>
        </Switch>

        <Footer />
      </StyledPageWrapper>
    </Router>
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
