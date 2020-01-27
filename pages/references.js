import "bootstrap/dist/css/bootstrap.min.css";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Reccomendation } from "../components/Reccomendation";

const References = () => (
  <>
    <LayoutWrapper>
      <Reccomendation name="Patrik Helta"
      link="https://www.linkedin.com/in/patrik-helta-9a06304b/"
      text="Zuzka k nám na projekt nastoupila na pozici junior kodéra jako externí
      výpomoc. Velmi rychle se dokázala naučit pracovat s naším vlastním
      frontend frameworkem a nedělalo jí sebemenší problém dodržovat námi
      nastavené best-practices pro psaní kódu.
      Především ale oceňuji to, že s týmem aktivně komunikovala a vždy se nad
      úkoly zamýšlela, proaktivně řešila zadanou práci a nezahazovala problémy
      pod koberec, což je u juniorních vývojářů opravdu výjimečná vlastnost. I
      přesto, že byla jediná holka v týmu, okamžitě se s ostatními vývojáři jala
      hodnotit kvalitu dílenského zpracování a estetičnost zaparkovaných vozidel
      před budovou. :) Díky za pomoc, Zuzko. "/>

<Reccomendation name="Ondrej Sika"
      link="www.ondrej-sika.cz"
      text="Zuzanka je dokonala"/>
    </LayoutWrapper>
  </>
);

export default References;
