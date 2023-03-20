import Theme from '../styles/theme';

import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../../lib/gtag"
import Head from "next/head"

// import Script from 'next/script'
export default function App({ Component, pageProps }) {
  const router = useRouter();
//uses the useRouter and useEffect hooks to record a page view every time the user navigates to another page.
  useEffect(() => {
      const handleRouteChange = (url) => {
      gtag.pageview(url);
      };
    
      router.events.on("routeChangeComplete", handleRouteChange);
    
        return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
        };
      }, [router.events]);
    
  return (
    <>
    <Head>
      <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-V4WB28TEJC" />
      <script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V4WB28TEJC', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 