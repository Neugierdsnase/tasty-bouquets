import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.darkBg}
  }

  p {
    font-family: 'Dancing Script'
  }
`