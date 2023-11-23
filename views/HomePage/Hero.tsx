import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';

import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <Heading>Block bots and duplicate-accounts</Heading>

        <Description>
          Verify if your users are real and have the amount of accounts they claim to have with our Sunscreen check and Discord bot.
        </Description>
        <CustomButtonGroup>
          <Button
            href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
            target="_blank"
            rel="noreferrer"
          >
            Add our discord bot to your server<span>&rarr;</span>
          </Button>
          <Button transparent={true} href="https://discord.com/invite/p58hBne2Ue" target="_blank" rel="noreferrer">
            Join our discord<span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>

      <ImageContainer>
        <VideoFrame
          src="https://www.loom.com/embed/a2bb144b5041414f94277b08a5b9d832?sid=ff31c68c-608a-429a-856c-3b68f1543855"
          title="Sunscreen video"
          allowFullScreen
        />
      </ImageContainer>
    </HeroWrapper>
  );
}
const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  min-height: 320px;
`;
const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 15rem;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
`;

const Contents = styled.div`
  max-width: 55rem;
  margin-right: 4.5rem;
  ${media('<=desktop')} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const Description = styled.h2`
  font-size: 1.7rem;
  opacity: 0.8;
  line-height: 1.6;
  font-weight: 400;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  ${media('<=tablet')} {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`;
