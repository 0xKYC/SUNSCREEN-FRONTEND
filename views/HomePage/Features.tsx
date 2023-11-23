import React from 'react';
import styled from 'styled-components';

import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/security.svg',
    title: 'Web3 Games',
    description: 'Verify if your users have the amount of accounts they claim to have with our Proof of Uniqueness solution.',
  },
  {
    imageUrl: '/grid-icons/vote.svg',
    title: 'Onchain KYC',
    description: 'Verify users and streamline the process to lower your compliance risk with our onchain attestations.',
  },
  {
    imageUrl: '/grid-icons/terms.svg',
    title: 'Fairdrops and DAOs',
    description: "Eliminate abuse of minting mechanisms and illegitimate votes by verifying each user's identity",
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title + idx} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled('div')`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0 auto;
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
  margin-top: 5rem;
`;
