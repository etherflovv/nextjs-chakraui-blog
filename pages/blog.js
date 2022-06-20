import Head from 'next/head'
import Link from 'next/link';
// import Image from 'next/image'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'
import Container from "../components/Container"
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Blog</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >

          <Heading mb={2}>
            Blog
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            <section>
              <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/blog/${id}`}>
                    <a>
                    {title}
                    </a>
                  </Link>
                  <br />
                  {id}
                  <br />
                  <Date dateString={date} />
                </li>
                ))}
              </ul>
            </section>
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}