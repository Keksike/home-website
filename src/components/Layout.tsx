import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import { screenSizes } from '../theme';
import Header from './Header';

import favicon16 from '../images/favicon/favicon-16x16.png';
import favicon32 from '../images/favicon/favicon-32x32.png';
import favicon96 from '../images/favicon/favicon-96x96.png';
import metatagImage from '../images/metatag.png';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// To work with fixed header
const ContentContainer = styled.div`
  flex: 1;
  padding: 3rem 2rem;

  ${screenSizes.onlyTablet} {
    padding: 1.5rem;
  }

  ${screenSizes.onlyMobile} {
    padding: 1rem;
  }
`;

const DESCRIPTION =
  'Blueprinted Consulting is a one-man software consultancy based in Tampere, Finland. Blueprinted offers web & mobile development, API development, cloud infrastructure & DevOps work.';

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
          meta={[
            { name: 'title', content: data.site.siteMetadata.title },
            {
              name: 'description',
              content: DESCRIPTION
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title
            },
            {
              property: 'og:url',
              content: 'https://blueprinted.tech'
            },
            {
              property: 'og:description',
              content: DESCRIPTION
            },
            {
              property: 'og:image',
              itemProp: 'image',
              content: `https://blueprinted.tech${metatagImage}`
            },
            {
              property: 'twitter:image',
              content: `https://blueprinted.tech${metatagImage}`
            },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: URL },
            {
              property: 'twitter:title',
              content: data.site.siteMetadata.title
            },
            {
              property: 'twitter:description',
              content: DESCRIPTION
            }
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
