import * as React from 'react';
import styled from 'react-emotion';

import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import meImage from '../images/me.jpg';
import { colors, screenSizes, styles } from '../theme';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const MeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-bottom: 4rem;

  img {
    height: 8rem;
    border-radius: 50%;
    padding: 0.3rem;
    border: 1px solid ${colors.accent};
    margin-right: 2rem;

    ${screenSizes.onlyMobile} {
      margin-right: 1rem;
    }
  }

  ${screenSizes.onlyMobile} {
    margin-bottom: 2.5rem;
  }
`;

const BlogPostsContainer = styled.div`
  flex-direction: column;
  h2 {
    margin-bottom: 2rem;

    ${screenSizes.onlyMobile} {
      margin-bottom: 1rem;
    }
  }

  > div {
    display: flex;
  }
`;

const BlogPosts = styled.div`
  max-width: 40rem;

  ${screenSizes.belowTabletLandscape} {
    width: 100%;
    max-width: 100%;
  }
`;

const BlogPostContainer = styled.div`
  ${styles.stripeBackgroundLarge}
  margin-bottom: 2rem;

  ${screenSizes.onlyMobile} {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StripedBackground = styled.div`
  flex: 1;
  margin-left: 2rem;
  ${styles.stripeBackground}

  ${screenSizes.belowTabletLandscape} {
    display: none;
    margin-left: 0;
  }
`;

const blogPosts = [
  {
    title: 'Consulting or con-$ulting:',
    subTitle:
      'A theory on how Hertz’s inexperience in buying software — combined with Accenture’s incompetence to deliver it — flushed $32M+ down the drain',
    sampleText:
      'The article by The Register regarding Hertz suing Accenture over their failed website revamp deal has gained a lot of attention on social media creating a lot of discussion around failed...',
    link: 'https://hackernoon.com/consulting-or-con-sulting-e5b7567bb6be',
    linkText: 'hackernoon.com',
    date: new Date()
  }
];

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
      <BlogPostsContainer>
        <h2>Blog posts</h2>
        <div>
          <BlogPosts>
            {blogPosts.map(post => (
              <BlogPostContainer>
                <BlogPost {...post} />
              </BlogPostContainer>
            ))}
          </BlogPosts>
          <StripedBackground />
        </div>
      </BlogPostsContainer>
    </ContentContainer>
  </Layout>
);

export default IndexPage;
