// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Card support
import CardSupport from 'src/views/cards/CardSupport'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <Trophy />
                </Grid>
                <Grid item xs={12} md={8}>
                    <StatisticsCard />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <WeeklyOverview />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <DepositWithdraw />
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <CardHeader title='Job Applied' titleTypographyProps={{ variant: 'h6' }} />
                        <Table />
                    </Card>

                </Grid>



            </Grid>
        </ApexChartWrapper>
    )
}

export default Dashboard
