import React, { useContext } from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

import { AppContext } from "../../components/AppContext/AppContext";

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
  height: 50px;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  min-height: 400px;
  padding: 14px;
`;

export default App;
