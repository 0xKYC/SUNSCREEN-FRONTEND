import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface LinkProps {
  href: string;
}

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} passHref>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
}

export const Anchor = styled.a`
  display: inline;
  width: fit-content;
  text-decoration: none;

  background: linear-gradient(rgb(251, 115, 36), rgb(251, 115, 36));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;

  color: rgb(251, 115, 36);

  &:hover {
    background-size: 100% 100%;
    text-decoration: none;
    color: rgb(251, 251, 253);
  }

  &:active {
    color: rgb(251, 251, 253);
    background-size: 100% 100%;
  }
`;
