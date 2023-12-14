import styled from 'styled-components';
import ProductInformationCard from 'components/ProductInformationCard';
import { media } from 'utils/media';
import * as Drawer from '@accessible/drawer';
import { useState } from 'react';

const ProductImage = [
    {
        tag: "system",
        imageUrl: "/grid-icons/security.svg",
    },
    {
        tag: "system",
        imageUrl: "/grid-icons/authentication.svg",
    },
    {
        tag: "system",
        imageUrl: "/grid-icons/version_control.svg",
    }
];

const ProductData = [
    {
        tag: "system",
        title: "Our System",
        subheader:"",
        descriptionArray: [
            "Facial biometrics to ensure authentic and unique user identification.",
            "Phazing out duplicate user accounts",
            "Trusted..."
        ]
    },
    {
        tag: "verification",
        title: "Verification",
        subheader:"",
        descriptionArray: [
            " role assigned when a user only has one account in the server.",
            " role granted when our server confirms a user as a real person.",
            "Secure and user friendly way to indicate unique and verified accounts."
        ],
        uniqueRole: "Unique ❤️",
        verifiedRole: "Verified ✅"
    },
    {
        tag: "integration",
        title: "Integration",
        subheader:"",
        descriptionArray: [
            "Seamlessly integrate with bots like Zealy or Galaxe.",
            "Access specific rewards with our 'Required Role' feature.",
            "Create a more secure and exclusive community experience"
        ]
    }
]

export default function ProductInformation() {
    const [currentImage, setCurrentImage] = useState(ProductImage[0].imageUrl);

    const handleDrawerClick = (tag) => {
        const newImage = ProductImage.find((image) => image.tag === tag);
        if (newImage) {
            setCurrentImage(newImage.imageUrl);
        }
    };

    return (
        <Container>
            <Title>How Sunscreen Works</Title>
            <ContentContainer>
                <img src={currentImage} alt="Product" />

                <DrawerContainer>
                    {ProductData.map((data, index) => (
                        <Drawer.Drawer key={index}>
                            <Drawer.Trigger>
                                <button onClick={() => handleDrawerClick(data.tag)}>
                                    {data.title}
                                </button>
                            </Drawer.Trigger>

                            <Drawer.Target>
                                <ProductInformationCard
                                    subheader={data.subheader}
                                    descriptionArray={data.descriptionArray}
                                    uniqueRole={data.uniqueRole}
                                    verifiedRole={data.verifiedRole}
                                />
                            </Drawer.Target>
                        </Drawer.Drawer>
                    ))}
                </DrawerContainer>
            </ContentContainer>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

const DrawerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const Title = styled.p`
  font-weight: bold;
  font-size: 5.2rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
