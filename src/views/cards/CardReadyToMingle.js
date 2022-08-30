// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import CardsHeart from 'mdi-material-ui/Heart'
import CardsHeartPulse from 'mdi-material-ui/HeartPulse'
import CardsHeartBroken from 'mdi-material-ui/HeartBroken'

// mdi - heart - pulse

const CardReadyToMingle = ({status, title, description}) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        {status == 1 && <CardsHeart sx={{ fontSize: '5rem', color: 'green' }} />}
        {status == 2 && <CardsHeartPulse sx={{ fontSize: '5rem', color: 'yellow' }} />}
        {status == 3 && <CardsHeartBroken sx={{ fontSize: '5rem', color: 'red' }} />}
        
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardReadyToMingle
