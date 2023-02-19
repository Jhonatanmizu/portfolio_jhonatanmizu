import * as S from './styles'

interface Props {
  isOpen: boolean
  toggleOpen: () => void
}

const MenuIcon = ({ isOpen = true, toggleOpen }: Props) => {
  return (
    <S.Wrapper onClick={toggleOpen}>
      <S.Bar barTransform={isOpen ? 'transform' : 'none'} />
      <S.Bar barTransform={isOpen ? 'opacity' : 'none'} />
      <S.Bar barTransform={isOpen ? 'transformInverse' : 'none'} />
    </S.Wrapper>
  )
}

export default MenuIcon
