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

export const theme = {
  colors: {
    primary: colors["Orchid Pink"],
    textOnLightBg: colors["Space Cadet"],
    darkBg: colors["Space Cadet 2"],
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
}