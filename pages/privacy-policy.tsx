import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
            At 0xKYC, Inc., we take the privacy of our website users seriously. This policy outlines the information we collect, how it is
            used, and the steps we take to protect it.
            <Text>Information Collection: </Text>
            We collect personal information such as name, email address, and phone number when you voluntarily provide it to us through
            forms on our website.
            <Text>Use of Information: </Text>
            <p>
              We use the information collected to contact you regarding updates about our services and to respond to any inquiries you may
              have.
            </p>
            <Text>Sharing of Information: </Text>
            <p>We do not share or sell any personal information to any third parties. </p>
            <Text>Security Measures: </Text>
            <p>
              We take appropriate measures to protect the personal information submitted to us, both during transmission and once we receive
              it.
            </p>
            <Paragraph>
              If you have any questions or concerns about our Privacy Policy or the information we collect, please contact us.
            </Paragraph>
            <Paragraph>This Privacy Policy is effective as of the date of posting and may be updated from time to time.</Paragraph>
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
const Text = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;
