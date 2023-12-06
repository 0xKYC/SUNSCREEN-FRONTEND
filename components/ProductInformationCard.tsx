import styled from 'styled-components';
import { media } from 'utils/media';


interface ProductInformationCardProps {
  title: string;
  description: string;
  secondDescription?: string;
  role1?: string;
  role2?: string;
  imageUrl: string;
}

export default function ProductInformationCard({ title, description, secondDescription, role1, role2, imageUrl }: ProductInformationCardProps) {
  return (
    <Card>
        {!secondDescription ?
        <>
          <Image 
          src={imageUrl} 
          alt={title} 
          />        
          <Title>{title}</Title>  
          <Description><span>{description}</span></Description>
          </>
          :
          <>
          <Image 
            src={imageUrl} 
            alt={title} 
          />        
          <Title>{title}</Title>
          <Description>
            <UniqueTag>{role1}</UniqueTag>
            <span>{description}</span>
          </Description> 
          <Description>
            <VerifiedTag>
              {role2}
            </VerifiedTag>
            <span>{secondDescription}</span>
          </Description>
          </>
        }
    </Card>
  );
}

export const Card = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 2rem;
  padding: 3rem 4rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-lg);
  width: 100%;
  border-radius: 1rem;
  color: rgb(var(--text));
  font-size: 1.8rem;
  ${media('>tablet')} {
    grid-template-areas:
    "image title"
    "image description";
    gap: 0;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.2rem;
    column-gap: 2rem;
  }
`;

const Image = styled.img`
    width: 128px;
    height: 128px;
    ${media('>tablet')} {
      width: 220px;
      height: 220px;
      grid-area: image;
      justify-self: center;
      align-self: center;
      margin: auto;
  }
`

const Title = styled.div`
    font-weight: bold;
    font-size: 2.3rem;
    margin-bottom: .2rem;
    ${media('>tablet')} {
        grid-area: "title";
        place-self: center start;
        text-align: left;
    }
`;

const Description = styled.p`
  min-height: 40%;
  line-height: 1.6;
  ${media('>tablet')} {
    text-align: left;
    grid-area: description;
  }
  > :last-child{
    opacity: 0.6;
  }
`;

const UniqueTag = styled.span`
  color: rgb(var(--text));
  font-size: 1.8rem;
  background: rgb(45, 55, 72, 0.5);
  border-radius: .5rem;
  max-width: max-content;
  padding: .3rem;
  margin-right: 2px;
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
  // box-shadow: 0px 0px 4px #FB7324;
  box-shadow: 0px 0px 4px rgba(0, 255, 0, 0.5);
`;