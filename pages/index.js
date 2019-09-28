import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="w-45 container">
        <h1>
          <b>Zuzka Jeschke</b>
        </h1>
        <p>
          osobni info na <a href="zuzjes.com">zuzjes.com</a> a <a href="https://zuzjes.com/static/resume-zuzana-jeschke.pdf">CV</a>
        </p>
        <p>
          " Zuzka k nám na projekt nastoupila na pozici junior kodéra jako
          externí výpomoc. Velmi rychle se dokázala naučit pracovat s naším
          vlastním frontend frameworkem a nedělalo jí sebemenší problém
          dodržovat námi nastavené best-practices pro psaní kódu. Především ale
          oceňuji to, že s týmem aktivně komunikovala a vždy se nad úkoly
          zamýšlela, proaktivně řešila zadanou práci a nezahazovala problémy pod
          koberec, což je u juniorních vývojářů opravdu výjimečná vlastnost. I
          přesto, že byla jediná holka v týmu, okamžitě se s ostatními vývojáři
          jala hodnotit kvalitu dílenského zpracování a estetičnost
          zaparkovaných vozidel před budovou. :) Díky za pomoc, Zuzko. "
        </p>
        <p className="align-right">
          <a href="https://www.linkedin.com/in/patrik-helta-9a06304b/">
            Patrik Helta
          </a>
        </p>
        <p>v soucatnosti na stazi v SatoshiLabs</p>(
        <a href="https://t.me/zuzjes">Telegram</a>)<br />
        <div className="row">
          <div className="col-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            malesuada non magna at facilisis. Cras venenatis tempor fringilla.
            In fermentum ultrices odio nec finibus. Proin a mi pellentesque,
            sollicitudin ex id, rutrum felis.
          </div>
          <div className="col-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            malesuada non magna at facilisis. Cras venenatis tempor fringilla.
            In fermentum ultrices odio nec finibus. Proin a mi pellentesque,
            sollicitudin ex id, rutrum felis.
          </div>
          <div className="col-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            malesuada non magna at facilisis. Cras venenatis tempor fringilla.
            In fermentum ultrices odio nec finibus. Proin a mi pellentesque,
            sollicitudin ex id, rutrum felis.
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
            max-width: 768px;
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
          ::selection {
            background: #88b9a5; /* WebKit/Blink Browsers */
          }
          ::-moz-selection {
            background: #88b9a5; /* Gecko Browsers */
          }
        `}
      </style>
      <Gauges gauges_site_id="5c4c99e1e2780409622de4ab" />
      <GoogleAnalytics google_analytics_site_id="UA-133283927-1" />
    </>
  );
};
