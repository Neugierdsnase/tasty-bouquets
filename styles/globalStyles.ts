import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  body, div, section, main {
    background-color: ${theme.colors.darkBg}
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pacifico', cursive;
  }

  p, span {
    font-family: 'Noto Sans', sans-serif;
  }

  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

  g#layer1 {
    transform-origin: center center;
    color: ${theme.colors.primary};
    animation: rotation 150s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    max-width: '100%'
  }
`