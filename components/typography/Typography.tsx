import styled from 'styled-components'
import {
  color,
  ColorProps,
  system,
  typography,
  TypographyProps
} from 'styled-system'

type TextTransformProps = {
  textTransform?: 'uppercase' | 'lowercase'
}

export const Typography = styled('p')<
  TypographyProps & ColorProps & TextTransformProps
>(typography, color, system({ textTransform: true }))