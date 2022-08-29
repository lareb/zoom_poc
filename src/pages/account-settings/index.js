// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import FieldJobTitle from 'mdi-material-ui/BriefcaseEdit'
import Certificate from 'mdi-material-ui/Certificate'
import BookEducationOutline from 'mdi-material-ui/BookEducationOutline'
import Skills from 'mdi-material-ui/Glasses'
import AccountBoxMultiple from 'mdi-material-ui/AccountBoxMultiple'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Details</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FieldJobTitle />
                <TabName>Discipline & Specialization</TabName>
              </Box>
            }
          />
          <Tab
            value='education'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BookEducationOutline />
                <TabName>Education & Certification</TabName>
              </Box>
            }
          />
          <Tab
            value='skills'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Skills />
                <TabName>Skills</TabName>
              </Box>
            }
          />
          <Tab
            value='past_experience'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountBoxMultiple />
                <TabName>Past Experience</TabName>
              </Box>
            }
          />
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Certificate />
                <TabName>Job Preference</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='education'>
          <TabInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='skills'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='past_experience'>
          <TabInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>

      </TabContext>
    </Card>
  )
}

export default AccountSettings
