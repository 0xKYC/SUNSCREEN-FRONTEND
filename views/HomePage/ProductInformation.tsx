import styled from 'styled-components';
import ProductInformationCard from 'components/ProductInformationCard';
import { media } from 'utils/media';


const ProductData = [
    {
        imageUrl: "/grid-icons/security.svg",
        title: "Understanding Our System: Facial Biometrics",
        description: "Our cutting-edge system utilizes facial biometrics to ensure authentic and unique user identification. This advanced technology analyzes facial features to verify individuality, ensuring each account is distinct and genuine."
    },
    {
        imageUrl: "/grid-icons/authentication.svg",
        title: "Unique vs. Verified Roles: What's the Difference?",
        description: " Role: Assigned when you have only one account in a server, signifying your unique presence.",
        secondDescription: " Role: Granted when our system confirms you're a real person. Typically, you\'ll have both Unique and Verified roles, indicating a sole, verified account.",
        role1: "Unique ❤️",
        role2: "Verified ✅"

    },
    {
        imageUrl: "/grid-icons/version_control.svg",
        title: "Integration with Zealy and Galaxe: Enhancing Bot Functionality",
        description: "Seamlessly integrate with bots like Zealy or Galaxe. Use our 'required role' feature to allow only unique and verified users to access specific rewards. This integration empowers you to create a more secure and exclusive community experience."
    }
]

export default function ProductInformation(){

    return(
        <Container>
            <Title>How Sunscreen Works</Title>
            {
                ProductData.map((data, index) => (
                    <ProductInformationCard 
                    key={index}
                    imageUrl = {data.imageUrl} 
                    title = {data.title}
                    description = {data.description}
                    secondDescription = {data.secondDescription}
                    role1 = {data.role1}
                    role2 = {data.role2}
                    /> 
                ))
            }
        </Container>
    )
} 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    max-width: 120em;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 2rem;
    scroll-margin-top: 100px;
    
    > *:nth-child(odd){
        ${media('>tablet')} {
            grid-template-areas:
            "title image"
            "description image"
            "secondDescription image";
            gap: 0;
            grid-template-rows: auto auto auto;
            grid-template-columns: 1fr 1fr;
            row-gap: 1.2rem;
        }
    }

    > *:nth-child(odd) > img{
        ${media('>tablet')} {
            grid-area: image;
            justify-self: center;
            align-self: center;
            margin: auto;
        }
    }
    > *:nth-child(odd) > div{
        ${media('>tablet')} {
            grid-area: "title";
            place-self: center start;
        }
    }
    > *:nth-child(odd) > p{
        ${media('>tablet')} {
            text-align: left;
            grid-area: description;
        }
    }
    > *:nth-child(odd) > p:nth-of-type(2){
        ${media('>tablet')} {
            text-align: left;
            grid-area: secondDescription;
        }
    }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 5.2rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
