import styled from 'styled-components';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Link, { Anchor } from 'components/Link';

const kycData = [
  {
    title: 'What is Sunscreen?',
    description: `Sunscreen is a tool developed by 0xKYC that utilizes facial recognition technology to verify the uniqueness of each user. It's like a digital facial-biometrics passport (except that your identity isn't shared) that is unique to each person and helps prevent one person from creating multiple accounts. The best part? It is available permissionlessly onchain or via API and respects your privacy.`,
  },
  {
    title: 'What is 0xKYC?',
    description: `0xKYC is our flagship tool, which acts on data from your ID and facial biometrics. Not only does it confirm that you're a unique individual (like Sunscreen does), but it also checks if you're over 18 years old and if you're on any sanctioned lists as well as if your wallet isn't. It allows platforms to ensure they're not letting in underage or sanctioned individuals through, while keeping your personal data private.`,
  },
  {
    title: 'How do Sunscreen and 0xKYC benefit platforms like Insert Stonks or Hinkal Protocol?',
    description: `For platforms like Insert Stonks, which might worry about users creating duplicate accounts, Sunscreen can help ensure each user is unique. Meanwhile, for platforms like Hinkal Protocol, 0xKYC helps verify users' sanction status, contributing to a safer, more regulated environment.`,
  },
  {
    title: 'How do I use these services?',
    description: ``,
    custom: true,
  },
  {
    title: 'What does it cost to use these services?',
    description: `The pricing details for Sunscreen and 0xKYC are listed on our site, see our`,
    pricing: true,
  },
];

//

export default function FaqSection() {
  return (
    <Container id="faq">
      <Wrapper>
        <SectionTitle>Frequently asked question</SectionTitle>
        {kycData.map((item, i) => (
          <Accordion key={i} title={item.title}>
            {item.custom && (
              <p>
                Simply click &quot;Launch App&quot; in the top right corner and connect your wallet or{' '}
                <Anchor rel="noreferrer" target="_blank" href="https://discord.com/invite/p58hBne2Ue">
                  Join Our Discord
                </Anchor>
                . Follow the easy instructions to complete the verification process. Alternatively, for Insert Stonks go to their site to
                get verified or any other of our partners. Our system works onchain as well as via API (for custodial wallets, for example)
                and as a Discord Bot.
              </p>
            )}
            {item.description}{' '}
            {item.pricing && (
              <>
                {' '}
                <Link href="/pricing">Pricing section</Link>.
              </>
            )}
            {i === 0 && (
              <>
                {' '}
                <Anchor
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
                >
                  Add Our Discord Bot
                </Anchor>{' '}
                and{' '}
                <Anchor rel="noreferrer" target="_blank" href="https://discord.com/invite/p58hBne2Ue">
                  Join Our Discord Server
                </Anchor>
                .
              </>
            )}
          </Accordion>
        ))}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
