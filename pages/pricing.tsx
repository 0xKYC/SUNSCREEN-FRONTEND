import Head from 'next/head';
import Container from 'components/Container';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - 0xKYC ☀️ </title>
      </Head>
      <Container>
        <PricingTablesSection />
      </Container>
    </>
  );
}
