// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  borderRadius: ['.5rem', '1rem'],
  padding: ['.8rem', '1.6rem', '2.4rem', '3.2rem'],
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#1E1926',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#998AB5',
      contrastText: '#ffffff'
    }
  },
  spacers: {
    xs: '.8rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '4rem'
  },
  typography: {
    xs: '1.6rem',
    sm: '2.2rem',
    md: '2.8rem',
    lg: '3.4rem',
    xl: '3.8rem'
  },
  fonts: ['Oswald', 'Open sans']
}
