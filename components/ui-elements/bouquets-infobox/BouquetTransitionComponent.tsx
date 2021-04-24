import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { Bouquet } from '../../../types/bouquet'
import { Typography } from '../../typography/Typography'
import { TransitionComponentBase } from './TransitionComponentBase'

type BouquetTransitionComponentProps = {
  bouquet: Bouquet
}

export const BouquetTransitionComponent: FunctionComponent<BouquetTransitionComponentProps> = ({ bouquet }) => {
  const {name, descriptionLong, price, targetAudience} = bouquet
  
  return (
    <Container>
      <ItemContainer style={{top: 0, left: '50px', border: '1px solid black', borderBottom: '0px', width: '250px'}}>
        <TransitionComponentBase height='60px' width='250px'>
          <div style={{padding: theme.space[2]}}>
          <Typography m='auto' as='h2' fontFamily='headings' color='primary'>{name}</Typography>
          </div>
        </TransitionComponentBase>
      </ItemContainer>
      
      <ItemContainer style={{top: '60px', left: '0px', border: '1px solid black'}}>
        <TransitionComponentBase height='150px' width='350px' delay={250}>
        <div style={{padding: theme.space[2]}}>
        <Typography color='primary'>{descriptionLong}</Typography>
        </div>
        </TransitionComponentBase>
      </ItemContainer>

      <ItemContainer style={{top: `210px`, left: '220px', border: '1px solid black', borderTop: '0px'}}>
        <TransitionComponentBase height='60px' width='80px' delay={450}>
        <div style={{padding: theme.space[2], textAlign: 'right'}}>
        <Typography color='primary'>{`€ ${price}`}</Typography>
        </div>
        </TransitionComponentBase>
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const ItemContainer = styled.div`
  position: absolute;
  overflow: hidden;
`