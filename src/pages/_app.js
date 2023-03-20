import Theme from '../styles/theme';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-VKKBKTH192"
ReactGA.initialize(TRACKING_ID);

export default function App({ Component, pageProps }) {

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 