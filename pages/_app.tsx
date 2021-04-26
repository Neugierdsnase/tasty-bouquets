import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React, { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppSideBar } from '../components/layout/AppSideBar'
import { GlobalStyle } from '../styles/globalStyles'
import { NormalizedStyle } from '../styles/normalize'
import { theme } from '../styles/theme'

export default function App({Component, pageProps}: AppProps) {
  return (
    <StrictMode>
      <NormalizedStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Pacifico&display=swap" rel="stylesheet" /> 
        </Head>
        <Component {...pageProps} />
        <AppSideBar />
      </ThemeProvider>
    </StrictMode>
  )
}
