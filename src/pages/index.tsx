import * as React from 'react';
import styled from 'react-emotion';

import Layout from '../components/Layout';
import meImage from '../images/me.jpg';
import { colors } from '../theme';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const MeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  img {
    height: 8rem;
    border-radius: 50%;
    padding: 0.3rem;
    border: 1px solid ${colors.accent};
    margin-right: 2rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <ContentContainer>
      <MeTitleContainer>
        <img src={meImage} />
        <div>
          <div>
            <b>Hey! I'm Cihan.</b> Welcome to my website and blog.
          </div>
        </div>
      </MeTitleContainer>
    </ContentContainer>
  </Layout>
);

export default IndexPage;
