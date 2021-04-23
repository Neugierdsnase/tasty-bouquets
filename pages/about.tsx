import Head from 'next/head'
import Link from 'next/link'
import React, { Fragment, FunctionComponent } from 'react'
import { ReactSVG } from 'react-svg'
import { Box } from '../components/layout/Box'
import { Content } from '../components/layout/Content'
import { Flexbox } from '../components/layout/Flexbox'

const LOGO_SIZE = '400px'

const About: FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>Tasty Bouquets</title>
    </Head>
    <Content leftSide={{Component: BouquetBox, backgroundColor: 'darkGreen'}} rightSide={{Component: LogoWithText, backgroundColor:'darkBg'}} />
  </Fragment>
)

const BouquetBox: FunctionComponent = () => <Box />

const LogoWithText: FunctionComponent = () => (
  <Box color='primary'>
      <Flexbox alignItems='center' justifyContent='center' flexDirection='column'>
        <Link href='/'>
        <Box height={LOGO_SIZE} width={LOGO_SIZE}>  
        <ReactSVG 
          src='logo.svg'
          beforeInjection={(svg) => {
            svg.setAttribute('style', `width: ${LOGO_SIZE}; height: ${LOGO_SIZE}`)
          }} />
        </Box>
        </Link>
      </Flexbox>
    </Box>
)

export default About