import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  font-size: ${({ theme }) => theme.typography.lg};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: 700;
`

export { Heading }
