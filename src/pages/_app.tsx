import "@/styles/globals.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Loader from '@/components/loader';
import CustomCursor from "@/components/customcursor";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode | null;
    authenticate?: boolean;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);
    const authProps = Component.authenticate;

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        loading ? (
            <Loader />
        ) : (
            <div>
                <CustomCursor/>
                {getLayout(<Component {...pageProps} />)}
            </div>
        )
    );
}
