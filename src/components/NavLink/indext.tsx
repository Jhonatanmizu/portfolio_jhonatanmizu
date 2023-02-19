import Link from 'next/link'

interface NavLinkProps {
  children: string
  path: string
  handleClick?: () => void
}

const NavLink = ({ children, path, handleClick }: NavLinkProps) => {
  return (
    <Link href={path} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default NavLink
