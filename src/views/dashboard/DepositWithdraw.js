// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'
// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '08/12/2022',
    subtitle: 'Ney York',
    title: 'Hemilton Care',
    logo: '/images/logos/1.png'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '08/15/2022',
    title: 'RTY Hospitals',
    subtitle: 'Manhattan',
    logo: '/images/logos/6.png'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: '08/15/2022',
    title: 'Care n Care',
    subtitle: 'New Jersey',
    logo: '/images/logos/3.png'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '08/16/2022',
    title: 'Amex Care PVT LTD',
    subtitle: 'New York',
    logo: '/images/logos/4.png'
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: '08/22/2022',
    title: 'Wellness Hospital',
    subtitle: 'Charlotte',
    logo: '/images/logos/5.png'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Profile Requested'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle} | {item.amount}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    <Link passHref href='/pages/register'>
                      <LinkStyled>Details</LinkStyled>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>


    </Card>
  )
}

export default DepositWithdraw
