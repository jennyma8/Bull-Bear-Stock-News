import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../components/AppContext/AppContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import StockPage from "../../components/StockPage/StockPage";
import Nav from "../../components/Nav/Nav";
import Homepage from "../../components/Homepage/Homepage";
import Footer from "../../components/Footer/Footer";
import Profile from "../Profile/Profile";
import About from "../About/About";
import Error from "../Error/Error";

const App = () => {
  const { appUser, signInWithGoogle, handleSignOut } = useContext(AppContext);

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const watchlistSignIn = () => {
    signInWithGoogle();
  };

  return (
    <>
      <Router>
        <StyledPageWrapper>
          <StyledHeader>
            <Nav />
            <div className="App">
              <nav>
                <button onClick={() => handleClick("en")}>English</button>
                <button onClick={() => handleClick("fr")}>Français</button>
                <button onClick={() => handleClick("chi")}>中文</button>
              </nav>
              <header className="App-header">
                <p>
                  <h3>{t("Thanks.1")}</h3> <h3>{t("Why.1")}</h3>
                </p>
              </header>
            </div>
            {appUser && appUser.email ? (
              <StyledUserContainer>
                <Avatar src={appUser.photoURL} />
                <button onClick={handleSignOut}>Sign Out</button>
              </StyledUserContainer>
            ) : (
              <button onClick={watchlistSignIn}>Sign In</button>
            )}
          </StyledHeader>

          <Switch>
            <Route exact path="/stocks">
              <StockPage />
            </Route>
            <Route path="/stocks/:id">
              <StockPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/*">
              <Error />
            </Route>
          </Switch>
        </StyledPageWrapper>
        <Footer />
      </Router>
    </>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const StyledHeader = styled.div`
  position: fixed;
  z-index: 500;

  min-height: 48px;
  display: flex;
  margin: 0;
  top: 0;
  width: 100%;
  justify-content: space-between;
  background: white;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export default App;
