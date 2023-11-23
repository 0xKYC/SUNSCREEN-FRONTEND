import Image from 'next/image';
import NextLink from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { NavItems, SingleNavItem } from 'types';
import { media } from 'utils/media';
import Button from './Button';
import Container from './Container';
import Drawer from './Drawer';

import { HamburgerIcon } from './HamburgerIcon';

type NavbarProps = { items: NavItems };

export default function Navbar({ items }: NavbarProps) {
  const { toggle } = Drawer.useDrawer();
  const { asPath } = useRouter();

  return (
    <NavbarContainer>
      <Content>
        <NextLink href="/" passHref>
          <LogoWrapper>
            <Image src="/sunscreen-black.png" alt="logo" width={220} height={80} objectFit="contain" />
          </LogoWrapper>
        </NextLink>
        <NextLink href="/" passHref>
          <MobileLogoWrapper>
            <Image src="/sunscreen-small.png" alt="logo" width={60} height={60} />
          </MobileLogoWrapper>
        </NextLink>

        <NavItemList>
          {items.map((item) => {
            return (
              <NavLink redirect={item.redirect} outlined={asPath === item.href} key={item.title} href={item.href} title={item.title} />
            );
          })}
          <NavItem
            title="Add to discord"
            href="https://discord.com/api/oauth2/authorize?client_id=1169753823397556294&permissions=2415930416&scope=bot"
          />
        </NavItemList>
        {/* Hide color switcher
        <ColorSwitcherContainer>
          <ColorSwitcher />
        </ColorSwitcherContainer> */}
        <HamburgerMenuWrapper>
          <HamburgerIcon aria-label="Toggle menu" onClick={toggle} />
        </HamburgerMenuWrapper>
      </Content>
    </NavbarContainer>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  return (
    <NavItemWrapper outlined={outlined}>
      <Button href={href} target="_blank" rel="noreferrer">
        {title}
      </Button>
    </NavItemWrapper>
  );
}
export function NavLink({ href, title, outlined, redirect }: SingleNavItem) {
  return (
    <CustomNavItemWrapper outlined={outlined}>
      {redirect ? (
        <Link href={href}>{title}</Link>
      ) : (
        <a target="_blank" rel="noreferrer" href={href}>
          {title}
        </a>
      )}
    </CustomNavItemWrapper>
  );
}

const NavItemList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const HamburgerMenuWrapper = styled.div`
  ${media('>=desktop')} {
    display: none;
  }
`;

const LogoWrapper = styled.a`
  display: none;
  margin-right: auto;
  text-decoration: none;

  color: rgb(var(--logoColor));

  @media screen and (min-width: 460px) {
    display: flex;
  }
`;

const MobileLogoWrapper = styled(LogoWrapper)`
  display: flex;
  @media screen and (min-width: 460px) {
    display: none;
  }
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  a::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: rgb(var(--primary));
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }
  a:active::before {
    background-color: rgb(var(--primary));
  }
  a:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
  a::before {
    transform-origin: ${(p) => (p.outlined ? 'left top' : '')};
    transform: ${(p) => (p.outlined ? 'scale(1, 1)' : '')};
  }
  a {
    position: relative;
    transition: color 0.1s, background-color 0.1s, padding 0.2s ease-in;
    display: flex;

    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
const CustomNavItemWrapper = styled(NavItemWrapper)`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  a {
    color: black;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  /* visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  transform: ${(p) => (p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out; */
`;

const Content = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;
