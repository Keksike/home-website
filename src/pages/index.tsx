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

  h2 {
    display: inline-block;
    margin-bottom: 2rem;

    ${screenSizes.onlyMobile} {
      margin-bottom: 1rem;
    }
  }
`;

const MeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  max-width: 43rem;

  img {
    height: 8rem;
    border-radius: 50%;
    padding: 0.3rem;
    border: 1px solid ${colors.green};
    margin-right: 2rem;

    ${screenSizes.onlyMobile} {
      margin-right: 1rem;
    }
  }

  p {
    line-height: 1.2;
    margin-bottom: 0.5rem;
    font-weight: lighter;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  ${screenSizes.onlyMobile} {
    margin-bottom: 2.5rem;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 0.5rem;
  max-width: 43rem;

  h3 {
    margin-bottom: 1rem;

    display: inline-block;
    padding-top: 0.7rem;
    padding-right: 1rem;
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

  p {
    margin-bottom: 2.5rem;
    font-weight: lighter;
  }

  div:nth-child(1) {
    h3 {
      border-top: 1px solid ${colors.orange};
    }
  }

  div:nth-child(2) {
    h3 {
      border-top: 1px solid ${colors.green};
    }
  }

  div:nth-child(3) {
    h3 {
      border-top: 1px solid ${colors.red};
    }
  }
`;

const BlogPostsContainer = styled.div`
  flex-direction: column;

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
  margin-bottom: 3rem;

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
          <h3>
            <b>Hey! I'm Cihan.</b>
          </h3>
          <p>
            I'm a freelance Software Developer currently based in{' '}
            <b>Tampere, Finland</b>.
          </p>
          <p>Welcome to my website and blog!</p>
        </div>
      </MeTitleContainer>
      <DescriptionContainer>
        <div>
          <h3>Some cool stuff</h3>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div>
          <h3>Some more cool stuff</h3>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div>
          <h3>Interested in working with me?</h3>
          <p>
            Great! Feel free to give me a <a href="tel:+358504769925">call</a>,
            send me an <a href="mailto:cihan.m.bebek@gmail.com">email</a> or add
            me on{' '}
            <a target="_blank" href="https://www.linkedin.com/in/cihan-bebek/">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </DescriptionContainer>
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
