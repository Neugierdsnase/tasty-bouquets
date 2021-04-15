import styled from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'

export const Flexbox = styled('div')<FlexboxProps & LayoutProps & SpaceProps>(
  { display: 'flex' },
  layout,
  flexbox,
  space
)