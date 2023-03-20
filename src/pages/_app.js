import Theme from '../styles/theme';

import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../../lib/gtag"
import Script from "next/script"

// import the Script


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
  
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-V4WB28TEJC" />
      <Script
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
   
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 