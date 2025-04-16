import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta
                    name="description"
                    content="UCare Beauty Parlour and Fashion Academy offers premium beauty services and courses. Discover skincare, haircare, makeup, and more by expert professionals. Elevate your beauty skills with our comprehensive courses. Book now!"
                />
                <meta name="keywords" content="titla, meta, nextjs" />
                <meta name="author" content="Abinesh" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
