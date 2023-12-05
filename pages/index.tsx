import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import Button from 'components/Button';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { EnvVars } from 'env';

import { DiscordGuild, DiscordGuildsProps } from 'types/discord';
import BackedBy from 'views/HomePage/BackedBy';
import { DiscordGuilds } from 'views/HomePage/DiscordGuilds';
import Hero, { ImageContainer, VideoFrame } from 'views/HomePage/Hero';
import Newsletter from 'views/HomePage/Newsletter';
import { API_URL } from '../constants';
import ButtonGroup from 'components/ButtonGroup';

const Homepage: NextPage<DiscordGuildsProps> = ({ discordGuilds, totalCount }) => {
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
          <DiscordGuilds discordGuilds={discordGuilds} totalCount={totalCount} />
          <Container style={{ textAlign: 'center', marginTop: '10rem' }}>
            <SectionTitle style={{ margin: '4rem 0 2rem 0' }}>Protect your Discord Server</SectionTitle>
            <Text>Sunscreen is a Discord bot that verifies uniqueness of individuals on the basis of facial biometrics</Text>
            <CustomButtonGroup>
              <Button
                href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
                target="_blank"
                rel="noreferrer"
              >
                Add Sunscreen to your server<span>&rarr;</span>
              </Button>
              <Button transparent={true} href="https://discord.com/invite/p58hBne2Ue" target="_blank" rel="noreferrer">
                Join our discord<span>&rarr;</span>
              </Button>
            </CustomButtonGroup>
            <ImageContainer>
              <VideoFrame src="https://player.vimeo.com/video/884105169?h=0549e91407" />
            </ImageContainer>
          </Container>
        </WhiteBackgroundContainer>
      </HomepageWrapper>
    </>
  );
};

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 800px) {
    margin-bottom: 7rem;
  }
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
`;
const Text = styled.p`
  font-size: 1.7rem;
  margin-bottom: 5rem;
`;
export default Homepage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get<DiscordGuild[]>(API_URL + 'discordBot/guilds');
  const discordGuildsData = res.data;
  const resultLimit = 6;
  const guildsWithMostUniquePeople = discordGuildsData.sort((a, b) => b.uniqueCount - a.uniqueCount);

  const discordGuilds = guildsWithMostUniquePeople.slice(0, resultLimit);

  return {
    props: {
      totalCount: discordGuildsData.length,
      discordGuilds,
    },
    revalidate: 43200,
  };
};
