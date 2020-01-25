import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 45%;
`;
export const References = () => (
  <>
    <LayoutWrapper>
      <a href="https://www.linkedin.com/in/patrik-helta-9a06304b/">
        <h3>Patrik Helta</h3>
      </a>
      <Quote>
        Zuzka k nám na projekt nastoupila na pozici junior kodéra jako externí
        výpomoc. Velmi rychle se dokázala naučit pracovat s naším vlastním
        frontend frameworkem a nedělalo jí sebemenší problém dodržovat námi
        nastavené best-practices pro psaní kódu. Především ale oceňuji to, že s
        týmem aktivně komunikovala a vždy se nad úkoly zamýšlela, proaktivně
        řešila zadanou práci a nezahazovala problémy pod koberec, což je u
        juniorních vývojářů opravdu výjimečná vlastnost. I přesto, že byla
        jediná holka v týmu, okamžitě se s ostatními vývojáři jala hodnotit
        kvalitu dílenského zpracování a estetičnost zaparkovaných vozidel před
        budovou. :) Díky za pomoc, Zuzko.
      </Quote>
    </LayoutWrapper>
    {/* <style jsx>
        {`
          .section {
            padding-top: 1.5rem;
          }
          .w-45 {
            max-width: 45%;
          }
          .padd-5 {
            padding: 5px;
          }
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
            color: #ff5296;
          }
          .quote {
            border-left: solid 2px grey;
            padding-left: 1rem;
          }

      </style> */}
  </>
);
