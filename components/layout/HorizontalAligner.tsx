import React, { FunctionComponent } from 'react'
import { Flexbox } from './Flexbox'

export const HorizontalAligner: FunctionComponent = ({ children, ...rest }) => (
  <Flexbox
    {...rest}
    flexDirection="column"
    justifyContent="center"
    height="100%"
  >
    {children}
  </Flexbox>
)