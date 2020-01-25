import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const MainHeader = styled.h1`
  font-size: 3em;
`;

const LayoutWrapper = styled.div`
  padding: 1em;
  margin-right: auto;
  margin-left: auto;
  font-family: "Cutive Mono", monospace;
  max-width: 800px;
  max-width: 45%;
`;
const A = styled.a`
  color: pink;
  &:hover {
    font-weight: bold;
    text-decoration: none;
  }
`;
const ButtonLike = styled.span`
  border: 1px solid pink;
  border-radius: 3px;
  padding: 0.2em 0.3em;
  &:hover {
    color: white;
    font-weight: bold;
    background-color: pink;
  }
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
        <A href="https://t.me/zuzjes">Telegram</A>
        <br />
        <ButtonLike>
          <A href="/references" className="buttonLike">
            Reference
          </A>
        </ButtonLike>
      </LayoutWrapper>

      <style jsx>
        {`
          .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            font-family: "Cutive Mono", monospace;
            max-width: 800px;
          }
          h1 {
            font-size: 3em;
          }
          p,
          a {
            font-size: 1.2rem;
          }
          a {
            color: grey;
          }
          .buttonLike {
            border: 1px pink solid;
            padding: ;
          }
          .quote {
            border-left: solid 2px grey;
            padding-left: 1rem;
          }
          ::selection {
            background: #b5ebde; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #b5ebde; /* Gecko Browsers */
          }
        `}
      </style>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
