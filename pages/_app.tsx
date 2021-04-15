import { AppProps } from "next/dist/next-server/lib/router/router"
import React, { StrictMode } from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyles'
import { NormalizedStyle } from '../styles/normalize'
import { theme } from '../styles/theme'

export default function App({Component, pageProps}: AppProps) {
  return (
    <StrictMode>
      <NormalizedStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  )
}
