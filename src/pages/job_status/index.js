// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'
import CardReadyToMingle from 'src/views/cards/CardReadyToMingle'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardMembership from 'src/views/cards/CardMembership'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'
import UserLayout from 'src/layouts/UserLayout'


const CardBasic = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={12}>
                <Typography variant='h5'>So where do you stand with your job hunt?</Typography>
            </Grid>
            
            <Link href='/dicipline/'>
                <Grid item xs={12} sm={6} md={4}>
                    <CardReadyToMingle status={1} description={'Yes I am actively looking for new Opportunities'} title={'Ready to Mingle'} />
                </Grid>
            </Link>
            <Link href='/dicipline/'>
            <Grid item xs={12} sm={6} md={4}>
                <CardReadyToMingle status={2} description={'I am not sure at the moment.'} title={"It's complicated"} />
            </Grid>
            </Link>
            <Link href='/dicipline/'>
            <Grid item xs={12} sm={6} md={4}>
                <CardReadyToMingle status={3} description={"I am done for now, I'll think later."} title={'Off the Market'} />
            </Grid>
            </Link>
        </Grid>
    )
}


CardBasic.getLayout = page => <UserLayout onBoardFlow={true}>{page}</UserLayout>

export default CardBasic;