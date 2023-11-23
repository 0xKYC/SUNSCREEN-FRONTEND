import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import RichText from './RichText';

interface PricingCardProps {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
}

export default function PricingCard({ title, description, benefits, isOutlined, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined}>
      {title === 'Sunscreen' && <Badge>-80%</Badge>}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>{children}</Price>
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul style={{ textAlign: 'left' }}>
              {benefits.map((singleBenefit, idx) => (
                <li key={idx}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>

      <CustomButton href="mailto:support@0xkyc.id">Contact Sales</CustomButton>
    </Wrapper>
  );
}

const Badge = styled.div`
  position: absolute;
  background-color: #ed1b24;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: white;
  right: -8%;
  top: -3%;
  width: 50px;
  transform: rotate(25deg);

  @media screen and (min-width: 375px) {
    right: -5%;
    top: -3%;
    width: 60px;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1080px) {
    right: 0;
    width: 65px;
  }
`;
const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  /* box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : 'var(--shadow-md)')}; */
  transform: ${(p) => (p.isOutlined ? 'scale(1.1)' : 'scale(1.0)')};
  text-align: center;
  border-radius: 1rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const PriceContainer = styled.div`
  margin: auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const CustomRichText = styled(RichText)`
  li {
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1080px) {
    width: 80%;
  }
`;
