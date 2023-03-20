import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import Head from 'next/head';

const Home = () => {

  return (
      <>
<Head>
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKINGCODE}`}
/>

<script
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', newDate());
    gtag('config', '${process.env.TRACKINGCODE}', {
      page_path: window.location.pathname,
    })
    `
  }}
/>
</Head>

    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
</>
  );
};
export default Home;
