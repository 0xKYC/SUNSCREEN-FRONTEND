import { Splide, SplideSlide } from '@splidejs/react-splide';

import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';

import styled from 'styled-components';

import { media } from 'utils/media';

const BLOCKCHAINS = [
  {
    name: 'Polygon Mainnet',
    img: 'polygon.png',
    alt: 'polygon',
    href: 'https://polygon.technology/',
  },
  {
    name: 'BNB Smart Chain',
    img: 'bnb.png',
    alt: 'bnb',
    href: 'https://www.bnbchain.org/en/smartChain',
  },

  {
    name: 'Ethereum Sepolia',
    img: 'ethereum-logo.png',
    alt: 'Ethereum Sepolia',
    href: 'https://ethereum.org/en/',
  },
  {
    name: 'Scroll Mainnet',
    img: 'scroll.png',
    alt: 'Scroll Mainnet',
    href: 'https://scroll.io/ecosystem',
  },

  // {
  //   name: '5ire (coming soon)',
  //   img: '5ire.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
  // {
  //   name: 'Metis (coming soon)',
  //   img: 'metis.png',
  //   alt: 'polygon',
  //   href: 'www.polygon.com',
  // },
];

export default function BlockchainsBanner() {
  return (
    <Wrapper>
      <Title>Supported blockchains</Title>

      <StyledSplide
        aria-label="Partners"
        options={{
          autoWidth: true,
          type: 'loop',
          gap: '40px',
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 1,
          perMove: 1,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {BLOCKCHAINS.map((logo, idx) => (
          <SplideSlide key={idx}>
            <StyledLink href={logo.href} target="_blank" rel="noreferrer">
              <img src={'/blockchains/' + logo.img} alt={logo.alt} height="40px" width="40px" /> {logo.name}
              {logo.name === 'Scroll Mainnet' && <OrangeSpan>(Ecosystem Partner)</OrangeSpan>}
            </StyledLink>
          </SplideSlide>
        ))}
      </StyledSplide>
      <LogosWrapper>
        {BLOCKCHAINS.map((logo, idx) => (
          <StyledLink key={idx} href={logo.href} target="_blank" rel="noreferrer">
            <Image src={'/blockchains/' + logo.img} alt={logo.alt} height="40px" width="40px" />
            {logo.name}
            {logo.name === 'Scroll Mainnet' && <OrangeSpan>(Ecosystem Partner)</OrangeSpan>}
          </StyledLink>
        ))}
      </LogosWrapper>
    </Wrapper>
  );
}

const OrangeSpan = styled.span`
  color: rgb(var(--primary));
  margin-left: -7px;
`;
const StyledSplide = styled(Splide)`
  display: block;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: 1024px) {
    gap: 5rem;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 3.5rem;
  text-align: center;
  opacity: 0.8;
  font-weight: bold;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
