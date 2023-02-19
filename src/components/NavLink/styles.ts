import styled from 'styled-components'

export const LinkContainer = styled.link`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.md};
  font-family: ${({ theme }) => theme.fonts[1]};
`
