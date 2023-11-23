import Image from 'next/image';
import styled from 'styled-components';

import { ExternalLink } from './ExternalLink';

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  href: string;
  ariaLabel: string;
  index: number;
};
export const News = ({ title, description, imgUrl, href, ariaLabel, index }: Props) => {
  const isOddIndex = index % 2 === 1;

  return (
    <Wrapper>
      <ImgWrapper isOddIndex={isOddIndex}>
        <a rel="noreferrer" target="_blank" href={href}>
          <Img src={imgUrl} alt={title} width={550} height={280} objectFit="cover" />
        </a>
      </ImgWrapper>

      <TextWrapper>
        <Title>{title}</Title>
        <P>{description}</P>

        <ExternalLink href={href} ariaLabel={ariaLabel} text="Read more" />
      </TextWrapper>
    </Wrapper>
  );
};

const P = styled.p`
  margin: 0 1rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;
const Img = styled(Image)`
  border-radius: 0.6rem;
`;
const ImgWrapper = styled.div<{ isOddIndex: boolean }>`
  width: 50%;
  order: ${(props) => (props.isOddIndex ? 2 : 0)};
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const TextWrapper = styled.div`
  margin: 1rem;
  width: 50%;
  margin: 2rem;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
const Wrapper = styled.article`
  display: flex;
  padding: 2.5rem;
  border: 1px solid rgb(251, 115, 36);
  box-shadow: var(--shadow-lg);
  background: rgb(var(--background));
  margin: 2rem;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
