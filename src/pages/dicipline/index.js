// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

// ** Demo Components Imports
import DiciplineSelection from 'src/pages/dicipline/form'

const CardBasic = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={12}>
                <Typography variant='h5'>What is your DISCIPLINE?</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} md={8}>
                <DiciplineSelection />
            </Grid>
            
        </Grid>
    )
}

export default CardBasic
