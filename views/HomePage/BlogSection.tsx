import Image from 'next/image';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { BlogPost } from 'components/BlogPost';
import Container from 'components/Container';
import { Anchor } from 'components/Link';
import SectionTitle from 'components/SectionTitle';

type IBlogPost = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {};
  categories: string[];
};

export default function BlogSection() {
  const [blogposts, setBlogposts] = useState<IBlogPost[]>([]);

  useEffect(() => {
    async function startFetching() {
      const result = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F0xkyc&api_key=4szkp25tqcvpjpjvpo9ty1i0w3jcvxhyjc1oogum&count=3',
      )
        .then((res) => res.json())
        .then((data) => {
          // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0

          const res: IBlogPost[] = data.items; //This is an array with the content. No feed, no info about author etc..

          const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !

          return posts;
        });
      if (!ignore) {
        setBlogposts(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Container id="blog">
      <SectionTitle style={{ marginTop: '8rem', marginBottom: '8rem' }}>Blog</SectionTitle>

      {blogposts?.slice(0, 3).map((news, idx) => {
        return (
          <BlogPost description={news.content} imgUrl={news.thumbnail} index={idx} title={news.title} key={news.guid} href={news.link} />
        );
      })}
      <LinkWrapper>
        <Anchor rel="noreferrer" target="_blank" href="https://medium.com/0xkyc">
          Show more
        </Anchor>
        <Image src="/external-link.svg" width={14} height={14} alt="" />
      </LinkWrapper>
    </Container>
  );
}

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  margin-top: 4rem;
`;
