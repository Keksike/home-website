import * as React from 'react';
import styled from 'react-emotion';

import Layout from '../components/Layout';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100rem;
  justify-content: space-between;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const IndexPage = () => (
  <Layout>
    <ContentContainer>hello</ContentContainer>
  </Layout>
);

export default IndexPage;
