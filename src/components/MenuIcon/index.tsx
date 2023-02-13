import * as S from './styles'

interface Props {
  isOpen: boolean
}

const MenuIcon = ({ isOpen = true }: Props) => {
  return (
    <S.Wrapper>
      <S.Bar barTransform={isOpen ? 'transform' : 'none'} />
      <S.Bar barTransform={isOpen ? 'opacity' : 'none'} />
      <S.Bar barTransform={isOpen ? 'transformInverse' : 'none'} />
    </S.Wrapper>
  )
}

export default MenuIcon
