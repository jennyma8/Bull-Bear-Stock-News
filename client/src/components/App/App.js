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

// const translate = require("google-translate-api");
// translate.languages["en"] = "English";
// translate("Ik spreek Engels")
//   .then((res) => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
//   })
//   .catch((err) => {
//     console.error(err);
//   });

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
      <Wrapper>
        <Router>
          <StyledPageWrapper>
            <StyledHeader>
              <Nav />
            </StyledHeader>
            <WrapperRight>
              {appUser && appUser.email ? (
                <StyledUserContainer>
                  <Avatar src={appUser.photoURL} />
                  <button onClick={handleSignOut}>{t("SignOut.1")}</button>
                </StyledUserContainer>
              ) : (
                <SignIn>
                  <button onClick={watchlistSignIn}>{t("SignIn.1")}</button>
                </SignIn>
              )}
              <Language>
                <button onClick={() => handleClick("en")}>ENGLISH</button>/
                <button onClick={() => handleClick("fr")}>FRANÇAIS</button>/
                <button onClick={() => handleClick("chi")}>中文</button>
              </Language>
            </WrapperRight>

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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  position: fixed;
  z-index: 500;

  min-height: 48px;
  display: flex;
  margin: 0;
  top: 0;
  width: 100%;

  background: white;
`;

const StyledUserContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    outline: none;
    background: none;
  }
`;

const Language = styled.div`
  z-index: 501;
  display: flex;

  justify-content: flex-end;

  button {
    border: none;
    outline: none;
    background: none;
  }

  button:hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;

const WrapperRight = styled.div`
  position: fixed;
  right: 0;
  z-index: 501;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  button {
    border: none;
    outline: none;
    background: none;
  }

  button:hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;

const SignIn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default App;
