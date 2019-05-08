import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import { screenSizes } from '../theme';
import Header from './Header';

import favicon16 from '../images/favicon/favicon-16x16.png';
import favicon32 from '../images/favicon/favicon-32x32.png';
import favicon96 from '../images/favicon/favicon-96x96.png';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// To work with fixed header
const ContentContainer = styled.div`
  flex: 1;
  padding: 3rem 2rem;

  ${screenSizes.onlyMobile} {
    padding: 2rem 1rem;
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
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${favicon16}`
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${favicon32}`
            },
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon96}` }
          ]}
        >
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
