import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import { screenSizes } from '../theme';
import Header from './Header';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// To work with fixed header
const ContentContainer = styled.div`
  flex: 1;
  padding: 4rem 2rem;

  ${screenSizes.onlyMobile} {
    padding: 4rem 1rem;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header />
        <PageContainer>
          <ContentContainer>{children}</ContentContainer>
        </PageContainer>
      </>
    )}
  />
);

export default Layout;
