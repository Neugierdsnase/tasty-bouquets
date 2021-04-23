import Head from 'next/head'
import React, { Fragment, FunctionComponent } from 'react'
import { ReactSVG } from 'react-svg'
import { Box } from '../components/layout/Box'
import { Content } from '../components/layout/Content'
import { Flexbox } from '../components/layout/Flexbox'
import { Typography } from '../components/typography/Typography'
import { BouquetInfobox } from '../components/ui-elements/bouquets-infobox/BouquetInfobox'
import { mockBouquet } from '../temporaryMockData'

const LOGO_SIZE = '400px'

const Home: FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>Tasty Bouquets</title>
    </Head>
    <Content leftSide={{Component: BouquetBox, backgroundColor: 'darkGreen'}} rightSide={{Component: LogoWithText, backgroundColor:'darkBg'}} />
  </Fragment>
)

const BouquetBox: FunctionComponent = () => <Box height='100%' width='100%' bg={'darkGreen'}>
  <BouquetInfobox bouquet={mockBouquet} />
</Box> 

const LogoWithText: FunctionComponent = () => (
  <Box color='primary'>
      <Flexbox alignItems='center' justifyContent='center' flexDirection='column'>
        <Box height={LOGO_SIZE} width={LOGO_SIZE}>
        <ReactSVG 
          src='logo.svg'
          beforeInjection={(svg) => {
            svg.setAttribute('style', `width: ${LOGO_SIZE}; height: ${LOGO_SIZE}`)
          }} />
        </Box>
        <Box width='30vw'>
        <Typography m='auto' as='h1' fontFamily='headings'>
          Willkommen
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Box>
      </Flexbox>
    </Box>
)

export default Home