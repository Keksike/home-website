import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';

import { colors } from '../theme';
import Button from './Button';

const Container = styled.header`
  position: fixed;
  width: 100vw;
  height: 6rem;
  background: linear-gradient(to right, ${colors.heading2}, ${colors.heading});
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  margin: 0 5rem;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-right: auto;

  a {
    color: ${colors.copy};
    margin: 0 0.75rem;
    padding: 0.25rem;
    text-decoration: none;

    &.active {
      border-bottom: 2px solid ${colors.copy};
    }

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      -webkit-text-fill-color: transparent;
      background: -webkit-linear-gradient(
        right,
        ${colors.accent},
        ${colors.link}
      );
      background-clip: text;
      -webkit-background-clip: text;
      box-decoration-break: clone;
      text-shadow: none;

      border-bottom-color: ${colors.link};
    }
  }
`;

const TicketsButton = styled(Button)`
  justify-self: flex-end;
`;

const links: Array<{ to: string; text: string }> = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Speakers',
    to: '/speakers'
  },
  {
    text: 'Location',
    to: '/location'
  },
  {
    text: 'Schedule',
    to: '/schedule'
  },
  {
    text: 'Sponsors',
    to: '/sponsors'
  }
];

const Header = () => (
  <Container>
    <Content>
      <NavWrapper>
        {links.map(link => (
          <Link key={link.to} to={link.to} activeClassName="active">
            {link.text}
          </Link>
        ))}
      </NavWrapper>
      <TicketsButton onClick={() => console.log('hello')}>
        Tickets
      </TicketsButton>
    </Content>
  </Container>
);

export default Header;
