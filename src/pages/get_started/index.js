import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'src/pages/theme/index';
import SEO from 'src/pages/components/seo';
import Layout from 'src/pages/components/layout';

import WhoYouAre from 'src/pages/get_started/work-hard';

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

                <WhoYouAre />
                
                <SubscribeUs />
            </Layout>
        </ThemeProvider>
    );
}

IndexPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default IndexPage;