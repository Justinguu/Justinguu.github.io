import Theme from '../styles/theme';
import GoogleAnalytics from '@bradgarropy/next-google-analytics'
import { useRouter } from 'next/router';





export default function App({ Component, pageProps }) {
  const router = useRouter();

    
  return (
    <>
  
    
   
      <Theme>
        <GoogleAnalytics measurementId="G-V4WB28TEJC" />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 