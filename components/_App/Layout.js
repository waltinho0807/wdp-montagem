import React from 'react';
import Head from 'next/head';
import StaticHeader from './StaticHeader';
import Footer from './Footer';


const Layout = ({ children, user }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>WdpShoes | Home</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="./public/css/icons.css" />
                <link href="https://file.myfontastic.com/gMNiHf8HU5GG4r6y622k2N/icons.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/boot.css" />
                <link rel="stylesheet" href="/css/themes/style.css" />
                <link rel="shortcut icon" href="/css/themes/logo/favicon.png" />
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            </Head>
           
            <StaticHeader user={user} />
            {children}
            <Footer />
            <script src="/jquery.js"></script>
            <script src="/scripts.js"></script>
            <script src="/css/themes/script.js"></script>
            
        </React.Fragment>
    );
}

export default Layout;