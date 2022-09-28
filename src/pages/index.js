import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'src/lib/theme/index';
import SEO from 'src/lib/components/seo';
import Layout from 'src/lib/components/layout';
import Banner from 'src/lib/sections/banner';
import Services from 'src/lib/sections/services';
import ExcitingFeatures from 'src/lib/sections/exciting-features';
import WorkHard from 'src/lib/sections/work-hard';
import UltimateFeatures from 'src/lib/sections/ultimate-features';
import HappyCustomer from 'src/lib/sections/happy-customer';
import Blog from 'src/lib/sections/blog';
import SubscribeUs from 'src/lib/sections/subscribe-us';
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