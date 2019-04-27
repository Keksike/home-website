import * as R from 'ramda';
import * as React from 'react';
import styled from 'react-emotion';

import { colors } from '../theme';

const Container = styled.div`
  /* background-color: green; */
  display: flex;
  flex-wrap: wrap;
`;

const Pixel = styled.div`
  width: ${(1 / 5) * 10}%;
  height: ${(1 / 5) * 2 * 10}%;
  box-sizing: border-box;
  border: 1px solid black;
  transition: 0.2s;

  @keyframes flicker {
    0% {
      background-color: none;
    }
    50% {
      background-color: ${colors.link};
    }
    75% {
      background-color: ${colors.link};
    }
    100% {
      background-color: ${colors.accent};
    }
  }

  animation: flicker 2s;
  animation-delay: ${(props: any) => props.animationDelay}s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  &:hover {
    transform: scale(1.35);
  }
`;

const gridItem = {};

interface IProps {
  className?: string;
}

const Logo = (props: IProps) => (
  <Container {...props}>
    {R.repeat(gridItem, 1200).map((obj, idx) => (
      <Pixel animationDelay={idx / 150 + 3} />
    ))}
  </Container>
);

export default Logo;
