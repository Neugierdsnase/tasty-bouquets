import { FunctionComponent } from 'react'
import { Bouquet } from '../../../types/bouquet'
import { BouquetTransitionComponent } from './BouquetTransitionComponent'

type BouquetInfoboxProps = {
  bouquet: Bouquet
}

export const BouquetInfobox: FunctionComponent<BouquetInfoboxProps> = ({bouquet}) => {


  return (
    <BouquetTransitionComponent bouquet={bouquet} />
  )
}