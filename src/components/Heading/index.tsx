import * as S from './styles'

interface Props {
  title: string
}

export const Heading = ({ title }: Props) => {
  return <S.Heading>{title}</S.Heading>
}
