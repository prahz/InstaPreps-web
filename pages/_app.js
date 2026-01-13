import React, { Fragment, useEffect } from 'react';
// import { MathJaxContext } from "better-react-mathjax";
// import ReactGa from 'react-ga';
// import 'react-slideshow-image/dist/styles.css'

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import apiClient from 'src/apiClient';
import { Provider } from 'components/auth/provider';
import 'styles/tailwind.css';
import 'nprogress/nprogress.css';
import 'styles/olympiad.css';
import 'styles/vendors.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/sat.module.scss';
import 'styles/sataccordion.css';
import 'styles/satlanding.css';
import 'styles/landingPage.css';
import 'styles/login.css';
import 'styles/terms.css';
import { ToastContainer } from 'react-toastify';
import 'react-circular-progressbar/dist/styles.css';

// import 'styles/login.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const client = apiClient();

function MyApp({ Component, pageProps }) {
  const mathJaxConfig = {
    loader: { load: ["input/tex", "output/chtml"] },
  };
  return (
    <>
      <Head>
        <title>World's 1st Confidence Diagnosis App </title>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
          key='viewport'
        />

        <link rel='icon' href='/images/instapreps.png' />
      </Head>
      <Provider client={client}>
      
      <Component {...pageProps} />
        <ToastContainer />
         
      </Provider>
    </>
  );
}

export default MyApp;
