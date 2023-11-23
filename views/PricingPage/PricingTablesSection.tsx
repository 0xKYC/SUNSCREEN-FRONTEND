import React, { useState } from 'react';
import styled from 'styled-components';
import { AutofitGrid, AutofitGridMobile } from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';
import { Anchor } from 'components/Link';

const PRICING_TABS = [
  {
    name: 'Sunscreen',
    index: 0,
    features: ['Liveness Check', 'iBeta Level 2 Compliance', 'Proof of Uniqueness', 'Verification for Web3 and Discord'],
    price: 0.2,
    description: 'Uniqueness Verification',
  },
  {
    name: '0xKYC',
    index: 1,
    features: ['Sanctions Check', 'Verification of age (18+)', 'Proof of Uniqueness', 'Best-in-Class ID Verification'],
    price: 3,
    description: 'Sanctions Check',
  },
  {
    name: 'Enterprise',
    index: 2,
    features: ['Combine Any Features', 'Exclude Countries (e.g. USA)', 'AML Monitoring', 'Customizations and Branding'],
    description: 'Customisable Solution',
  },
];

export default function PricingTablesSection() {
  const [selectedTab, setSelectedTab] = useState(PRICING_TABS[0].index);

  const handleTabChange = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  return (
    <Wrapper>
      <SectionTitle>Pricing</SectionTitle>

      <P>
        Flexible plans to fill your needs: all of our checks are <OrangeSpan>reusable</OrangeSpan> onchain or available via API.{' '}
      </P>

      <BtnGroup>
        {PRICING_TABS.map((tab) => (
          <StyledBtn selected={selectedTab === tab.index} key={tab.name} onClick={() => handleTabChange(tab.index)}>
            {tab.name}
          </StyledBtn>
        ))}
      </BtnGroup>
      <AutofitGrid>
        {PRICING_TABS.map((tab) => {
          return (
            <PricingCard key={tab.index} title={tab.name} description={tab.description} benefits={tab.features}>
              {tab.price && '$' + tab.price.toString()}
              <Text isBold={Boolean(!tab.price)} style={{ margin: !tab.price ? '.4rem' : '', marginTop: !tab.price ? '1rem' : '' }}>
                {tab.price ? '/check' : 'Contact us'}
              </Text>

              {/* {!tab.price && <span style={{ marginBottom: '.5rem' }}></span>} */}
            </PricingCard>
          );
        })}
      </AutofitGrid>
      <AutofitGridMobile>
        {PRICING_TABS.map((tab) => {
          return (
            selectedTab === tab.index && (
              <PricingCard key={tab.index} title={tab.name} description={tab.description} benefits={tab.features}>
                {tab.price && '$' + tab.price.toString()}
                <Text isBold={Boolean(!tab.price)}>{tab.price ? '/check' : 'Contact us'}</Text>
              </PricingCard>
            )
          );
        })}
      </AutofitGridMobile>

      <Info>
        Each service comes with a free compliance consultation and we&apos;ll make sure to help you solve your duplicate account (via our
        Proof of Uniqueness), bot and privacy problems. Contact our sales team today at:{' '}
        <Anchor href="mailto:support@0xkyc.id">support@0xkyc.id</Anchor> and help us save your privacy.
      </Info>
      <br />
      <Info>Our Discord Bot is currently free, but it will soon be $14.9 per month.</Info>
    </Wrapper>
  );
}

const Text = styled.span<{ isBold: boolean }>`
  font-weight: ${(p) => (p.isBold ? 'bolder !important' : '200')};
`;
const Wrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1024px) {
    margin-top: 3.5rem;
  }
`;

const Info = styled.p`
  font-size: 1.5rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin: 2rem;
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #415362; */
  border: 1px solid rgb(251, 115, 36);
  padding: 0.4rem;
  border-radius: 2rem;
  width: 440px;
  max-width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
const StyledBtn = styled.button<{ selected: boolean }>`
  text-transform: uppercase;
  border-radius: 2rem;
  padding: 1rem 1.4rem;
  border: none;
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.95;
  /* background-color: ${(p) => (p.selected ? 'white' : '#415362')}; */
  background-color: ${(p) => (p.selected ? 'rgb(251, 115, 36)' : 'white')};
  /* color: ${(p) => (p.selected ? 'black' : '#e6e8ea')}; */
  color: ${(p) => (p.selected ? 'white' : 'black')};

  @media screen and (max-width: 330px) {
    padding: 0.7rem 1.3rem;
    font-size: 1.2rem;
  }
`;

const OrangeSpan = styled.span`
  color: rgb(var(--primary));
`;
