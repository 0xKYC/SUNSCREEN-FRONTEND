import Image from 'next/image';
import styled from 'styled-components';

import { Anchor } from './Link';

type Props = {
  title: string;
  description: string;
  index: number;
  imgUrl: string;
  order?: number;
  href: string;
};
export const BlogPost = ({ title, description, imgUrl, order, href, index }: Props) => {
  const isLongerDescription = index === 0;
  const numberToSlice = isLongerDescription ? 222 : 200;

  return (
    <Wrapper>
      <ImgWrapper order={order}>
        <a rel="noreferrer" target="_blank" href={href}>
          <Img src={imgUrl} alt={title} width={550} height={280} objectFit="cover" />
        </a>
      </ImgWrapper>

      <TextWrapper>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <P dangerouslySetInnerHTML={{ __html: `${description.slice(0, numberToSlice)}` }} />

        <LinkWrapper>
          <Anchor rel="noreferrer" target="_blank" href={href} aria-labelledby={title}>
            Read more
          </Anchor>
          <Image src="/external-link.svg" width={14} height={14} alt="" />
        </LinkWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const P = styled.p`
  margin: 0 1rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;
const Img = styled(Image)`
  border-radius: 0.6rem;
`;
const ImgWrapper = styled.div<{ order?: number }>`
  width: 50%;
  order: ${(props) => (props.order ? props.order : 0)};
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
const Wrapper = styled.div`
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
