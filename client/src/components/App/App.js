import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { AppContext } from "../../components/AppContext/AppContext";
import StockPage from "../../components/StockPage/StockPage";
import Search from "../../components/Search/Search";
import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";
import Homepage from "../../components/Homepage/Homepage";
import Footer from "../../components/Footer/Footer";

import Profile from "../Profile/Profile";

const App = () => {
  const { appUser, signInWithGoogle, handleSignOut, message } = useContext(
    AppContext
  );

  return (
    <Router>
      <StyledPageWrapper>
        <StyledHeader>
          <Nav />
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

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route path="/stocks" component={Search}>
            <StockPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
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

const StyledHeader = styled.div`
  padding: 6px 14px;
  min-height: 48px;
  display: flex;

  justify-content: space-between;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default App;
