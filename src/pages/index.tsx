import { Heading } from '@/components/Heading'
import Menu from '@/components/Menu'
import MenuIcon from '@/components/MenuIcon'
import * as S from '@/layout/containers'

const Home: React.FC = () => {
  return (
    <main>
      <S.Container>
        <Heading title="A Software Developer." />
        {/* <MenuIcon /> */}
        <Menu />
      </S.Container>
    </main>
  )
}
export default Home
