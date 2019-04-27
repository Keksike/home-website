import * as React from 'react';
import styled from 'react-emotion';

import { colors } from '../theme';

const Container = styled.button`
  border: none;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    ${colors.accent},
    ${colors.accentDarker}
  );
  color: ${colors.copy};
  font-size: 16px;
  font-weight: 800;
  padding: 1rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 1;
  transition: 0.4s;
  background-size: 200% auto;
  box-shadow: 0 4px 4px rgba(55, 56, 104, 0.2);

  &:hover {
    background-position: right center;
    transform: scale(1.05);
    /* opacity: 0.8; */
  }
`;

interface IProps {
  onClick: () => any;
  children?: any;
}

const Button = (props: IProps) => (
  <Container {...props}>{props.children}</Container>
);

export default Button;
