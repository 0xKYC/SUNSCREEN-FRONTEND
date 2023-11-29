import styled from 'styled-components';
import { Anchor } from 'components/Link';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Pricing</SectionTitle>
      <br />
      <Info>Our Discord Bot is currently free,</Info>

      <Info>
        for full pricing visit{' '}
        <Anchor target="_blank" rel="noreferrer" href="https://0xkyc.id/pricing">
          0xkyc.id/pricing
        </Anchor>
        .
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-height: 50vh;
  @media screen and (max-width: 1024px) {
    margin-top: 3.5rem;
  }
`;

const Info = styled.p`
  font-size: 1.8rem;
  margin: 2rem 0;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin: 2rem;
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
