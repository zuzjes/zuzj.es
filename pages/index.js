import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  padding: 0 2em;
  font-family: "IBM Plex Sans", sans-serif;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
`;
// const A = styled.a`
//   color: #088958;
// `;
const Button = styled.a`
  border: 1px solid #088958;
  padding: 0.15em 0.4em;
  margin: 0.3em 0.6em 0.3em 0;
  color: #088958;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 1px solid #088958;
    padding: 0.15em 0.4em;
    background-color: #088958;
    color: white;
  }
`;
Button.defaultProps = {
  target: "_blank"
};

export default () => (
  <>
    <GlobalStyle />
    <Head>
      <title>Zuzka Jeschke - zuzj.es</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Container>
      <Header>Zuzka Jeschke</Header>
      <Button href="https://zuzjes.com">zuzjes.com</Button>
      <br />
      <Button href="https://www.linkedin.com/in/zuzjes/">Linkedin</Button>
      <Button href="https://github.com/zuzjes">Github</Button>
      <Button href="https://www.facebook.com/zuzka.jeschke">Facebook</Button>
      <Button href="https://twitter.com/zuzjes">Twitter</Button>
      <Button href="https://www.instagram.com/zuzjes/">
        Instagram @zuzjes
      </Button>
      <br />

      <Button href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</Button>
      <Button href="tel:+420608540464">+420 608 540 464</Button>
      <Button href="https://t.me/zuzjes">Telegram</Button>
      <br />
      <Button href="https://pay.revolut.com/profile/zuzanakf6">
        Revolut @zuzjes
      </Button>
      <Button href="https://paypal.me/zuzjes">Paypal @zuzjes</Button>
      <br />

      <Button href="https://www.instagram.com/zuz_kytky/">
        Instagram @zuz_kytky
      </Button>
      <Button href="https://www.instagram.com/jsemnela/">
        Instagram @jsemnela
      </Button>
      <p>
        IČ: 07933215 <br />
        Číslo účtu: 2501498897 / 2010 (Fio)
        <br />
      </p>
    </Container>
    <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
    <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
  </>
);
