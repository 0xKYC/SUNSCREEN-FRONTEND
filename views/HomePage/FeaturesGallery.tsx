import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import Link, { Anchor } from 'components/Link';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';

const TABS = [
  {
    title: 'Front-end Token Gate',
    description: 'With a couple lines of code you can integrate our solution within your system',
    imageUrl: '/front.png',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Smart Contracts Integration',
    description: 'Easy contract integration and assistance from our team when needed',
    imageUrl: '/sol-mod.png',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'API and Custom Integrations',
    description: "Get an identifier without revealing user's name or biometric information",
    imageUrl: '/api-callback.png',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} alt={singleTab.title} objectFit="cover" width={750} height={550} priority={isFirst} />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <p>{singleTab.description}</p>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper id="integration">
      <Content>
        <SectionTitle>Easy to Integrate</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
      <StyledText>
        Add our{' '}
        <Anchor
          rel="noreferrer"
          target="_blank"
          href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
        >
          Discord Bot
        </Anchor>{' '}
        to your server or visit our{' '}
        <Anchor rel="noreferrer" target="_blank" href="https://docs.0xkyc.id/">
          Technical Documentation
        </Anchor>
      </StyledText>
    </FeaturesGalleryWrapper>
  );
}

const StyledText = styled('p')`
  text-align: center;
  font-size: 2rem;
`;

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  scroll-margin-top: 100px;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 5rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  margin-bottom: 3rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    width: 500px;
  }

  ${media('<=tablet')} {
    width: 500px;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '1.5' : '0')};
  box-shadow: var(--shadow-md);

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);
  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
