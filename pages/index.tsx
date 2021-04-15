import Head from 'next/head'
import React, { Fragment, FunctionComponent } from 'react'
import { Box } from '../components/layout/Box'
import { Typography } from '../components/typography/Typography'

const Home:FunctionComponent = () => (
  <Fragment>
    <Head>
      <title>This is the page title.</title>
    </Head>
    <Box bg='darkBg'>
      <Typography color='primary'>Hello world</Typography>
    </Box>
  </Fragment>
)

export default Home