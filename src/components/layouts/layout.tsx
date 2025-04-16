import React from 'react'
import Header from './header/header';
import Footer from './footer/footer';
import BackToTopButton from '../backtotop';
import SideNav from './sidenav/sidenav';

const SiteLayout = ({ children }: any) => {
    return (
        <div>
            <main>
                <Header />
                {children}
                <SideNav/>
                <BackToTopButton/>
                <Footer />
            </main>
        </div>
    )
};
export const getLayout = (page: React.ReactElement) => (
    <SiteLayout>{page}</SiteLayout>
)

export default SiteLayout;