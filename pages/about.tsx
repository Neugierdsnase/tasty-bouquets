import Head from 'next/head'
import React, { Fragment, FunctionComponent } from 'react'
import { AppSideBar } from '../components/layout/AppSideBar'
import { Box } from '../components/layout/Box'
import { Content } from '../components/layout/Content'

const About: FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>Tasty Bouquets</title>
    </Head>
    <Content>
      <BouquetBox />
    </Content>
  </Fragment>
)

const BouquetBox: FunctionComponent = () => <Box />

export default About