import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

import { AppContext } from "../../components/AppContext/AppContext";
import Stock from "../../components/Stock/Stock";

// const finnhub = require("finnhub");

// const api_key = finnhub.ApiClient.instance.authentications["api_key"];
//   api_key.apiKey = "bu3377n48v6pqlhnsqfg"; // Replace this
//   const finnhubClient = new finnhub.DefaultApi();
//   finnhubClient.companyNews(
//     "AAPL",
//     "2020-01-01",
//     "2020-05-01",
//     (error, data, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(data);
//       }
//     }
//   );
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
      <StyledContainer>
        你好 {appUser.displayName}! {message}
      </StyledContainer>
      <Stock />
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
  min-height: 400px;
  padding: 14px;
`;

export default App;
