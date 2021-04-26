import React, { FunctionComponent } from 'react'
import { Box } from './Box'
import { Flexbox } from './Flexbox'

export const Content: FunctionComponent = ({ children }) => (
  <Flexbox flexDirection={['column-reverse','column-reverse', 'row',]}>
    <Box width={['100vw', '100vw', '50vw']} height='100vh'>{children}</Box>
    <Box width={['100vw', '100vw', '50vw']} height='100vh' />
  </Flexbox>
)