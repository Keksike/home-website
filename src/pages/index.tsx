import * as React from 'react';
import styled from 'react-emotion';

import Layout from '../components/Layout';
import { colors, sizes } from '../theme';

import Logo from '../components/Logo';
import arrowIcon from '../images/icons/arrow.svg';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6rem);
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  align-self: center;
  height: 30rem;
  width: 60rem;
  margin-top: 3rem;
`;

const HeroControlsContainer = styled.div`
  display: flex;
  height: 6rem;
  justify-self: flex-end;
  align-items: center;
`;

const HeroInfoContainer = styled.div`
  justify-self: flex-end;
  width: 10rem;

  span {
    display: block;
    height: 0.4rem;
    width: 3rem;
    margin-bottom: 0.5rem;
    background-color: ${colors.copy};
  }
`;

const ArrowContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  transition-duration: 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-weight: normal;
  font-family: 'SansForgetica';
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(right, ${colors.accent}, ${colors.link});
  background-clip: text;
  -webkit-background-clip: text;
  box-decoration-break: clone;
  text-shadow: none;
  user-select: none;

  h1 {
    font-size: ${sizes.titleHuge};
    margin-bottom: 1rem;
  }

  div {
    font-size: 30px;
  }
`;

const IndexPage = () => (
  <Layout>
    <HeroContainer>
      {/* <StyledLogo /> */}
      <TitleContainer>
        <h1>conf.codes</h1>
        <div>Welcome to Rivendell, Mr. Anderson.</div>
      </TitleContainer>
      <HeroControlsContainer>
        <HeroInfoContainer>
          <span />
          <div>6-7 June 2020</div>
          <div>Tampere, Finland</div>
        </HeroInfoContainer>
        <ArrowContainer>
          <img src={arrowIcon} />
        </ArrowContainer>
        <HeroInfoContainer />
      </HeroControlsContainer>
    </HeroContainer>
  </Layout>
);

export default IndexPage;
