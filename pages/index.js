import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { LayoutWrapper } from "../components/LayoutWrapper";
import { A } from "../components/A";
import { Button } from "../components/Button";

const MainHeader = styled.h1`
  font-size: 3em;
`;

export default () => {
  return (
    <>
      <Head>
        <title>Zuzka Jeschke - zuzj.es</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutWrapper>
        <MainHeader>Zuzka Jeschke</MainHeader>
        <A href="https://t.me/zuzjes">Telegram</A>-
        <A href="https://www.linkedin.com/in/zuzjes/">Linkedin</A>-
        <A href="https://www.facebook.com/zuzka.jeschke">Facebook</A>-
        <A href="https://twitter.com/zuzjes">Twitter</A>-
        <A href="https://www.instagram.com/zuzjes/">Instagram</A>
        <Button href="/references">Reference</Button>
        <Button href="https://www.instagram.com/zuz_kytky/">
          Moje rostlinná sbírka
        </Button>
      </LayoutWrapper>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
