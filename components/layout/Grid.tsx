import styled from 'styled-components'
import { grid, GridProps } from 'styled-system'
import { theme } from '../../styles/theme'

export const GridContainer = styled('div')<GridProps>(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    justifyItems: 'stretch',
  },
  grid
)

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type StyledGridItemProps = {
  sm?: ColumnSpan
  md?: ColumnSpan
  lg?: ColumnSpan
}

export const GridItem = styled.div<StyledGridItemProps>`
  grid-column-start: auto;
  grid-row-start: auto;
  grid-row-end: span 1;
  ${theme.mediaQueries.small} {
    grid-column-end: span ${({ sm }) => sm || '12'};
  }
  ${theme.mediaQueries.medium} {
    grid-column-end: span ${({ md, sm }) => md || sm || '12'};
  }
  ${theme.mediaQueries.large} {
    grid-column-end: span ${({ lg, md, sm }) => lg || md || sm || '12'};
  }
`