import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: ${({ theme }) => theme.typography.sm};
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 700;
`

export { Heading }
