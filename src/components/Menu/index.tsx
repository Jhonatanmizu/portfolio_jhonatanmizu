import * as S from './styles'

interface Props {
  links?: string[]
}

const Menu = ({ links = [] }: Props) => {
  return (
    <S.Wrapper>
      <S.MenuWrapper></S.MenuWrapper>
    </S.Wrapper>
  )
}

export default Menu
