import NextImage from 'next/image';
import styled from 'styled-components';
import { media } from 'utils/media';


interface ProductInformationCardProps {
  gridType: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProductInformationCard({ gridType, title, description, imageUrl }: ProductInformationCardProps) {
  return (
    <Card>
       <Image 
            src={imageUrl} 
            alt={title} 
            // gridType={gridType}
        />        
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Card>
  );
}

export const Card = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  gap: 2rem;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-lg);
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  ${media('>tablet')} {
      grid-template-rows: auto auto;
      grid-template-columns: 25% 75%;
  }
`;

const Image = styled.img`
    width: 128px;
    height: 128px;
    ${media('>tablet')} {
        /* grid-column: ${({ cardKey }) => (cardKey === 0 ? '1' : '2')};     */
        /* grid-row: 2; */
    }
`

const Title = styled.div`
    font-weight: bold;
    font-size: 2rem;
    ${media('>tablet')} {
        grid-row: 1;
        grid-column: span 2;
    }
`;

const Description = styled.p`
  opacity: 0.6;
  min-height: 40%;
   ${media('>tablet')} {
    }
`;
