import Head from 'next/head';
import styled from 'styled-components';
import { Title } from 'components/BasicSection';

import Container from 'components/Container';
import { EnvVars } from 'env';

import Hero from 'views/HomePage/Hero';
import Newsletter from 'views/HomePage/Newsletter';
import Button from 'components/Button';
import Cta from 'views/HomePage/Cta';
import SectionTitle from 'components/SectionTitle';
import BackedBy from 'views/HomePage/BackedBy';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} - Private Uniqueness Verification, Onchain Sanctions Attestation and a Discord bot</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BackedBy />
          <Newsletter title="Join our newsletter to learn about our exciting updates">
            <p>
              We offer the most private Proof of Personhood and a Discord Bot. We are partners of Onfido, and are provisional patent pending
              for our onchain attestation technology.
            </p>
          </Newsletter>

          <Container style={{ textAlign: 'center', marginTop: '10rem' }}>
            <SectionTitle style={{ margin: '4rem 0' }}>Protect your Discord Server</SectionTitle>
            <Button
              href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
              target="_blank"
              rel="noreferrer"
            >
              Add To Discord<span>&rarr;</span>
            </Button>
          </Container>
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer> */}
        {/* <Cta /> */}
        {/* <BasicSectionWrapper> */}
        {/* </BasicSectionWrapper> */}
        {/* </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 1.5rem;
  @media screen and (min-width: 1224px) {
    width: 70%;
  }
`;
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding-top: 1rem;
  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  /* padding-bottom: 5rem; */
  /* & > *:not(:first-child) {
    margin-top: 15rem;
  } */
  /* @media screen and (max-width: 1240px) {
    & > *:not(:first-child) {
      margin-top: 6rem;
    } */
`;
