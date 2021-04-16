import React, { FunctionComponent } from 'react'
import { Box } from './Box'
import { GridContainer, GridItem } from './Grid'

type Side = { backgroundColor: string, Component: FunctionComponent<any>}

type ContentProps = {
  leftSide: Side
  rightSide: Side
}

const Half: FunctionComponent<Side> = ({Component, backgroundColor}) => (
  <GridItem sm={12} md={6}>
    <Box bg={backgroundColor} p={4} widht={['100vw', '100vw', '50vw']} height='100vh'>
      <Component />
      </Box>
    </GridItem>
)

export const Content: FunctionComponent<ContentProps> = ({ leftSide, rightSide }) => (
  <GridContainer>
    <Half {...leftSide} />
    <Half {...rightSide} />
  </GridContainer>
)