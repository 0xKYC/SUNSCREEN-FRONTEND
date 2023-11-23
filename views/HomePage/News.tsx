import NextLink from 'next/link';
import Container from 'components/Container';
import { Anchor } from 'components/Link';
import { News } from 'components/News';
import SectionTitle from 'components/SectionTitle';
export const NEWS = [
  {
    title: '0xKYC x Mava Integration',
    description: 'Our Discord Bot strengthens its user support capabilities through integration with Mava.',
    imgUrl: '/mava.jpg',
    href: 'https://www.mava.app/blog/community-spotlight-0xkyc',
    ariaLabel: 'Mava integration',
  },
  {
    title: 'Onfido and 0xKYC Partnership',
    description: '0xKYC partners with Onfido to provide fraud protection protocols on blockchain and in the Metaverse.',
    imgUrl: '/onfido-0xkyc.webp',
    href: 'https://onfido.com/press-release/0xkyc-partners-with-onfido-to-provide-fraud-protection-protocols-on-blockchain-and-in-the-metaverse/',
    ariaLabel: 'Onfido and 0xKYC Partnership',
  },
  {
    title: '0xKYC and Insert Stonks Collaboration',
    description:
      'Our integration utilizes blockchain-based identity verification and token-gating solutions to combat fraud, ensuring a safer gaming environment.',
    imgUrl: '/posts/ov-banner.jpeg',

    href: 'https://outlierventures.io/article/securing-the-open-metaverse-0xkyc-and-insert-stonks-collaborate-to-tackle-fraud/',
    ariaLabel: '0xKYC and Insert Stonks Collaboration',
  },
  {
    title: 'Winning the DAO Global Hackathon',
    description:
      'Leveraging our proprietary Proof of Uniqueness technology to democratize DAO governance. Users can secure a unique identifier and a single verified vote with a simple selfie, eliminating fake accounts and duplicate votes.',
    imgUrl: '/posts/dao-global.png',
    href: 'https://blog.aragon.org/dao-global-hackathon-bounty-winners/',

    ariaLabel: 'Winning the DAO Global Hackathon',
  },

  {
    title: 'Our Beginnings',
    description:
      'ETHWarsaw was a pivotal event for us, where our team brainstormed ideas and created a zero-knowledge proof solution for storing AML data onchain.',
    imgUrl: '/posts/ethwarsaw.jpg',
    href: 'https://medium.com/ethwarsaw/0xkyc-the-ethwarsaw-success-story-5c3663a33996',
    ariaLabel: 'Our Beginnings',
  },
];
export default function NewsSection() {
  return (
    <Container id="news" style={{ textAlign: 'center' }}>
      <SectionTitle style={{ margin: '8rem 0' }}>Latest news</SectionTitle>
      <div style={{ marginBottom: '5rem' }}>
        {NEWS.slice(0, 3).map((news, index) => {
          return (
            <News
              ariaLabel={news.ariaLabel}
              description={news.description}
              imgUrl={news.imgUrl}
              title={news.title}
              key={news.title}
              index={index}
              href={news.href}
            />
          );
        })}
      </div>
      <NextLink href="/news" passHref>
        <Anchor style={{ fontSize: '2rem' }}>Show more</Anchor>
      </NextLink>
    </Container>
  );
}
