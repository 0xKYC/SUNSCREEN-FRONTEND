import Image from 'next/image';
import NextLink from 'next/link';
import Link from 'next/link';
import { LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string; link?: boolean };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: 'https://app.0xkyc.id/privacy-policy', link: true },
      { title: 'Terms Of Service', href: 'https://app.0xkyc.id/terms-of-service', link: true },
      // { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },

  {
    title: 'Knowledge',
    items: [
      { title: 'Contact', href: 'mailto:support@0xkyc.id', link: true },
      { title: 'Documentation', href: 'https://docs.0xkyc.id/', link: true },
    ],
  },
];

const LogoWrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: rgb(var(--logoColor));
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-right: 3.5rem;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <Link href="/" passHref>
            <LogoWrapper>
              <Image src="/sunscreen-white.png" alt="logo" width={220} height={80} objectFit="contain" />
            </LogoWrapper>
          </Link>

          <ShareBar>
            <Flex>
              <ListItem title="Privacy Policy" href="https://app.0xkyc.id/privacy-policy" link={true} />
              <ListItem title="Terms Of Service" href="https://app.0xkyc.id/terms-of-service" link={true} />

              <ListItem title="Documentation" href="https://docs.0xkyc.id/" link={true} />
            </Flex>
            <a href="https://twitter.com/0xKYCinc" rel="noreferrer" target="_blank" aria-label="Twitter">
              <TwitterIcon size={44} round={true} />
            </a>

            <a href="https://github.com/0xKYC" rel="noreferrer" target="_blank" aria-label="Github">
              <Image src="/gh-new.png" alt="github" width={44} height={45} />
            </a>

            <a href="https://www.linkedin.com/company/0xkyc/" rel="noreferrer" target="_blank" aria-label="Linkedin">
              <LinkedinIcon size={45} round={true} />
            </a>
            <a href="https://www.crunchbase.com/organization/0xkyc" rel="noreferrer" target="_blank" aria-label="Crunchbase">
              <Image src="/crunchbase.png" alt="crunchbase" width={45} height={45} />
            </a>
            <a href="https://discord.com/invite/p58hBne2Ue" rel="noreferrer" target="_blank" aria-label="Discord">
              <Image src="/discord.png" alt="discord" width={45} height={45} />
            </a>
          </ShareBar>
          <Copyright>2023 0xKYC, Inc.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href, link }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        {link ? (
          <a href={href} rel="noreferrer" target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  /* padding-top: 1rem; */
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  background: black;
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  /* display: none; */
  display: flex;
  justify-content: center;

  ${media('<=tablet')} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  display: flex;
  margin-top: 1rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 1100px) {
    gap: 0.5rem;
  }

  @media screen and (max-width: 335px) {
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 4rem;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1100px) {
    gap: 0.8rem;
  }
`;
