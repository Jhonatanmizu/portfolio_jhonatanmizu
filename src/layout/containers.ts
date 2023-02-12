import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.padding[2]};
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export { Container }
