import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : 'rgb(var(--primary))')};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: ${(p) => (p.transparent ? 'rgb(var(--text))' : 'rgb(var(--textSecondary))')};
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: ${(p) => (p.transparent ? 'none' : '2px solid rgb(var(--primary))')};
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  span {
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

export default Button;

export const SmallBtn = styled(Button)`
  padding: 1rem 1.4rem;
`;
export const DisabledBtn = styled('button')`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: darkgray;
  /* background: rgb(var(--primary)); */
  padding: 1.1rem 1.6rem;
  font-size: 1.2rem;
  color: rgb(var(--textSecondary));
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  /* border: 2px solid rgb(var(--primary)); */
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: not-allowed;
  span {
    margin-left: 2rem;
  }
`;
