import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system
} from 'styled-system'

type CursorProps = { cursor?: 'default' | 'pointer' }
type TextAlignProps = { textAlign?: 'center' | 'left' | 'right' }

export const Box = styled('div')<
  BackgroundProps &
    ShadowProps &
    SpaceProps &
    LayoutProps &
    CursorProps &
    ColorProps &
    BorderProps &
    PositionProps &
    TextAlignProps
>(
  { boxSizing: 'border-box' },
  background,
  space,
  layout,
  shadow,
  color,
  border,
  position,
  system({ cursor: true, textAlign: true })
)