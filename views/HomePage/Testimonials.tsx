import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import { Separator } from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/fixed/IS-logo-nobg.png',
    content: `Thrilled to partner with 0xKYC at Insert Stonks! Their robust identity verification system is a game-changer, ensuring only genuine players get the rewards. We're stepping up our platform's security while maintaining a fair gaming environment.
  0xKYC is unique because of their Proof of Uniqueness solution. It lets us verify user identities without sharing any personally identifiable information on-chain, truly respecting our players' privacy.
  No personal data is shared with Insert Stonks, as 0xKYC handles all verification and stores the results securely. Our partnership is a big leap towards a safer and fairer gaming future in the Web3 world. Here's to enhanced security and privacy with 0xKYC!`,
    href: 'https://www.insertstonks.io/',
    author: {
      name: 'Przemysław Wierzbicki',
      title: 'Visionary Officer and Founder',
      avatarUrl: '/testimonials/is-ceo.jpg',
    },
    width: 170,
    height: 40,
  },
  {
    companyLogoUrl: '/fixed/lomads.png',
    content: `At Lomads, we take compliance and security very seriously. That's why we're excited to partner with 0xKYC to offer our customers an easy way to verify each contributor's uniqueness within their organization. This helps ensure that funds aren't sent to sanctioned individuals and keeps the organisation compliant. This service will be available through Soulbound tokens launched on our platform, and we're proud to offer one of the most reliable and user-friendly solutions out there with 0xKYC.`,
    href: 'https://www.lomads.xyz/',
    author: {
      name: 'Nishant Bhaskar',
      title: 'CEO and Co-Founder',
      avatarUrl: '/testimonials/lomads-ceo.jpeg',
    },
    width: 180,
    height: 30,
  },
  {
    companyLogoUrl: '/testimonials/hashup.png',
    content: `0xKYC is one of the best crypto projects to emerge recently in our region. A common KYC infrastructure solution for decentralized applications is badly needed, and I believe this project has a chance to stir things up in this sphere.`,
    href: 'https://hashup.it/',
    author: {
      name: 'Szymon Jankowski',
      title: 'CEO and Founder',
      avatarUrl: '/testimonials/hashup-ceo.jpg',
    },
    width: 160,
    height: 36,
  },
];

export default function Testimonials() {
  return (
    <>
      <Separator />
      <Title style={{ margin: 0 }}>What our clients say</Title>
      <TestimonialsWrapper>
        <GridContainer>
          <First>
            <Link href={TESTIMONIALS[0].href} target="_blank" rel="noreferrer">
              <NextImage
                src={TESTIMONIALS[0].companyLogoUrl}
                alt={`${TESTIMONIALS[0].author.name}'s company logo`}
                width={TESTIMONIALS[0].width}
                height={TESTIMONIALS[0].height}
                objectFit="contain"
              />
            </Link>

            <Content>“{TESTIMONIALS[0].content}”</Content>
            <AuthorImageContainer>
              <StyledImage src={TESTIMONIALS[0].author.avatarUrl} alt={TESTIMONIALS[0].author.name} width={42} height={42} />{' '}
              <AuthorContent>
                <AuthorName>{TESTIMONIALS[0].author.name}</AuthorName>
                <AuthorTitle>{TESTIMONIALS[0].author.title}</AuthorTitle>
              </AuthorContent>
            </AuthorImageContainer>
          </First>
          <Second>
            <Link href={TESTIMONIALS[1].href} target="_blank" rel="noreferrer">
              <NextImage
                src={TESTIMONIALS[1].companyLogoUrl}
                alt={`${TESTIMONIALS[1].author.name}'s company logo`}
                width={TESTIMONIALS[1].width}
                height={TESTIMONIALS[1].height}
                objectFit="contain"
              />
            </Link>

            <Content>“{TESTIMONIALS[1].content}”</Content>
            <AuthorImageContainer>
              <StyledImage src={TESTIMONIALS[1].author.avatarUrl} alt={TESTIMONIALS[1].author.name} width={42} height={42} />{' '}
              <AuthorContent>
                <AuthorName>{TESTIMONIALS[1].author.name}</AuthorName>
                <AuthorTitle>{TESTIMONIALS[1].author.title}</AuthorTitle>
              </AuthorContent>
            </AuthorImageContainer>
          </Second>
          <Third>
            <Link href={TESTIMONIALS[2].href} target="_blank" rel="noreferrer">
              <NextImage
                src={TESTIMONIALS[2].companyLogoUrl}
                alt={`${TESTIMONIALS[2].author.name}'s company logo`}
                width={TESTIMONIALS[2].width}
                height={TESTIMONIALS[2].height}
                objectFit="contain"
              />
            </Link>

            <Content>“{TESTIMONIALS[2].content}”</Content>
            <AuthorImageContainer>
              <StyledImage src={TESTIMONIALS[2].author.avatarUrl} alt={TESTIMONIALS[2].author.name} width={42} height={42} />{' '}
              <AuthorContent>
                <AuthorName>{TESTIMONIALS[2].author.name}</AuthorName>
                <AuthorTitle>{TESTIMONIALS[2].author.title}</AuthorTitle>
              </AuthorContent>
            </AuthorImageContainer>
          </Third>
        </GridContainer>
      </TestimonialsWrapper>
      <Separator style={{ marginBottom: 0 }} />
    </>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin: 0 2rem;
  grid-template-areas:
    'first first first'
    'second second thrid'
    '. . .';

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'first'
      'second'
      'thrid';
  }
`;

const First = styled.div`
  grid-area: first;
  background-color: rgb(var(--tertiary));
  background-color: #5316904d;
  background-color: #0352971c;
  padding: 2rem;
  border-radius: 1rem;
`;

const Second = styled.div`
  grid-area: second;
  background-color: #e1e1ff;
  background-color: #ed724c33;
  padding: 2rem;
  border-radius: 1rem;
`;

const Third = styled.div`
  grid-area: thrid;
  background-color: #525ee140;

  padding: 2rem;
  border-radius: 1rem;
`;
const Link = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const TestimonialsWrapper = styled(Container)`
  position: relative;
  text-align: center;
  padding-bottom: 0rem;
  margin-top: 4rem !important;
  padding: 0;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.1;
  padding: 0 1rem;
  letter-spacing: -0.03em;

  ${media('<=phone')} {
    font-size: 3.5rem;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 3rem;
  /* & > *:not(:first-child) {
    margin-top: 5rem;
  } */
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 1rem;
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  @media screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
  margin: 2rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  margin-right: 1rem;
  margin-top: 1rem;
  overflow: hidden;
`;

const StyledImage = styled(NextImage)`
  border-radius: 10rem;
`;
