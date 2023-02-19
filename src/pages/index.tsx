import { Heading } from '@/components/Heading'
import Nav from '@/components/Nav'
import * as S from '@/layout/containers'
import { fetchPosts } from '@/services/posts'
import { GetStaticProps } from 'next'

interface HomeProps {
  posts: object[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <main>
      <Nav />
      <S.Container id="about">
        <Heading title="A Software Developer." />
      </S.Container>
      <S.Container id="skills">
        <Heading title="A Software Developer 2." />
      </S.Container>
      <S.Container id="projects">
        <Heading title="A Software Developer 3." />
      </S.Container>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  return {
    props: {
      posts
    }
  }
}
export default Home
