import { Fragment, FunctionComponent, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { Bouquet } from '../../../types/bouquet'
import { Box } from '../../layout/Box'

type BouquetInfoboxProps = {
  bouquet: Bouquet
}

export const BouquetInfobox: FunctionComponent<BouquetInfoboxProps> = ({bouquet}) => {
  const [toggle, setToggle] = useState(false)
  const { backgroundColor } = useSpring({backgroundColor: toggle ? 'red' : 'blue'})

  return (
    <Fragment>
<button onClick={() => setToggle(!toggle)}>
      Toggle
    </button>
    <OuterBox style={{backgroundColor}}>
      {String(toggle)}
    </OuterBox>
    </Fragment>
)
}


const OuterBox = styled(animated(Box))`
  height: 500px;
  width: 500px;
  border: 5px solid black;
`
