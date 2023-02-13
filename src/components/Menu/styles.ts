import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.secondary.main};
    padding: ${theme.padding.md};
    color: ${theme.palette.secondary.contrastText};
    border: ${theme.palette.primary.main} 0.5rem solid;
    border-radius: ${theme.borderRadius[1]};
  `}
`

export const MenuWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    background-color: ${theme.palette.primary.main};
  `}
`
