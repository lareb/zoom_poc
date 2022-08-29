import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'src/pages/theme/index';
import SEO from 'src/pages/components/seo';
import Layout from 'src/pages/components/layout';
import Banner from 'src/pages/sections/banner';
import Services from 'src/pages/sections/services';
import ExcitingFeatures from 'src/pages/sections/exciting-features';
import WorkHard from 'src/pages/sections/work-hard';
import UltimateFeatures from 'src/pages/sections/ultimate-features';
import HappyCustomer from 'src/pages/sections/happy-customer';
import Blog from 'src/pages/sections/blog';
import SubscribeUs from 'src/pages/sections/subscribe-us';
// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

	const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Startup hosting provider landing"
                    description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
                />
                <Banner />
                <Services />
                <ExcitingFeatures />
                <WorkHard />
                <UltimateFeatures />
                <HappyCustomer />
                <Blog />
                <SubscribeUs />
            </Layout>
        </ThemeProvider>
    );
}

IndexPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default IndexPage;