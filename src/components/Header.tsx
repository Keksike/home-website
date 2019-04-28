import * as React from 'react';
import styled from 'react-emotion';

import { colors, styles, screenSizes } from '../theme';

const Container = styled.header`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100vw;
  border-bottom: 1px solid ${colors.black};
  ${styles.stripeBackground};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.background};
  font-weight: 200;
  border-right: 1px solid ${colors.black};

  &:first-child {
    margin-right: 2rem;
  }
`;

const TitleContainer = styled(ContentContainer)`
  flex-direction: column;
  font-size: 26px;
  justify-content: center;
  padding: 2rem;

  ${screenSizes.belowDesktop} {
    padding: 1rem;
  }
`;

const ContactDetailsContainer = styled(ContentContainer)`
  flex: 1;
  border-left: 1px solid ${colors.black};
  justify-content: flex-end;
  margin-right: 2rem;
  font-size: 16px;
  padding: 2rem;

  ${screenSizes.belowDesktop} {
    padding: 1rem;
  }

  ${screenSizes.belowTabletLandscape} {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0;
    border-right: none;
  }
`;

const ContactDetail = styled.span`
  border-right: 1px solid ${colors.black};
  padding: 0 1rem;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

const ResponsiveContactDetail = styled(ContactDetail)`
  ${screenSizes.belowTabletLandscape} {
    border: none;
    padding: 0;
  }
`;

const Header = () => (
  <Container>
    <TitleContainer>
      <div>blueprinted</div>
      <div>consulting</div>
    </TitleContainer>
    <ContactDetailsContainer>
      <ResponsiveContactDetail>Cihan Bebek</ResponsiveContactDetail>
      <ResponsiveContactDetail>cihan.m.bebek@gmail.com</ResponsiveContactDetail>
      <ResponsiveContactDetail>+44 77 8977 8865</ResponsiveContactDetail>
      <div>
        <ContactDetail>
          <a target="_blank" href="https://www.linkedin.com/in/cihan-bebek/">
            LinkedIn
          </a>
        </ContactDetail>
        <ContactDetail>
          <a target="_blank" href="https://github.com/Keksike">
            GitHub
          </a>
        </ContactDetail>
      </div>
    </ContactDetailsContainer>
  </Container>
);

export default Header;
