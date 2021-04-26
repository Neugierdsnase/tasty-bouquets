import Head from 'next/head'
import React, { Fragment, FunctionComponent } from 'react'
import { Box } from '../components/layout/Box'
import { Content } from '../components/layout/Content'
import { BouquetInfobox } from '../components/ui-elements/bouquets-infobox/BouquetInfobox'
import { mockBouquet } from '../temporaryMockData'

const Home: FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>Tasty Bouquets</title>
    </Head>
    <Content>
      <BouquetBox />
    </Content>
  </Fragment>
)

const BouquetBox: FunctionComponent = () => <Box height='100%' width='100%' bg='darkGreen'>
  <BouquetInfobox bouquet={mockBouquet} />
</Box> 

export default Home