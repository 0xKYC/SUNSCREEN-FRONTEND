import styled from 'styled-components';

export const AutofitGrid = styled.div`
  background-color: rgb(251, 251, 253);

  -webkit-box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);
  -moz-box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);
  box-shadow: 2px -1px 25px 1px rgba(251, 115, 36, 1);
  /* border: 2px solid rgb(115, 115, 115); */
  border-radius: 1rem;
  --autofit-grid-item-size: 30rem;

  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 6rem auto;
  padding: 3rem;

  display: none;
  @media screen and (min-width: 1080px) {
    display: grid;
  }
`;

export const AutofitGridMobile = styled(AutofitGrid)`
  display: block;
  width: 440px;
  max-width: 100%;
  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
