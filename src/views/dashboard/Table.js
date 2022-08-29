// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    name: 'General Hospitals',
    designation: 'New York city',
    date: '07/27/2022',
    email: 'Physical Therapist',
    status: 'rejected',
    notification: 'Position closed',
  },
  {
    name: 'Omega Hospitals',
    designation: 'New York city',
    date: '07/28/2022',
    email: 'Physical Therapist',
    status: 'applied',
    notification: 'Profile is not reviewed',
  },
  {
    name: 'MGH Hospitals',
    designation: 'Manhattan',
    date: '08/01/2022',
    email: 'Physical Therapist',
    status: 'rejected',
    notification: "Profile doesn't match with the requirement",
  },
  {
    name: 'Smile You Healthcares',
    designation: 'New York city',
    date: '08/08/2022',
    email: 'Sr. Physical Therapist',
    status: 'applied',
    notification: 'In Review',
  },  
  {
    name: 'Soam Healthcare',
    designation: 'Manhattan',
    date: '08/11/2022',
    email: 'Physical Therapist',
    status: 'applied',
    notification: 'Shortlisted for initial discussion.',
  },
  {
    name: 'Care Healthcares Groups',
    designation: 'New York',
    date: '08/18/2022',
    email: 'Sr. Physical Therapist',
    status: 'applied',
    notification: 'Profile Shortlisted',
  },
  {
    name: 'Relax Hospitals',
    designation: 'Manhattan',
    date: '08/19/2022',
    email: 'Physical Therapist',
    status: 'rejected',
    notification: 'Position closed',
  },
  {
    name: 'Sun Shine Healthcares',
    designation: 'New York city',
    date: '08/20/2022',
    email: 'Sr. Physical Therapist',
    status: 'applied',
    notification: 'Position closed',
  },
  {
    name: 'Jevis Healthcare',
    designation: 'Manhattan',
    date: '08/21/2022',
    email: 'Physical Therapist',
    status: 'applied',
    notification: 'Position closed',
  },
  {
    name: 'Complete Care Healthcares',
    designation: 'New Jersey',
    date: '08/25/2022',
    email: 'Sr. Physical Therapist',
    status: 'applied',
    notification: 'Profile reviewd, please wiat.',
  },
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Applied on</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.notification}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
