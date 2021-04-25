import React, { FunctionComponent } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import { randomColor } from '../../../styles/theme'

type TransitionComponentBaseProps = {
  height: string
  width: string
  delay?: number
}

export const TransitionComponentBase: FunctionComponent<TransitionComponentBaseProps> = ({ children, height, width, delay }) => {
  const transition = useTransition([103, 102, 101], {
    from: {width},
    enter: {width: '0px'},
    leave: {width},
    trail: 170,
    delay
  })

  return (
    <Container height={height} width={width}>
      {transition((styles, item) => (
        <animated.div style={{zIndex: item, position: 'absolute', height, backgroundColor: randomColor(), top:0, left: 0, ...styles}} />
      ))}
      {children}
    </Container>   
  )
}

const Container = styled.div<{height: string, width: string}>`
  position: relative;
  height: ${({height}) => height};
  width: ${({width}) => width};
`