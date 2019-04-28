import * as React from 'react';
import styled from 'react-emotion';

import { colors, styles } from '../theme';

const Container = styled.header`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid ${colors.black};
  ${styles.stripeBackground};
`;

const Content = styled.div`
  height: 100%;
  background: ${colors.background};
  font-weight: 200;
  border-right: 1px solid ${colors.black};

  &:first-child {
    margin-right: 2rem;
  }
`;

const ContactDetailsContainer = styled(Content)`
  flex: 1;
  display: flex;
  align-items: center;
  border-left: 1px solid ${colors.black};
  justify-content: flex-end;
  padding-right: 2rem;
  margin-right: 2rem;
`;

const ContactDetail = styled.div`
  display: inline-block;
  border-right: 1px solid ${colors.black};
  padding: 0 1rem;

  &:last-child {
    border-right: none;
  }
`;

const Header = () => (
  <Container>
    <Content>hello</Content>
    <ContactDetailsContainer>
      <ContactDetail>Cihan Bebek</ContactDetail>
      <ContactDetail>cihan.m.bebek@gmail.com</ContactDetail>
      <ContactDetail>+44 77 8977 8865</ContactDetail>
      <ContactDetail>
        <a href="google.com">LinkedIn</a>
      </ContactDetail>
      <ContactDetail>
        <a href="google.com">GitHub</a>
      </ContactDetail>
    </ContactDetailsContainer>
  </Container>
);

export default Header;
