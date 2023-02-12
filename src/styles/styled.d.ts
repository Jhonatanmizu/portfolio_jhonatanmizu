// styled.d.ts
import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string[]
    padding: string[]
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
    spacers: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    typography: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    fonts: string[]
  }
}
