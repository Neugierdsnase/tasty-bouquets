import React, { StrictMode } from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyles'
import { NormalizedStyle } from '../styles/normalize'
import { theme } from '../styles/theme'

export default function Home({children}) {
  return (
    <StrictMode>
      <NormalizedStyle />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StrictMode>
  )
}
