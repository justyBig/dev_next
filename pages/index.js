import React, { useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from 'next/image';

const Home = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handelMobileClick = () => {
        if (mobileOpen) {
            document.body.classList.remove('mobileOpen');
            setMobileOpen(false);
        } else {
            document.body.classList.add('mobileOpen');
            setMobileOpen(true);
        }
    };
    return (
        <div>
            {mobileOpen && <div id="overlay"></div>}
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato&family=Pacifico&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <title>Dyode.Dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header
                    mobileClick={handelMobileClick}
                    mobileOpenProp={mobileOpen}
                />
                <Hero />
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};
export default Home;
