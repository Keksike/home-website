import * as React from 'react';
import styled from 'react-emotion';

import { colors, screenSizes, styles } from '../theme';

const Container = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.black};
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    color: ${colors.darkGrey};
  }

  span {
    color: ${colors.mediumGrey};
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  &:hover {
    h3,
    h4 {
      -webkit-text-fill-color: transparent;
      background: -webkit-linear-gradient(
        115deg,
        ${colors.accent},
        ${colors.highlight}
      );
      background-clip: text;
      -webkit-background-clip: text;
      box-decoration-break: clone;
    }
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
  ${styles.stripeBackground}
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
`;

const ReadOnText = styled.span`
  font-size: 12px;
  margin-bottom: 1rem;

  span {
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(
      115deg,
      ${colors.accent},
      ${colors.highlight}
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
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <ReadOnText>
          Read on <span>medium.com</span>...
        </ReadOnText>
        <p>{sampleText}</p>
      </ContentContainer>
    </Container>
  );
};

export default BlogPost;
