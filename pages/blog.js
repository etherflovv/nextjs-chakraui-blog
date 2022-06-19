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


export default function Home() {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime modi voluptatibus repudiandae, tenetur eligendi autem eum provident, id, cumque voluptate nihil labore ullam numquam quo necessitatibus nulla eaque facere possimus?
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}