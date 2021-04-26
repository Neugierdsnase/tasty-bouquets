import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { ReactSVG } from 'react-svg'
import { Typography } from '../typography/Typography'
import { Box } from './Box'
import { Flexbox } from './Flexbox'

const LOGO_SIZE = '400px'

export const AppSideBar: FunctionComponent = () => (
  <Box color='primary' bg='darkBg' position='absolute' top={0} right={0} width={['100vw', '100vw', '50vw']} height='100vw'>
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
      <Box width='30vw'>
        <Link href='/about'>
          <Typography color='primary'>About</Typography>
        </Link>
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