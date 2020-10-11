import React from 'react';
import styled from 'styled-components';

const Avatar = ({ src }) => <StyledAvatar src={src} />;

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

export default Avatar;
