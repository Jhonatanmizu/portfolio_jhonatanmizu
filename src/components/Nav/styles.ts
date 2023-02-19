import styled, { keyframes } from 'styled-components'

interface LayoutProps {
  isActive: boolean
}

const expandAnimation = keyframes`
    0%{height:0;}
    100%{height:50vh; opacity:.6;}
`

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`
export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.padding.sm};
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const Menu = styled.ul<LayoutProps>`
  position: absolute;
  top: 7rem;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacers.sm};
  padding: ${({ theme }) => theme.padding.sm};
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 0 0 0.5rem 0.5rem;
  width: 100%;
  height: 40vh;
  overflow-y: hidden;
  animation-name: ${expandAnimation};
  animation-duration: 0.5s;
`
export const MenuItem = styled.li`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => theme.typography.md};
  font-family: ${({ theme }) => theme.fonts[1]};
  border: solid 1px ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  width: 100%;
  text-align: center;
`
