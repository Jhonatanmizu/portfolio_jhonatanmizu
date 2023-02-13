import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global-styles'
import { defaultTheme } from '@/styles/theme/theme'
import type { AppProps } from 'next/app'
import { Oswald, Open_Sans } from '@next/font/google'

const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

const opensans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component
        {...pageProps}
        className={[opensans.className, oswald.className]}
      />
    </ThemeProvider>
  )
}
