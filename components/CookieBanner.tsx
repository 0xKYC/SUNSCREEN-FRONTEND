import { useRef } from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';

export const CookieBanner = () => {
  const cookieConsentRef = useRef<any>();

  const declineCookies = () => {
    cookieConsentRef?.current?.decline();
  };
  return (
    <CookieConsent
      ref={cookieConsentRef}
      buttonText="OKAY"
      style={{
        position: 'fixed',
        width: '96%',
        margin: 'auto',
        bottom: '20px',
        borderRadius: '0.5rem',
        fontSize: '1.5rem',
        left: '50%',
        marginBottom: '1rem',
        transform: 'translateX(-50%)',
        padding: '.6rem',
      }}
      buttonStyle={{
        background: 'rgb(var(--primary)',
        color: 'white',
        fontSize: '1.5rem',
        borderRadius: '0.4rem',
        fontFamily: 'var(--font)',
        fontWeight: 'bold',
        marginRight: '3.5rem',
      }}
    >
      <StyledBtn onClick={declineCookies} aria-label="Close">
        <svg
          height="18px"
          version="1.1"
          viewBox="0 0 512 512"
          width="18px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
            fill="#b6b6b6"
          />
        </svg>
      </StyledBtn>
      <p style={{ marginRight: '.5rem' }}>
        This website uses cookies to improve your experience. Please review our
        <StyledLink href="https://app.0xkyc.id/privacy-policy" target="_blank" rel="noreferrer">
          {' '}
          Cookie Policy (as a part of our Privacy Policy){' '}
        </StyledLink>{' '}
        for more information.
      </p>
    </CookieConsent>
  );
};

const StyledLink = styled('a')`
  color: #62b5e6;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    color: #79bde4;
  }
`;

const StyledBtn = styled('button')`
  position: absolute;
  top: 7%;
  right: 0;
  background: inherit;
  border: none;
  cursor: pointer;
`;
