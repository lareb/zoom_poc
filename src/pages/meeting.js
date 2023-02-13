// ** React Imports
// import { useState } from "react";

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import TabList from '@mui/lab/TabList'
// import TabPanel from '@mui/lab/TabPanel'
// import TabContext from '@mui/lab/TabContext'
// import { styled } from '@mui/material/styles'
// import MuiTab from '@mui/material/Tab'

// // ** Icons Imports
// import AccountOutline from 'mdi-material-ui/AccountOutline'
// import FieldJobTitle from 'mdi-material-ui/BriefcaseEdit'
// import Certificate from 'mdi-material-ui/Certificate'
// import BookEducationOutline from 'mdi-material-ui/BookEducationOutline'
// import Skills from 'mdi-material-ui/Glasses'
// import AccountBoxMultiple from 'mdi-material-ui/AccountBoxMultiple'

// // ** Demo Tabs Imports
// import TabInfo from 'src/views/account-settings/TabInfo'
// import TabAccount from 'src/views/account-settings/TabAccount'
// import TabSecurity from 'src/views/account-settings/TabSecurity'

// // ** Third Party Styles Imports
// import 'react-datepicker/dist/react-datepicker.css'

// import dynamic from 'next/dynamic'

// const ZoomSDK = dynamic(() => import('src/@core/components/zoom/index.js'), {
//     ssr: false,
// })



// const AccountSettings = () => {
//   // ** State
//   const [value, setValue] = useState('account')

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }



//   return (
//     <Card>
//           <ZoomSDK />
//           <TabAccount />
          
//     </Card>
//   )
// }

// export default AccountSettings


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
  // ** State

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  // const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onSubmit = () => {

  }

  return (
    <>
      <ZoomSDK />
    </>
    // <Card>
    //   <CardContent>
    //     <Typography variant='h5'>Please Provide details to start the Online Class</Typography>
    //     <form onSubmit={onSubmit}>
    //         <Grid container spacing={7} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            
    //           <Grid item xs={12} sm={6}>
    //             <TextField 
    //               fullWidth 
    //               label='Full Name' 
    //               placeholder='First Name' 
    //               // defaultValue='Lareb Nawab' 
    //               onChange={(e) => setFirstName(e.target.value)} 
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               fullWidth
    //               type='email'
    //               label='Email'
    //               placeholder='Email'
    //               // defaultValue='lareb.nawab@gmail.com'
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </Grid>

    //           <Grid item xs={12}>
    //             <Button variant='contained' sx={{ marginRight: 3.5 }}>
    //               Let's Start
    //             </Button>
    //             <Button type='reset' variant='outlined' color='secondary'>
    //               Reset
    //             </Button>
    //           </Grid>

    //           <ZoomSDK />
    //         </Grid>
    //       </form>
    //     </CardContent>
    //   </Card>
  )
}

export default TabAccount
