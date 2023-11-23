import styled from 'styled-components';

const Input = styled.input`
  background: rgb(45, 55, 72);
  /* background: rgb(var(--inputBackground)); */
  border-radius: 0.6rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);
  color: rgb(237, 237, 238);
  border: none;
  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
    border: 1px solid black;
  }
`;

export default Input;
