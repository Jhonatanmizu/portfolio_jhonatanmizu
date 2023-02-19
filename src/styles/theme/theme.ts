// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  borderRadius: ['.5rem', '1rem'],
  padding: {
    xs: '.8rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '6.4rem'
  },
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#212538',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#82aaff',
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
