import Image from 'next/image';
import styled from 'styled-components';
import { Anchor } from './Link';

type Props = {
  href: string;
  ariaLabel: string;
  text: string;
};
export const ExternalLink = ({ href, ariaLabel, text }: Props) => {
  return (
    <LinkWrapper>
      <Anchor rel="noreferrer" target="_blank" href={href} aria-labelledby={ariaLabel}>
        {text}
      </Anchor>
      <Image src="/external-link.svg" width={14} height={14} alt="" />
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
