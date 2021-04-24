// these are the Bootstrap breakpoints (first one omitted)
const breakpoints = ['768px', '992px', '1200px']

const colors = {
  "Midnight Green Eagle Green": "#2a5460",
  "Dark Cyan": "#01918d",
  "Polished Pine": "#6aa896",
  "Old Mauve": "#673149",
  "Light Coral": "#f66d6d",
  "Brown Sugar": "#b47a60",
  "Orchid Pink": "#f9c5d1",
  "Space Cadet": "#202136",
  "Space Cadet 2": "#2d325b"
}

export const randomColor = () => {
  const colorKeys = Object.keys(colors)
  const randomIndex = Math.floor(Math.random() * colorKeys.length)

  return colors[colorKeys[randomIndex]]
}

export const theme = {
  colors: {
    primary: colors["Orchid Pink"],
    textOnLightBg: colors["Space Cadet"],
    darkBg: colors["Space Cadet 2"],
    darkGreen: colors["Midnight Green Eagle Green"],
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  fonts: {
    headings: "'Pacifico', cursive;",
    paragraphs: "'Noto Sans', sans-serif;",
  },
  space: [2, 4, 8, 16, 34, 68, 124, 248, 496, 992],
  sizes: [2, 4, 8, 16, 34, 68, 124, 248, 496, 992]
}