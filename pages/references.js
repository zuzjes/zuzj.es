import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

const LayoutWrapper = styled.div`
  padding: 1em;
  margin-right: auto;
  margin-left: auto;
  font-family: "Cutive Mono", monospace;
  max-width: 800px;
  max-width: 45%;
`;

const Quote = styled.div`
  border-left: 1.5px solid grey;
  padding-left: 2em;
`;
const References = () => (
  <>
    <LayoutWrapper>
      <a href="https://www.linkedin.com/in/patrik-helta-9a06304b/">
        <h3>Patrik Helta</h3>
      </a>
      <Quote>
        Zuzka k nám na projekt nastoupila na pozici junior kodéra jako externí
        výpomoc. Velmi rychle se dokázala naučit pracovat s naším vlastním
        frontend frameworkem a nedělalo jí sebemenší problém dodržovat námi
        nastavené best-practices pro psaní kódu. <br />
        Především ale oceňuji to, že s týmem aktivně komunikovala a vždy se nad
        úkoly zamýšlela, proaktivně řešila zadanou práci a nezahazovala problémy
        pod koberec, což je u juniorních vývojářů opravdu výjimečná vlastnost. I
        přesto, že byla jediná holka v týmu, okamžitě se s ostatními vývojáři
        jala hodnotit kvalitu dílenského zpracování a estetičnost zaparkovaných
        vozidel před budovou. :)
        <br />
        Díky za pomoc, Zuzko.
      </Quote>
    </LayoutWrapper>
  </>
);

export default References;
