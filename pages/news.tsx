import Head from 'next/head';
import styled from 'styled-components';
import { News } from 'components/News';
import SectionTitle from 'components/SectionTitle';
import { NEWS } from 'views/HomePage/News';

const Container = styled.section`
  position: relative;
  max-width: 115em;
  width: 100%;
  margin: 3rem auto;
  padding: 0 2rem;
  scroll-margin-top: 100px;
  margin-bottom: 5rem;
`;

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News - 0xKYC (Sunscreen) ☀️ </title>
      </Head>
      <Container>
        <SectionTitle>All news</SectionTitle>

        {NEWS.map((news, index) => {
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
      </Container>
    </>
  );
}
