import styled from 'styled-components';
import { media } from 'utils/media';


interface ProductInformationCardProps {
  subheader: string,
  descriptionArray: string[];
  uniqueRole?: string;
  verifiedRole?: string;
}

export default function ProductInformationCard({subheader, descriptionArray, uniqueRole, verifiedRole}: ProductInformationCardProps) {
  return (
    <Card>
    </Card>
  );
}

export const Card = styled.div`
`;


const UniqueTag = styled.span`
  color: rgb(var(--text));
  font-size: 1.8rem;
  background: rgb(45, 55, 72, 0.5);
  border-radius: .5rem;
  max-width: max-content;
  padding: .3rem;
  margin-right: 2px;

  // Sunscreen orange undershadow
  // box-shadow: 0px 0px 3px #FB7324;

  box-shadow: 0px 0px 7px rgba(255, 0, 0, 0.5);
`;
const VerifiedTag = styled.span`
  color: rgb(var(--text));
  font-size: 1.8rem;
  background: rgb(45, 55, 72, 0.5);
  border-radius: 0.5rem;
  max-width: max-content;
  padding: 0.3rem;
  margin-right: 2px;

  // Sunscreen orange undershadow
  // box-shadow: 0px 0px 4px #FB7324;

  box-shadow: 0px 0px 4px rgba(0, 255, 0, 0.5);
`;

