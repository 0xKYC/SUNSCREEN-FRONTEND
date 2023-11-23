import Image from 'next/image';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

type Props = {
  title?: string;
  subtitle?: string;
  imgUrl: string;
  order?: number;
  href?: string;
};

const Number = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 777 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.p style={{ display: 'inline' }}>{number.to((n) => n.toFixed(0))}</animated.p>;
};
export const Banner = ({ title, subtitle, imgUrl, order, href }: Props) => {
  return (
    <>
      {title && (
        <TitleWrapper>
          <Title>
            We verified over <Number n={1000} /> unique individuals!
          </Title>
        </TitleWrapper>
      )}
      {subtitle && (
        <SubtitleWrapper>
          <Title>
            <Url href={href} target="_blank">
              {subtitle}
            </Url>
          </Title>
        </SubtitleWrapper>
      )}
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
  padding: 0.5rem 3rem;
  align-items: center;
  justify-content: center;
  background: #232960;
  color: white;
  width: 100%;
  border: 1px solid #232960;
`;

const SubtitleWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  width: 100%;
  border: 1px solid white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
`;

const Title = styled.h4`
  font-size: 1.8rem;
`;

const Url = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
