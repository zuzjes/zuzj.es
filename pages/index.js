import Head from 'next/head'
import Gauges from '../components/Gauges'
import GoogleAnalytics from '../components/GoogleAnalytics'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`
const Container = styled.div`
  padding: 2.5em 2em;
  font-family: 'IBM Plex Sans', sans-serif;
  max-width: 800px;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
  margin-block-start: 0em;

`
const A = styled.a`
  color: #088958;
`
const Name = styled.a`
  color: #088958;
`
const Reference = styled.p`
  margin: 2em 0 0.5em 0;
`

export default () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Zuzka Jeschke - zuzjes.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Name>Zuzka Jeschke</Name>
        <Header>Reference</Header>
        <Reference>
          Zuzka k nám na projekt nastoupila na pozici junior kodéra jako externí
          výpomoc. Velmi rychle se dokázala naučit pracovat s naším vlastním
          frontend frameworkem a nedělalo jí sebemenší problém dodržovat námi
          nastavené best-practices pro psaní kódu. Především ale oceňuji to, že
          s týmem aktivně komunikovala a vždy se nad úkoly zamýšlela, proaktivně
          řešila zadanou práci a nezahazovala problémy pod koberec, což je u
          juniorních vývojářů opravdu výjimečná vlastnost. I přesto, že byla
          jediná holka v týmu, okamžitě se s ostatními vývojáři jala hodnotit
          kvalitu dílenského zpracování a estetičnost zaparkovaných vozidel před
          budovou. Díky za pomoc, Zuzko.
        </Reference>
        <Name>
          {' '}
          -{' '}
          <A href="https://www.linkedin.com/in/patrik-helta-9a06304b/">
            Patrik Helta
          </A>
        </Name>

        <Reference>
          Zuzka is easy going, good spirited, dedicatied person. Working with
          her was really good experience and I´m really sorry for seeing her go.
          Best of luck in your next endeavours!
        </Reference>
        <Name>
          {' '}
          -{' '}
          <A href="https://www.linkedin.com/in/zdenek-slezak/">Zdeněk Slezák</A>
        </Name>
      </Container>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  )
}
