import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ContentContainer, Title } from 'components/BasicSection';
import { NewsletterBox } from 'components/NewsletterBox';
import RichText from 'components/RichText';
import { media } from 'utils/media';

interface Props {
  title: string;
}

export default function Newsletter({ title, children }: PropsWithChildren<Props>) {
  return (
    <Wrapper id="newsletter">
      <Box>
        <NewsletterBox />

        <ContentContainer>
          <Title>{title}</Title>
          <RichText>{children}</RichText>
        </ContentContainer>
      </Box>
    </Wrapper>
  );
}

const Box = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  max-width: 115em;
  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 150em;
  margin: 0 auto;
  width: 100%;
  padding: 10rem 0rem;
  background-color: black;
  color: white;
`;
