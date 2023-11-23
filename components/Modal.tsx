import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';

import CloseIcon from './CloseIcon';
import Container from './Container';

export interface NewsletterModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: NewsletterModalProps) {
  useEscClose({ onClose });

  return (
    <Overlay>
      <Container>
        <Card>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>

          <Box>
            <Title>App is already live for investors and partners!</Title>
            <Text>
              Contact us at <Link href="mailto:support@0xkyc.id">support@0xkyc.id</Link> to get access
            </Text>
          </Box>
        </Card>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
  align-items: center;
  z-index: var(--z-modal);
  color: rgb(var(--textSecondary));
`;

const Box = styled.div`
  text-align: center;
`;
const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 4rem;
  /* background: rgb(var(--modalBackground)); */
  background: #f1f2f3;
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  @media screen and (min-width: 600px) {
    padding: 5rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 5rem;
    padding-bottom: 3rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;
const Text = styled.p`
  font-size: 1.8rem;
  margin: 1rem;
`;

const Link = styled.a`
  color: rgb(var(--text));
`;
