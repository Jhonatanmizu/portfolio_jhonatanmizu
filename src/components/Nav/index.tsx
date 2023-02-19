import { useState } from 'react'
import MenuIcon from '../MenuIcon'
import NavLink from '../NavLink/indext'
import * as S from './styles'
const links = [
  {
    title: 'Sobre',
    to: '#about'
  },
  {
    title: 'Skills',
    to: '#skills'
  },
  {
    title: 'Projetos',
    to: '#projects'
  },
  {
    title: 'Contato',
    to: '#contact'
  },
  {
    title: 'Blog',
    to: '/blog'
  }
]
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <S.NavContainer>
        <MenuIcon isOpen={isOpen} toggleOpen={toggleMenu} />
        {isOpen && (
          <S.Menu isActive={isOpen}>
            {links.map(({ to, title }) => (
              <NavLink path={to} key={title} handleClick={toggleMenu}>
                {title}
              </NavLink>
            ))}
          </S.Menu>
        )}
      </S.NavContainer>
      <S.Container />
    </>
  )
}

export default Nav
