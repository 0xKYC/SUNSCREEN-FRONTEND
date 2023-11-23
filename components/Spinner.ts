import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  margin-right: 0.5rem;
  border: 0.18em solid orange;
  border-top: 0.18em solid white;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  animation: ${spin} 0.9s linear infinite;
`;
