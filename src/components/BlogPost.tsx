import * as React from 'react';
import styled from 'react-emotion';

import { colors, screenSizes, styles } from '../theme';

const Container = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.black};
  margin-bottom: 2rem;

  ${screenSizes.onlyMobile} {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  p {
    color: ${colors.darkGrey};
    margin-bottom: 1.5rem;
  }

  span {
    color: ${colors.mediumGrey};
  }

  &:hover {
    .title-container {
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
  }
`;

const TitleContainer = styled.div`
  h3 {
    margin-bottom: 0.2rem;
  }

  h4 {
    margin-bottom: 1rem;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CornerStripes = styled.div`
  border-right: 1px solid ${colors.black};
  border-bottom: 1px solid ${colors.black};
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  ${styles.stripeBackgroundLarge}
`;

const ContentContainer = styled.div`
  display: flex;
  color: ${colors.black};
  flex-direction: column;
  padding: 1.5rem 2.5rem 2rem 2.5rem;

  ${screenSizes.onlyMobile} {
    padding: 1rem;
  }
`;

const Date = styled.span`
  font-size: 15px;
  margin-top: 0.18rem;
`;

const ReadOnText = styled.span`
  font-size: 12px;

  span {
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

interface IProps {
  title: string;
  subTitle: string;
  link: string;
  sampleText: string;
  date: Date;
}

const BlogPost = (props: IProps) => {
  const { title, subTitle, link, sampleText, date } = props;

  return (
    <Container href={link}>
      <DateContainer>
        <CornerStripes />
        <Date>{date.toDateString()}</Date>
      </DateContainer>
      <ContentContainer>
        <TitleContainer className="title-container">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </TitleContainer>

        <p>{sampleText}</p>
        <ReadOnText>
          Read on <span>medium.com</span>
        </ReadOnText>
      </ContentContainer>
    </Container>
  );
};

export default BlogPost;
