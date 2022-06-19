import Head from 'next/head'
// import Image from 'next/image'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'
import Container from "../components/Container"

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
          {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              </li>
              ))}
              </ul>
            </section> */}
          <Heading mb={2}>
            Blog
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            <section>
              <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
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