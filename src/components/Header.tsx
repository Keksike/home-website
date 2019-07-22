import * as React from 'react';
import styled from 'react-emotion';

import { colors, screenSizes } from '../theme';

const Container = styled.header`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100vw;
  border-bottom: 2px solid ${colors.lighterGrey};
  padding: 1.5rem 4rem;
  box-sizing: border-box;

  ${screenSizes.belowDesktop} {
    padding: 2rem;
  }

  ${screenSizes.onlyTablet} {
    padding: 1.5rem;
  }

  ${screenSizes.onlyMobile} {
    padding: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.background};
  font-weight: 200;
`;

const TitleContainer = styled(ContentContainer)`
  flex-direction: column;
  font-size: 26px;
  justify-content: center;

  ${screenSizes.onlyTablet} {
    font-size: 22px;
  }

  ${screenSizes.onlyMobile} {
    font-size: 20px;
  }
`;

const ContactDetailsContainer = styled(ContentContainer)`
  flex: 1;
  justify-content: flex-end;
  font-size: 16px;

  ${screenSizes.belowTabletLandscape} {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0;
    border-right: none;
  }

  ${screenSizes.onlyMobile} {
    font-size: 14px;
  }

  a {
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(
      115deg,
      ${colors.accent},
      ${colors.link}
    );
    background-clip: text;
    -webkit-background-clip: text;
    box-decoration-break: clone;
  }
`;

const ContactDetail = styled.span`
  border-right: 1px solid ${colors.black};
  padding: 0 1rem;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  ${screenSizes.onlyMobile} {
    padding: 0 0.5rem;
  }
`;

const ResponsiveContactDetail = styled(ContactDetail)`
  ${screenSizes.belowTabletLandscape} {
    border: none;
    padding: 0;
    margin-bottom: 0.2rem;
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
      <ResponsiveContactDetail>+358 50 476 9925</ResponsiveContactDetail>
      <div>
        <ContactDetail>
          <a target="_blank" href="https://twitter.com/cihanbebek">
            Twitter
          </a>
        </ContactDetail>
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
        <ContactDetail>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1GpwyPIuKS0ws67pyPoPYmtx2UYD8CEv1sXNjm6GvTn4/edit"
          >
            CV
          </a>
        </ContactDetail>
      </div>
    </ContactDetailsContainer>
  </Container>
);

export default Header;
