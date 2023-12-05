import ProductInformationCard from 'components/ProductInformationCard';
import styled from 'styled-components';
import { media } from 'utils/media';


const ProductData = [
    {
        imageUrl: "/grid-icons/security.svg",
        title: "How Sunscreen Works",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        imageUrl: "/grid-icons/security.svg",
        title: "Roles Explained",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

export default function ProductInformation(){

    return(
        <Container>
            <Title>How Sunscreen Works</Title>
                <ProductInformationCard 
                imageUrl = {ProductData[0].imageUrl} 
                title = {ProductData[0].title}
                description = {ProductData[0].description}
                />
                <ProductInformationCard 
                imageUrl = {ProductData[1].imageUrl} 
                title = {ProductData[1].title}
                description = {ProductData[1].description}
                />
        </Container>
    )
} 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 120em;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    scroll-margin-top: 100px;
    
    > *:last-child{
        ${media('>tablet')} {
            grid-template-rows: auto auto;
            grid-template-columns: 75% 25%;
        }
    }

    > *:last-child > img{
        ${media('>tablet')} {
            grid-column: 2;
            grid-row: 2;
        }
    }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
