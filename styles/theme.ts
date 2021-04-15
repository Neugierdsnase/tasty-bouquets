// these are the Bootstrap breakpoints (first one omitted)
const breakpoints = ['768px', '992px', '1200px']

export const theme = {
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
}