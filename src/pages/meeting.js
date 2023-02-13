// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'


// ** Icons Imports
import Close from 'mdi-material-ui/Close'

import dynamic from 'next/dynamic'

const ZoomSDK = dynamic(() => import('src/@core/components/zoom/index.js'), {
    ssr: false,
})

const TabAccount = () => {

  return (
    <>
      <ZoomSDK />
    </>
    
  )
}

export default TabAccount
